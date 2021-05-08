import React from 'react'

class Form extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.weatherMethod}>
                <input type='text' name='city' placeholder='town' />
                <button>получить погоду</button>
            </form>
        );
    }
}

export default Form;