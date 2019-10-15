import React from 'react';
import './css/list.css';
import Action from '../actions';
import { connect } from 'react-redux';

class list extends React.Component {

    constructor(props) {
        super(props);
        this.state = { rend: "" };
        this.onChangeClass = this.onChangeClass.bind(this);
    }

    onChangeClass(ele) {
        this.props.changeClass(ele.target.id)
        this.setState({ values: this.state.values, rend: this.state.values })
    }

    componentDidMount() {
        this.setState({ rend: this.props.rand })
    }

    render() {
        let option = []
        for (let index = 0; index < this.props.param.list.length; index++) {
            option.push(
                <a href="#" onClick={this.onChangeClass} className={this.props.param.list[index].class}>
                    <li id={index} >{this.props.param.list[index].name}</li>
                </a>
            )
        }
        console.log(this.props.param.list)
        return (
            <div>
                <p id={this.state.rend}>{this.props.param.number_todo} มีจำนวน {this.props.param.number_all} task </p>
                {option}
            </div>
        );
    }

}

// export default list;
const mapStateToProps = (state) => ({ param: state.updateState });
const mapDispatchToProps = (dispatch) => ({
    changeClass: (index) => dispatch({ type: Action.CHANGE_CLASS, index: index })
});

export default connect(mapStateToProps, mapDispatchToProps)(list);