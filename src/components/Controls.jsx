import React from 'react';
import '../App.css';
import Btn from "./Btn";

class Controls extends React.Component {


    render() {
        let buttons = [
            {title: 'INC', onFunc: this.props.incrementCounter,isDisabled:this.props.counter===this.props.maxVal,disabled:'DISABLED'},
            {title: 'REFRESH', onFunc: this.props.refreshCounter,isDisabled:this.props.counter===this.props.minVal?true:false,disabled:'DISABLED'},
            {title: 'SET', onFunc: ()=>this.props.setOptions(true)}
        ]
        return (
            <div className='Controls'>
                {!this.props.isVisibleOptions ?
                    <div className="WrapperButtons">
                        <Btn button={buttons[0]}/>
                        <Btn button={buttons[1]}/>
                        <div> <Btn button = {buttons[2]}/></div>
                    </div>:''

                }
            </div>

        );
    }

}

export default Controls;
