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

    async componentDidMount() {
        await this.getData();
    }

    async getData() {
        let backend_url = 'http://localhost:3200/data';

        try {
            let response = await fetch(backend_url);

            if (response.ok) {
                let responseData = await response.json();
                this.setState({
                    menuData: {
                        flag: true,
                        foodData: responseData[0],
                        drinkData: responseData[1],
                    },
                });
                console.log(responseData);
            } else {
                console.error('Failed to fetch data');
            }
        } catch (error) {
            console.error('API call error:', error);
        }
    }

    render() {

        const { flag, foodData, drinkData } = this.state.menuData;
        
        return (
            <div className='pri'>
                {flag ? (
                    <div>
                        <h1>{foodData[0].foodName}</h1>
                        <h1>{drinkData[0].drinkName}</h1>
                    </div>
                ) : (
                    <h1>Loading</h1>
                )}
            </div>
        );
    }
}

export default Restaurant;
