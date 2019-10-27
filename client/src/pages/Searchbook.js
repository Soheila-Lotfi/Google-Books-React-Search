import React, { Component } from "react";
import API from "../utils/API";
import { Input, Formbtn } from "../components/Form";
import { Container, Row, Col } from "../components/Grid";
import { List, ListItem } from "../components/List";


class Searchbook extends Component {

    state = {
        search: "",
        results: []


    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmitForm = () => {

        API.getBooks(this.state.search).then(res => this.setState({ results: res.data.items })).catch(error => console.log(error));

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
                                type="text"
                                placeholder="Book title"
                                onChange={this.handleInputChange}
                                name="searchBook">
                            </Input>
                            <Formbtn
                                type="submit"
                                onClick={this.handleSubmitForm}>Search</Formbtn>
                        </form>

                    </Col>
                </Row>
                {/* <Row>
                 {this.state.results.length ? (
                        <List>
                            {this.state.results.map(result => {
                                <ListItem key={result.id}>

                                    <Row>

                                        <Col size="sm-8">
                                            <h1>{result.volumeInfo.title}</h1>
                                            <h2>Written by </h2>

                                            <h3>{result.volumeInfo.title}</h3>
                                        </Col>

                                        <Col size="sm-4">
                                            <Formbtn>View</Formbtn>
                                            <Formbtn>Save</Formbtn>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col size="sm-4">
                                            <img src={this.state.results.volumeInfo.imageLinks.smallThumbnail}></img>
                                        </Col>
                                        <Col size="sm-8">
                                            <p>{this.state.results.volumeInfo.descripton}</p>
                                        </Col>
                                    </Row>
                                </ListItem>

                            })}

                        </List>) : (
                            <ListItem>No Results Found :( Try again!</ListItem>)}
                </Row> */}

            </Container>
        )
    }

    // render() {

    //     return (

    //         <Container fluid>

    //             <Row>
    //                 <Col size="sm-12">
    //                     <h1>Book Search</h1>
    //                     <h3>Search</h3>
    //                     <form>
    //                         <Input
    //                             value={this.state.search}
    //                             type="text"
    //                             placeholder="Book title"
    //                             onChange={this.handleInputChange}
    //                             name="searchBook">
    //                         </Input>
    //                         <Formbtn
    //                             type="submit"
    //                             onClick={this.handleSubmitForm}>Search</Formbtn>
    //                     </form>
    //                 </Col>

    //             </Row>
    //             {/* <Row>
    //                 {this.state.results.length ? (
    //                     <List>
    //                         {this.state.results.map(result => {
    //                             <ListItem key={result.id}>

    //                                 <Row>

    //                                     <Col size="sm-8">
    //                                         <h1>{result.volumeInfo.title}</h1>
    //                                         <h2>Written by </h2>

    //                                         <h3>{result.volumeInfo.title}</h3>
    //                                     </Col>

    //                                     <Col size="sm-4">
    //                                         <Button>View</Button>
    //                                         <Button>Save</Button>
    //                                     </Col>
    //                                 </Row>

    //                                 <Row>
    //                                     <Col size="sm-4">
    //                                         <img src={this.state.results.volumeInfo.imageLinks.smallThumbnail}></img>
    //                                     </Col>
    //                                     <Col size="sm-8">
    //                                         <p>{this.state.results.volumeInfo.descripton}</p>
    //                                     </Col>
    //                                 </Row>
    //                             </ListItem>

    //                         })}

    //                     </List>) : (
    //                         <ListItem>No Results Found :( Try again!</ListItem>)}
    //             </Row> */}


    //         </Container>




    //     );

    // }


}

export default Searchbook;


