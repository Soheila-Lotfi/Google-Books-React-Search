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
    // get the user input by handleInputChange function
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    //get the books from the google book api 
    handleFormSubmit = event => {
        event.preventDefault();
        API.getBooks(this.state.search).then(res => {
            console.log(res.data.items)
            if (res.data.items.length > 0) {
                this.setState({ results: res.data.items })
            }

        }).catch(error => console.log(error));

    }
    //  save the book in database
    handleSaveButton = result => {

        // some of the result coming back from the google book api donot have image, 
        // if they dont have image, we define the src to prevent having errors

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
                        <h3 style={{ fontFamily: "Montserrat" }}>Book Search</h3>
                        <h5 style={{ fontFamily: "Montserrat", marginTop: "20px" }}>Search</h5>
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
                                                <button className="btn float-right ml-3" style={{ color: "black", backgroundColor: "#f4cd23" }} onClick={() => this.handleSaveButton(result)}>Save</button>
                                                <button className="btn float-right" style={{ color: "black", backgroundColor: "#f4cd23" }}> <a style={{ color: "black" }} href={result.volumeInfo.infoLink}>View</a></button>

                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col size="sm-4">
                                                {/* some of the items don't have imagelinks property, we check it with hasOwnProperty */}
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


