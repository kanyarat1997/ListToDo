import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './list'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      values: "",
      list: "",
      Obj: ""
    };
    this.onChangeValues = this.onChangeValues.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeOUT = this.onChangeOUT.bind(this);
  }

  onChangeValues(ele) {
    this.setState({ values: ele.target.value })
  }


  onSubmit() {
    if (this.state.values != "") {
      this.setState({ list: this.state.values, values: "" })
      this.state.Obj(this.state.values)
    }
  }

  onChangeOUT(onSetState) {
    this.setState({ Obj: onSetState });
  }

  render() {
    return (
      <div className="App" >
        <from>
          <input value={this.state.values} onChange={this.onChangeValues} />
          <button onClick={this.onSubmit} >submit</button>
        </from>
        <List values={this.onChangeOUT} ></List>
      </div>
    );
  }

}

export default App;
