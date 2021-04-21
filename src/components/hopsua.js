import React, { Component } from 'react';
 
class hopsua extends Component {
    componentWillReceiveProps(nextProps, nextState) {
        console.log(`componentWillReceiveProps của hopsua.js` + nextProps.ten);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log(`shouldComponentUpdate của hopsua.js`);
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log(`componentWillUpdate của hopsua.js`);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(`componentDidUpdate của hopsua.js`);
    }
    render() { 
        console.log(this.props.ten);
        return (
            <div>
                <h4>{this.props.ten}</h4>
            </div>
        );
    }
}
 
export default hopsua;