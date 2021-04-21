import React, { Component } from 'react';
import HOPSUA from './components/hopsua';
 
class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        trangthai: 1,
        trangthai2: "Tuanalex"
      }
  }
  
  componentWillMount() {
    console.log(`componentwillmount đang chạy`);
  }
  componentDidMount() {
    console.log(`componentDidMount đang chạy`);
  }
  shouldComponentUpdate(nextProps, nextState) {
      console.log(`shouldComponentUpdate đang chạy`);
      return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log(`componentWillUpdate đang chạy`);
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`componentDidUpdate đang chạy`);
  }
  setTrangThai = () => {
    this.setState({
      trangthai: 0,
      trangthai2: "KAKA"
    });
  }
  render() { 
    console.log(`render đang chạy`);
    console.log(this.state.trangthai);
    return (
      <div>
          <HOPSUA ten={this.state.trangthai2}/>
          <button onClick={()=>this.setTrangThai()}>Click</button>
      </div>
    );
  }
}
 
export default App;