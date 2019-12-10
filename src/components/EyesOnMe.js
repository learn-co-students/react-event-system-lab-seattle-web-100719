// Code EyesOnMe Component Here
import React, {Component} from 'react'

export default class EyesOnMe extends Component {
    focusOnMe() {
        console.log('Good!')
    }

    blurOnMe() {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
            <button onFocus={this.focusOnMe} onBlur={this.blurOnMe}>Look At Me</button>
        )
    }
}