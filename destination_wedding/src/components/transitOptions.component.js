import React, { Component } from 'react';
import TransitCard from './utilities/TransitCard.component';
import { FaArrowCircleRight } from 'react-icons/fa';
import axios from 'axios';

export default class TransitOptions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            transitOptions: [],
        }
    }

    async componentDidMount() {
        if (this.state.transitOptions.length === 0) {
            const response = await axios.get('http://localhost:5000/transitOptions/');
            const transitOptions = response.data;
            console.log(transitOptions);

            this.setState({
                transitOptions: transitOptions,
            });

            console.log(this.state);
        }
    }    

    render() {
        return(
            <div className="row bg-light" style={{paddingTop: 160, paddingBottom: 160}}>
                <div className="col-md-8">
                    <div className="row">
                        {/* Allow for n hotels pulled from DB, scroll beyond screem */}
                        {
                            this.state.transitOptions.map((transitOption, index) => {
                                console.log(transitOption);
                                return (
                                    <div key={index} className={index > 2 ? "col-4 covered" : "col-4"}>
                                        <TransitCard 
                                        image={transitOption.image} 
                                        title={transitOption.name} 
                                        from={transitOption.from} 
                                        to={transitOption.to} 
                                        link={transitOption.url} 
                                        price={transitOption.price_range}
                                        type={transitOption.type}
                                        times={transitOption.times}
                                        />
                                    </div>
                                )
                            })
                        }
                        <FaArrowCircleRight className="floating-scroll right" />
                    </div>
                </div>
                <div className="col d-flex justify-content-center flex-column">
                    <h2>Transportation Options</h2>
                    <p>
                        Whether you're seeking the freedom of an Airbnb, a secluded cabin, or a quiet transitOption, we have plenty of options to stay nearby.
                    </p>
                </div>
                <div className="col-12 bg-light">
                    <div className="col text-center mt-4 text-primary">
                        <span>View All Transit Options</span>
                    </div>
                </div>
            </div>
        );
    }
}