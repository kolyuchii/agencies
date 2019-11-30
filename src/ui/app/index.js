import './App.scss';
import React from 'react';
import PropTypes from 'prop-types';

function AppComponent(props) {
    const {
        onPriceChanged,
        onPeriodChanged,
        unitChanged,
        units,
        calculate,
        errors,
        fee,
    } = props;
    return (
        <div className="app">
            <h1 className="title">Fee calculator</h1>
            <div className="block">
                <span className="label">Rent amount:</span>
                <input className="input"  type="text" onChange={onPriceChanged} />
            </div>
            <div className="block">
                <span className="label">Period:</span>
                <select className="input select" onChange={onPeriodChanged}>
                    <option value="week">Week</option>
                    <option value="month">Month</option>
                </select>
            </div>
            <div className="block">
                <span className="label">Organisation unit:</span>
                <input className="input" list="units" name="units" onChange={unitChanged}/>
                <datalist id="units">
                    {units}
                </datalist>
            </div>

            <button className="button" onClick={calculate}>Calculate Fee</button>

            { errors }

            { fee ? (<h1 className="fee">Membership fee: £{ fee }</h1>) : null }
        </div>
    );
}

AppComponent.propTypes = {
    onPriceChanged: PropTypes.func,
    onPeriodChanged: PropTypes.func,
    unitChanged: PropTypes.func,
    units: PropTypes.array,
    calculate: PropTypes.func,
    errors: PropTypes.array,
    fee: PropTypes.number,
};

export default AppComponent;