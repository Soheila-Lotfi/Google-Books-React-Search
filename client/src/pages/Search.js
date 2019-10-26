import React, { Component } from "react";
import API from "../utils/API";

class Search extends Component {

    state = {
        search: "",


    };

    handleInputChange = (event) => {
        const title = event.target.value
        this.setState({ search: title })

    };

    handleSubmitForm = () => {

        API.getBooks(search).then(res => result = res).catch(error => console.log(error));

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
                            onClick={this.handleSubmitForm}></Button>
                    </form>
                </Row>
                <Row>
                    <List>

                    </List>
                </Row>


            </Container>




        )

    }


}


