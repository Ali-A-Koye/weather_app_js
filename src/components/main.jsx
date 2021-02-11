import React  from 'react';
import Header from './Header';
import './main.css'

function Main(props) {

    console.log(props.HeaderPart);

    let background= 'background-day'
    if(props.HeaderPart.current.is_day === 'no'){
        background ='background-night'
    }

    return (
        <div class={background}>
            <Header data={props.HeaderPart}/>
        </div>
    );
}

export default Main;