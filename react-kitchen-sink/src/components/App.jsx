import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';


// const App = (props) => {
//     console.log(props.hell);
//     console.log(props.a);
//     return (
//         <div>
//             <h1>{props.hell}</h1>
//             <h1>{props.a}</h1>
//         </div>

//     );
// }


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: 'Fun Times',
            placeholder: 'input text',
            hasLoaded: false,
        };
    }

    handleEvent(event) {
        
        let newText = {
            text: event,
        };

        console.log(this.state.text);

        this.setState(newText)
    }

    handleClick() {
        console.log(this.state.hasLoaded);
       
        if(this.state.hasLoaded === false) {
            this.setState({ hasLoaded: true });
        } else {
            this.setState({ hasLoaded: false});
        }
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(res => res.json())
        .then(obj => console.log(obj));
    }

    render() {
        if(this.state.hasLoaded === true) {
            return (
                <React.Fragment>
                    <h1>{this.props.hell}</h1>
                    <h1>{this.state.text}</h1>
                    <input 
                    placeholder={this.state.placeholder}
                    onChange={(event) => this.handleEvent(event.target.value)}
                    />
                    <br></br>
                    <button
                    onClick={(event) => this.handleClick()}
                    >Button</button>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <h1>Loading...</h1>
                    <button
                    onClick={(event) => this.handleClick()}
                    >Button</button>
                </React.Fragment>
            );
        }
      
    }
}

export default App;