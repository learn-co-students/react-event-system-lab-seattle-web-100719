// Code EyesOnMe Component Here
// Code Keypad Component Here
import React, { Component } from 'react'

class EyesOnMe extends Component{
    unfocused = () => {
        console.log('Hey! Eyes on me!');
    }

    veryGood = () => {
        console.log('Good!')
    }
    
    render()
    {
        return <button onBlur={this.unfocused} onFocus={this.veryGood}>This is my button</button>
    }
}

export default EyesOnMe