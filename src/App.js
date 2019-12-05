import React from 'react';
import './App.css';
import Display from "./components/Display";
import Controls from "./components/Controls";
import state from "./state/state";

class App extends React.Component {
    state = state.app;

    constructor() {
        super()
    }
    componentDidMount(){
        this.app = JSON.parse(localStorage.getItem('main'));
        if (localStorage.getItem('main')) {
            this.setState({
                isVisibleOptions: this.app.isVisibleOptions,
                maxVal: this.app.maxVal,
                minVal: this.app.minVal,
                counter: this.app.counter
            })
        } else {
            this.setState({
                isVisibleOptions: false,
                maxVal: 5,
                minVal: 0,
                counter: 0
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('main', JSON.stringify(nextState));
    }

    changeMaxAndMinValue = (obj) => {
        this.setState({counter: parseInt(obj.minVal)})
        this.setState({maxVal: parseInt(obj.maxVal), minVal: parseInt(obj.minVal)});
    }

    incrementCounter = () => {
        this.setState({counter: ++this.state.counter});
    }
    refreshCounter = () => {
        this.setState({counter: 0, minVal: 0})
    }
    setOptions = (val) => {
        this.setState({isVisibleOptions: val})
    }

    render() {
        return (
            <div className="App">
                <div className="Wrapper">
                    <div className={!this.state.isVisibleOptions ? 'maxVal' : 'maxHide'}>Max
                        value: {this.state.maxVal}</div>
                    <Display counter={this.state.counter}
                             changeMaxAndMinValue={this.changeMaxAndMinValue} maxVal={this.state.maxVal}
                             minVal={this.state.minVal} setOptions={this.setOptions}
                             isVisibleOptions={this.state.isVisibleOptions}/>
                    <Controls counter={this.state.counter} maxVal={this.state.maxVal}
                              minVal={this.state.minVal} isVisibleOptions={this.state.isVisibleOptions}
                              setOptions={this.setOptions}
                              refreshCounter={this.refreshCounter}
                              incrementCounter={this.incrementCounter}/>
                </div>
            </div>
        );
    }

}

export default App;
