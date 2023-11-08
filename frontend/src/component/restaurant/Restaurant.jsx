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
                <h1> Food Menu</h1>

                {flag ? (
                    <ul>
                        {foodData.map((item) => (
                            <li key={item.foodName}>
                                Food Name is {item.foodName}, Price: {item.price}, Category: {item.category}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <h1>Loading</h1>
                )}

                <h1> Drink Menu</h1>

                {flag ? (
                    <ul>
                        {drinkData.map((item) => (
                            <li key={item.drinkName}>
                                Drink Name is {item.drinkName}, Price: {item.price}, Category: {item.category}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <h1>Loading</h1>
                )}
            </div>
        );
    }
}

export default Restaurant;
