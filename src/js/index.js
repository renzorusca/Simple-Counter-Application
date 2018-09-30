//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';

//include bootstrap npm library into the bundle
import 'bootstrap';

import './icon.js';

//include your index.scss file into the bundle
import '../styles/index.scss';

//import your own components

function SimpleCounter (props) {
    return (
        <div className="counter">
            <div className="calendar">
                <i className="far fa-clock"></i>
            </div>
            <div>{props.dig6 % 10}</div>
            <div>{props.dig5 % 10}</div>
            <div>{props.dig4 % 10}</div>
            <div>{props.dig3 % 10}</div>
            <div>{props.dig2 % 10}</div>
            <div>{props.dig1 % 10}</div>npm
            
            
        </div>
        );
}


SimpleCounter.propTypes = {
    dig6: PropTypes.number,
    dig5: PropTypes.number,
    dig4: PropTypes.number,
    dig3: PropTypes.number,
    dig2: PropTypes.number,
    dig1: PropTypes.number
};

let i = 0;

setInterval(function(){
    
    const six = Math.floor (i/100000);
    const five = Math.floor (i/10000);
    const four = Math.floor (i/1000);
    const three = Math.floor (i/100);
    const two = Math.floor (i/10);
    const one = Math.floor (i/1);
    
ReactDOM.render(
    <SimpleCounter dig1={one} dig2={two} dig3={three} dig4={four} dig5={five} dig6={six} />, 
    document.querySelector('#app')
);
i++;
}, 1000);




