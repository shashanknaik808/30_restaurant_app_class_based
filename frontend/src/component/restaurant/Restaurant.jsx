import React, { Component } from 'react';
import './Restaurant.css';
import { Card, Button } from 'react-bootstrap';

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
            <div className='pri1'>
                <h1> Food Menu</h1>

                {flag ? (
                    <ul>
                        <div className='food-container'>
                            {foodData.map((item) => (
                                <Card className='food-item' style={{ width: '18rem' }} key={item.foodName}>
                                    <Card.Img variant="top" src={'images/food/' + item.foodName + '.jpg'} />
                                    <Card.Body className={(item.category === 'veg') ? 'veg' : 'non-veg'}>
                                        <Card.Title>{item.foodName} : {item.price}</Card.Title>
                                        <Card.Text>
                                            {item.foodName} is an amazing dish. You should try it.
                                        </Card.Text>
                                        <div>
                                            Category: <img
                                                src={(item.category === 'veg') ? 'images/veg.png' : 'images/non-veg.png'}
                                                height="30px" width="30px"
                                                alt={(item.category === 'veg') ? 'Veg' : 'Non-Veg'}
                                            />
                                        </div>
                                        <Button variant="primary">Buy Now</Button>
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>
                    </ul>
                ) : (
                    <h1>Loading</h1>
                )
                }

                <h1> Drink Menu</h1>

                {
                    flag ? (
                        <ul>
                            {drinkData.map((item) => (
                                <Card className='drink-item' style={{ width: '18rem' }} key={item.drinkName}>
                                    <Card.Img variant='top' src={'images/drink/' + item.drinkName + '.jpg'} />
                                    <Card.Body className={item.category === 'mocktail' ? 'mocktail' : 'cocktail'}>
                                        <Card.Title>{item.drinkName} : {item.price}</Card.Title>
                                        <Card.Text>
                                            {item.drinkName} is an amazing Drink. You should try it.
                                        </Card.Text>
                                        <Card.Text>
                                            Category: {item.category}
                                        </Card.Text>
                                        <Button variant='primary'>Buy Now</Button>
                                    </Card.Body>
                                </Card>
                            ))}
                        </ul>
                    ) : (
                        <h1>Loading</h1>
                    )
                }

            </div >
        );
    }
}

export default Restaurant;
