import React, { Component } from "react";
import API from "../utils/API";

class Search extends Component {

    state = {
        search: "",
        results: []


    };

    handleInputChange = (event) => {
        const title = event.target.value
        this.setState({ search: title })

    };

    handleSubmitForm = () => {

        API.getBooks(search).then(res => this.setStater({ results = res.data.items })).catch(error => console.log(error));

    }

    render() {

        return (

            <Container fluid>

                <Row>
                    <h1>Book Search</h1>
                    <h3>Search</h3>
                    <form>
                        <Input
                            value={this.state.search}
                            type="text"
                            placeholder="Book title"
                            onChange={this.handleInputChange}>
                        </Input>
                        <Button
                            type="submit"
                            onClick={this.handleSubmitForm}>Search</Button>
                    </form>
                </Row>
                <Row>
                    {this.state.results.length ? (
                        <List>
                            {this.state.results.map(result => {
                                <ListItem>
                                    <Row>
                                        <Row><Col size="sm-8">
                                        <h1>{result.volumeInfo.title}</h1>
                                        <h2>Written by </h2>
                                        {result.volumeInfo.authors.map(author => {
                                        <h2>author</h2>
                                        })}
                                        <h3>{result.volumeInfo.title}</h3>
                                        </Col> 

                                        <Col size="sm-4">
                                          <Button>View</Button>
                                          <Button>Save</Button>
                                            </Col>
                                            </Row>
                                       
                                    </Row>
                                    <Row>
                                        <Col size="sm-4">
                                         <img src={results.volumeInfo.imageLinks.smallThumbnail}></img>
                                        </Col>
                                        <Col size="sm-8">
                                        <p>{results.volumeInfo.descripton}</p>
                                        </Col>
                                    </Row>
                                </ListItem>

                            })}

                        </List>) : (
                            <ListItem>No Results Found :( Try again!</ListItem>)}
                </Row>


            </Container>




        )

    }


}


