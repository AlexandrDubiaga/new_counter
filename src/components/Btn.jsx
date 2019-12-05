import React from 'react';
import '../App.css';

class Btn extends React.Component {
    render() {
        return (
            <div className='Button'>
                <button disabled={this.props.button.isDisabled}
                        className={this.props.button.isDisabled ? 'buttonColor' : ''}
                        onClick={this.props.button.onFunc}>{this.props.button.isDisabled?this.props.button.disabled:this.props.button.title}</button>
            </div>

        );
    }

}

export default Btn;
