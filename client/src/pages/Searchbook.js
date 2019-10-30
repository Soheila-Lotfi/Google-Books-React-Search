import React, { Component } from "react";
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";
import { Container, Row, Col } from "../components/Grid";
import { List, ListItem } from "../components/List";


class Searchbook extends Component {

    state = {
        search: "",
        results: [],
        savedResult: {}


    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.getBooks(this.state.search).then(res => {
            console.log(res.data.items)
            if (res.data.items.length > 0) {
                this.setState({ results: res.data.items })
            }

        }).catch(error => console.log(error));



    }

    handleSaveButton = result => {
        var image;
        if (!result.volumeInfo.hasOwnProperty('imageLinks')) {
            image = "https://via.placeholder.com/150"

        }
        else {
            image = result.volumeInfo.imageLinks.smallThumbnail
        }
        API.saveBook({
            "authors": result.volumeInfo.authors,
            "description": result.volumeInfo.description,
            "image": image,
            "link": result.volumeInfo.infoLink,
            "title": result.volumeInfo.title

        }).then(res => console.log(res)).catch(error => console.log(error));
    }

    render() {
        return (
            <Container fluid>

                <Row>
                    <Col size="sm-12">
                        <h1>Book Search</h1>
                        <h3>Search</h3>
                        <form>
                            <Input
                                value={this.state.search}
                                onChange={this.handleInputChange}
                                name="search"
                                placeholder="Title (required)"
                            />
                            <FormBtn
                                disabled={!(this.state.search)}
                                onClick={this.handleFormSubmit}
                            >
                                Search
                            </FormBtn>
                        </form>

                    </Col>
                </Row>
                <Row>
                    <Col size="sm-12">
                        {console.log("this is" + this.state.results)}
                        {this.state.results.length ? (
                            <List>
                                {this.state.results.map(result => (
                                    <ListItem key={result.id}>

                                        <Row>

                                            <Col size="sm-8">
                                                <h4>{result.volumeInfo.title}</h4>

                                                {/*  if authors exits , join the items of the authors array and display it on the page, otherwise show nothing */}
                                                {result.volumeInfo.authors ?
                                                    (<span>written By:  {result.volumeInfo.authors.join(" , ")}</span>) :
                                                    (<span></span>)}


                                            </Col>

                                            <Col size="sm-4">
                                                <button className="btn float-right ml-3" onClick={() => this.handleSaveButton(result)}>Save</button>
                                                <button className="btn float-right"> <a style={{ color: "black" }} href={result.volumeInfo.infoLink}>View</a></button>

                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col size="sm-4">
                                                {/* some of the items dont have imagelinks property, we check it with hasOwnProperty */}
                                                {result.volumeInfo.hasOwnProperty('imageLinks') ?
                                                    (<img alt={result.volumeInfo.title} style={{ width: "100px", height: "150px", marginTop: "30px" }} src={result.volumeInfo.imageLinks.smallThumbnail}></img>) : (<img alt={result.volumeInfo.title} style={{ width: "100px", height: "150px", marginTop: "30px" }} src="https://via.placeholder.com/150"></img>)}

                                            </Col>
                                            <Col size="sm-8">
                                                <p>{result.volumeInfo.description}</p>
                                            </Col>
                                        </Row>
                                    </ListItem>

                                ))}

                            </List>
                        )
                            : (
                                <ListItem>Search Your Favorite Book</ListItem>)}


                    </Col>
                </Row>

            </Container>
        )
    }

}

export default Searchbook;


