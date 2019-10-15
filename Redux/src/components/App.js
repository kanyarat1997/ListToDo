import React from 'react';
import './css/App.css';
import Action from '../actions';
import { connect } from 'react-redux';
import List from './list'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { values: "" };
    this.onChangeValues = this.onChangeValues.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeValues(ele) {
    this.setState({ values: ele.target.value })
  }

  onSubmit() {
    if (this.state.values != "") {
      this.props.addList(this.state.values)
      this.setState({ values: "" })
    }
  }

  render() {
    return (
      <div className="App" >
        <from>
          <input value={this.state.values} onChange={this.onChangeValues} />
          <button onClick={this.onSubmit}>submit</button>
        </from>
        <List rand={this.state.values}></List>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({ param: state.updateState });
const mapDispatchToProps = (dispatch) => ({
  addList: (value) => dispatch({ type: Action.ADD_LIST, value_list: value })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);