// Code Keypad Component Here
import React, {Component} from 'react'

export default class Keypad extends Component {
    response() {
        console.log('Entering password...')
    }

    render() {
        return (
            <input onKeyUp={this.response} type="password" />
        )
    }
}