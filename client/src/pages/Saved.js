import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import { List, ListItem } from "../components/List";



class Saved extends Component {

    state = {
        results: []

    };

    componentDidMount() {

        this.loadSavedBook();
    }

    loadSavedBook = () => {
        API.getSavedBooks().then(res => this.setState({ results: res.data })).catch(err => console.log(err))
    }

    deleteBtn = (id) => {
        API.deleteBook(id).then(res => this.loadSavedBook()).catch(err => console.log(err))

    }
    render() {
        return (

            <Container>
                <Row>
                    <Col size="sm-12">
                        {this.state.results.length ? (
                            <List>
                                {this.state.results.map(result => (
                                    <ListItem key={result._id}>

                                        <Row>

                                            <Col size="sm-8">
                                                <h1>{result.title}</h1>

                                                {/* <h2>Written by {result.authors}</h2> */}
                                                {/* {result.authors.forEach(author => console.log(author))} */}
                                                <div>Written by: {result.authors.join(" , ")}</div>


                                            </Col>

                                            <Col size="sm-4">
                                                
                                                <button className="btn"> <a href={result.link}>View</a></button>
                                                <button className="btn" onClick={() => this.deleteBtn(result._id)}>Delete</button>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col size="sm-4">
                                                <img alt="Book" src={result.image}></img>
                                            </Col>
                                            <Col size="sm-8">
                                                <p>{result.description}</p>
                                            </Col>
                                        </Row>
                                    </ListItem>

                                ))}

                            </List>
                        )
                            : (
                                <ListItem>Nothing Saved</ListItem>)}


                    </Col>
                </Row>
            </Container>


        )

    }

}


export default Saved;