import React from 'react';
import state from "../state/state";
const MIN = 'Min';
const MAX= 'Max';
const MIN_MAX = 'Min != Max';

class Display extends React.Component {
    state = state.display;
    constructor() {
        super()
    }
    componentDidMount(){
        this.display = JSON.parse(localStorage.getItem('display'));
        if (localStorage.getItem('display')) {
            this.setState({
                error: this.display.error,
                errorCheckMax: this.display.errorCheckMax,
                errorCheckMin: this.display.errorCheckMin,
                isDisabledButtonSet: this.display.isDisabledButtonSet,
                maxInputValue:this.display.maxInputValue,
                minInputValue:this.display.minInputValue
            })
        } else {
            this.setState({
                error: '',
                errorCheckMax: false,
                errorCheckMin: false,
                isDisabledButtonSet: false,
                maxInputValue:10,
                minInputValue:0
            })
        }
    }


    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('display', JSON.stringify(nextState));
    }

    changeValuesInputs = (e) => {
        let obj = {
            maxVal: e.currentTarget[0].value.trim()===''?this.props.maxVal:e.currentTarget[0].value.trim(),
            minVal: e.currentTarget[1].value.trim()===''?this.props.minVal:e.currentTarget[1].value.trim()
        }

        if (obj.maxVal > this.state.maxInputValue) {
            this.setState({error: MAX+" "+this.state.maxInputValue, errorCheckMax: true})
            this.isDisabledSet(true);
        } else if (obj.maxVal < this.state.minInputValue) {
            this.setState({error: MIN+" "+this.state.minInputValue, errorCheckMax: true})
            this.isDisabledSet(true);
        } else if (obj.minVal < this.state.minInputValue) {
            this.setState({error: MIN+" "+this.state.minInputValue, errorCheckMin: true})
            this.isDisabledSet(true);
        } else if (obj.minVal > this.state.maxInputValue) {
            this.setState({error: MAX+" "+this.state.maxInputValue, errorCheckMin: true})
            this.isDisabledSet(true);
        } else if (obj.minVal === obj.maxVal) {
            this.setState({error: MIN_MAX, errorCheckMax: true,errorCheckMin: true})
            this.isDisabledSet(true);
        } else {
            this.setState({errorCheckMax: false, errorCheckMin: false})
            this.isDisabledSet(false);
            this.props.changeMaxAndMinValue(obj);
        }
    }
    changeIsVisibleSet = () => {
        this.props.setOptions(false)
    }
    isDisabledSet = (val) => {
        this.setState({isDisabledButtonSet: val})
    }


    render() {
        let display = this.props.counter === this.props.maxVal ? 'Max: ' + this.props.maxVal : this.props.counter
        return (
            <div className="Display">
                <div>
                    {this.props.isVisibleOptions ?
                        <div className="FormBlock">
                            <form onChange={this.changeValuesInputs}>
                                <table className="tableInDisplay">
                                    <tr>
                                        <td>
                                            <span
                                                className={this.state.errorCheckMax ? 'errorInInputs' : 'OkInInputs'}>{this.state.errorCheckMax ? this.state.error : 'Max value:'}</span>
                                        </td>
                                        <td>
                                            <input className={this.state.errorCheckMax ? 'errorInput' : ''}
                                                   type="number"
                                                   value={this.props.maxVal}/></td>
                                    </tr>
                                    <tr>
                                        <td><span
                                            className={this.state.errorCheckMin ? 'errorInInputs' : 'OkInInputs'}>{this.state.errorCheckMin ? this.state.error : 'Start value:'}</span>
                                        </td>
                                        <td><input className={this.state.errorCheckMin ? 'errorInput' : ''}
                                                   type="number" value={this.props.minVal}/></td>
                                    </tr>
                                </table>
                            </form>
                            <button className={this.state.isDisabledButtonSet ? 'buttonColor' : ''}
                                    disabled={this.state.isDisabledButtonSet}
                                    onClick={this.changeIsVisibleSet}>{this.state.isDisabledButtonSet ? 'DISABLED' : 'SET'}</button>
                        </div> :
                        <div className={this.props.counter === this.props.maxVal ? 'dispayColor' : ''}>{display}</div>

                    }
                </div>


            </div>
        )
    }
}
export default Display;