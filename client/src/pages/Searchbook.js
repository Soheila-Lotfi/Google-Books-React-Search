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
        API.getBooks(this.state.search).then(res => this.setState({ results: res.data.items })).catch(error => console.log(error));

    }

    handleSaveButton = result => {
  

        API.saveBook({
            "authors": result.volumeInfo.authors,
            "description": result.volumeInfo.description,
            "image": result.volumeInfo.imageLinks.smallThumbnail,
            "link": result.volumeInfo.infoLink,
            "title": result.volumeInfo.title

        }).then(res => console.log(res)).catch(error => console.log(error));
    }

    render() {
        return (
            <Container>
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
                        {this.state.results.length ? (
                            <List>
                                {this.state.results.map(result => (
                                    <ListItem key={result.id}>

                                        <Row>

                                            <Col size="sm-8">
                                                <h1>{result.volumeInfo.title}</h1>
                                                <h2>Written by {result.volumeInfo.authors}</h2>
                                                {/* <div>Written by<ul>{result.volumeInfo.authors.map(item=> <li key={item}>{item}</li>)}</ul></div> */}


                                            </Col>

                                            <Col size="sm-4">
                                                <button className="btn"> <a href={result.volumeInfo.infoLink}>View</a></button>
                                                <button className="btn" onClick={() => this.handleSaveButton(result)}>Save</button>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col size="sm-4">
                                                <img alt="Book" src={result.volumeInfo.imageLinks.smallThumbnail}></img>
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


