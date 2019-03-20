import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
    state = {
        displayValue: '0',
        operatorPresent: false,
        operator: null,
        value: '0',
        prevVal: null
    }

    inputDigit(digit) {
        const { displayValue } = this.state;
        this.setState({
            displayValue: displayValue === '0' ? String(digit) : displayValue + String(digit)
        })
    }

    clear() {
        const { displayValue } = this.state;
        const { prevVal } = this.state;
        if (displayValue !== '0' || prevVal !== '0') {
            this.setState({
                displayValue: '0',
                value: '0',
                operator: null,
                operatorPresent: false,
                prevVal: null
            })
        }
    }

    plusMinus() {
        const { displayValue } = this.state;
        if (displayValue !== '0') {
            this.setState({
                displayValue: displayValue.charAt(0) !== '-' ? '-' + displayValue : displayValue.substr(1)
            })
        }
    }

    decimal(decimal) {
        const { displayValue } = this.state;
        if (!displayValue.includes('.')) {
            this.setState({
                displayValue: displayValue + String(decimal)
            })
        }
    }

    percent() {
        const { displayValue } = this.state;
        if (displayValue !== '0') {
            this.setState({
                displayValue: displayValue / 100
            })
        }
    }

    operator(operand) {
        const { displayValue } = this.state;
        const { value } = this.state;
        const { operator } = this.state;
        const { operatorPresent } = this.state;
        const { prevVal } = this.state;

        if (operand !== '=') {
            this.setState({
                operatorPresent: true,
                displayValue: '0',
                operator: operand,
                prevVal: displayValue + (operand)

            })
        }
        else {
            this.setState({
                displayValue: eval(prevVal)
            })
        }
        if (prevVal !== null) {
            this.setState({
                prevVal: prevVal + displayValue + operand
            })
        }


    }

    render() {
        const { displayValue } = this.state;
        console.log("displayValue", displayValue)
        console.log("operand", this.state.operand)
        console.log("operator", this.state.operator)
        console.log("operatorPresent", this.state.operatorPresent)
        console.log("Value", this.state.value)
        console.log("prev val", this.state.prevVal)
        return (
            <div className="calc">
                <div className="wrapper">
                    <div className="calc-display">{displayValue}</div>
                    <div className="calc-keypad">
                        <div className="input-keys">
                            <div className="input-left">
                                <div className="function-keys">
                                    <button className="calc-key key-clear" onClick={() => { this.clear() }}>AC</button>
                                    <button className="calc-key key-sign" onClick={() => { this.plusMinus() }}>±</button>
                                    <button className="calc-key key-percent" onClick={() => { this.percent() }}>%</button>
                                </div>
                                <div className="digit-keys">
                                    <button className="calc-key key-0" onClick={() => { this.inputDigit(0) }}>0</button>
                                    <button className="calc-key key-dot" onClick={() => { this.decimal('.') }}>.</button>
                                    <button className="calc-key key-1" onClick={() => { this.inputDigit(1) }}>1</button>
                                    <button className="calc-key key-2" onClick={() => { this.inputDigit(2) }}>2</button>
                                    <button className="calc-key key-3" onClick={() => { this.inputDigit(3) }}>3</button>
                                    <button className="calc-key key-4" onClick={() => { this.inputDigit(4) }}>4</button>
                                    <button className="calc-key key-5" onClick={() => { this.inputDigit(5) }}>5</button>
                                    <button className="calc-key key-6" onClick={() => { this.inputDigit(6) }}>6</button>
                                    <button className="calc-key key-7" onClick={() => { this.inputDigit(7) }}>7</button>
                                    <button className="calc-key key-8" onClick={() => { this.inputDigit(8) }}>8</button>
                                    <button className="calc-key key-9" onClick={() => { this.inputDigit(9) }}>9</button>
                                </div>
                            </div>
                            <div className="input-right">
                                <div className="operator-keys">
                                    <button className="calc-key key-divide" onClick={() => { this.operator('/') }}>÷</button>
                                    <button className="calc-key key-multiply" onClick={() => { this.operator('*') }}>x</button>
                                    <button className="calc-key key-minus" onClick={() => { this.operator('-') }}>-</button>
                                    <button className="calc-key key-plus" onClick={() => { this.operator('+') }}>+</button>
                                    <button className="calc-key key-equal" onClick={() => { this.operator('=') }}>=</button>
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