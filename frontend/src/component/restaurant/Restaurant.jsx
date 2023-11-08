import React, { Component } from 'react';
import './Restaurant.css';

class Restaurant extends Component {

    componentDidMount() {
        this.getData();
    }

    async getData() {
        let backend_url = 'http://localhost:3200/data';
        let response = await fetch(backend_url);

        let responseData = await response.json();
        console.log(responseData);
    }

    render() {
        return (
            <div>
                <h1>Restaurant Component</h1>
            </div>
        );
    }
}

export default Restaurant;
