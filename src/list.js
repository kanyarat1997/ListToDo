import React from 'react';
import logo from './logo.svg';
import './App.css';

class list extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            numberline: 0,
            numberNoline: 0
        };
        this.onSetState = this.onSetState.bind(this);
        this.onChangeClass = this.onChangeClass.bind(this);
    }

    componentWillMount() {
        this.props.values(this.onSetState)
    }

    onSetState(newState) {
        let tem = this.state.list
        tem.push({ name: newState, class: "" })
        this.setState({ list: tem, numberNoline: this.state.numberNoline + 1 ,numberline: this.state.numberline + 1 })
    }

    onChangeClass(ele) {
        let temps = this.state.list
        if (temps[ele.target.id].class == "") {
            temps[ele.target.id].class = "line"
            this.setState({numberline: this.state.numberline - 1 })
        }
        else {
            temps[ele.target.id].class = ""
            this.setState({numberline: this.state.numberline + 1 })
        }
        this.setState({ list: temps })
    }

    render() {
        let option = []
        for (let index in this.state.list) {
            option.push(
                <a href="#" onClick={this.onChangeClass} className={this.state.list[index].class}>
                    <li id={index} >{this.state.list[index].name}</li>
                </a>
            )
        }
        return (
            <div className="App" >
                <p>{this.state.numberline} มีจำนวน {this.state.numberNoline} task </p>
                {option}
            </div>
        );
    }

}

export default list;
