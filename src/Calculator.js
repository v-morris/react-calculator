import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
    state = {
        displayValue: 0
    }

    render() {
        const {displayValue} = this.state

        return (
            <div className="calc">
                <div className="wrapper">
                    <div className="calc-display">{displayValue}</div>
                    <div className="calc-keypad">
                        <div className="input-keys">
                            <div className="input-left">
                                <div className="function-keys">
                                    <button className="calc-key key-clear">AC</button>
                                    <button className="calc-key key-sign">±</button>
                                    <button className="calc-key key-percent">%</button>
                                </div>
                                <div className="digit-keys">
                                    <button className="calc-key key-0">0</button>
                                    <button className="calc-key key-dot">.</button>
                                    <button className="calc-key key-1">1</button>
                                    <button className="calc-key key-2">2</button>
                                    <button className="calc-key key-3">3</button>
                                    <button className="calc-key key-4">4</button>
                                    <button className="calc-key key-5">5</button>
                                    <button className="calc-key key-6">6</button>
                                    <button className="calc-key key-7">7</button>
                                    <button className="calc-key key-8">8</button>
                                    <button className="calc-key key-9">9</button>
                                </div>
                            </div>
                            <div className="input-right">
                                <div className="operator-keys">
                                    <button className="calc-key key-divide">÷</button>
                                    <button className="calc-key key-multiply">x</button>
                                    <button className="calc-key key-minus">-</button>
                                    <button className="calc-key key-plus">+</button>
                                    <button className="calc-key key-equal">=</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Calculator;