import React from 'react';

class EyesOnMe extends React.Component {

    handleFocus = () => console.log('Good!')

    handleBlurr = () => console.log('Hey! Eyes on me!')

    render (){
        return (
            <button
            onFocus={this.handleFocus}
            onBlur={this.handleBlurr}>
            </button>
        )
    }
}

export default EyesOnMe
