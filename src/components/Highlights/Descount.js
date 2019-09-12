import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import Button from '../utils/Button';

class Descount extends Component {

    state = {
        discountStarts: 0,
        discountEnds: 30,
    }

    porcentage = () => {
        if(this.state.discountStarts < this.state.discountEnds){
            this.setState({
                discountStarts: this.state.discountStarts + 1
            });
        }
    }

    componentDidUpdate(){
        setTimeout(() => {
            this.porcentage()
        },30)
    }

    render() {
        return (
            <div className='center_wrapper'>
                <div className='discount_wrapper'>

                    <Fade onReveal={() => {this.porcentage()}}>
                        <div className='discount_porcentage'>
                            <span>{this.state.discountStarts}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>

                    <Slide right>
                        <div className='discount_description'>
                            <h3>Purchase ticket before ending date.</h3>
                            <p>Id dolorem vocibus vis, iudicabit interesset nam ei. Ad graeco euismod placerat qui, per cu ponderum mediocritatem necessitatibus. An nam quas scripta, eu pro vidit epicuri, te illum imperdiet adolescens pro.</p>
                            <Button 
                            text="Purchase Ticket"
                            bck="#f1c40f"
                            color="#ffffff"
                            link="https://google.com" />
                        </div>
                    </Slide>
                    

                </div>
            </div>
        );
    }
}

export default Descount;