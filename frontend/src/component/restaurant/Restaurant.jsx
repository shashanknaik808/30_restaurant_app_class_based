import React, { Component } from 'react';
import './Restaurant.css';

class Restaurant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuData: {
                flag: false,
                foodData: null,
                drinkData: null,
            },
        };
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        let backend_url = 'http://localhost:3200/data';
        try {
            let response = await fetch(backend_url);
            if (response.ok) {
                let responseData = await response.json();
                this.setState({ menuData: responseData });
                console.log(responseData);
            } else {
                console.error('Failed to fetch data');
            }
        } catch (error) {
            console.error('API call error:', error);
        }
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
