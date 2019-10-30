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
            <>
                <Container>
                    <Row>
                        <Col size="sm-12">
                            {this.state.results.length ? (
                                <List>
                                    {this.state.results.map(result => (
                                        <ListItem key={result._id}>

                                            <Row>

                                                <Col size="sm-8">
                                                    <h4>{result.title}</h4>
                                                    {result.authors ?
                                                        (<span>written By:  {result.authors.join(" , ")}</span>) :
                                                        (<span></span>)}


                                                </Col>

                                                <Col size="sm-4">
                                                    <button className="btn float-right ml-3" onClick={() => this.deleteBtn(result._id)}>Delete</button>
                                                    <button className="btn float-right"> <a style={{ color: "black" }} href={result.link}>View</a></button>

                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col size="sm-4">

                                                    <img alt={result.title} style={{ width: "100px", height: "150px", marginTop: "30px" }} src={result.image}></img>
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

            </>
        )

    }

}


export default Saved;