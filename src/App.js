import React from 'react';
import AppComponent from './ui/app';
import {
  findParentUnit,
  CONFIG,
  PRICE_RANGE,
  DEFAULT_VAT,
  MINIMUM_MEMBERSHIP_FEE
} from './organisationUnits';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      unit: null,
      price: 0,
      period: 'week',
      fee: 0,
      error: null,
    }
  }

  render() {
    return (
        <AppComponent
            onPriceChanged={this.onPriceChanged.bind(this)}
            onPeriodChanged={this.onPeriodChanged.bind(this)}
            unitChanged={this.unitChanged.bind(this)}
            units={CONFIG.map((item, index) => <option key={index} value={item.name}/>)}
            calculate={this.calculate.bind(this)}
            error={this.state.error}
            fee={this.state.fee}
        />
    );
  }
  calculate() {
    // validate the price
    if (!this.validate()) {
      this.setState({
        fee: 0,
      });
      return false;
    }

    let price = findParentUnit(this.state.unit) / 100; // to pounds
    if (price === 0) {
      price = this.getPricePerWeek();
    }
    const fee = Math.max(price, MINIMUM_MEMBERSHIP_FEE);
    this.setState({
      fee: fee + fee * DEFAULT_VAT,
      error: null
    });
  }
  onPriceChanged(event) {
    this.setState({
      price: Number(event.target.value),
      error: null
    });
  }
  onPeriodChanged(event) {
    this.setState({
      period: event.target.value,
      error: null
    });
  }
  unitChanged(event) {
    this.setState({
      unit: event.target.value,
      error: null
    });
  }
  getPricePerWeek() {
    return this.state.period === 'month' ? this.state.price / 4.4 : this.state.price;
  }

  validate() {
    const priceRange = PRICE_RANGE[this.state.period];
    if (/\D/g.test(this.state.price)) {
      this.setState({
        error: `The rent amount must be a number`
      });
      return false;
    }
    if (this.state.price > priceRange.max) {
      this.setState({
        error: `The rent amount is too high! Minimum value is £${priceRange.max} per ${this.state.period}`
      });
      return false;
    }
    if (this.state.price < priceRange.min) {
      this.setState({
        error: `The rent amount is too low! Minimum value is £${priceRange.min} per ${this.state.period}`
      });
      return false;
    }
    if (!this.state.unit) {
      this.setState({
        error: 'Please specify the organisation unit'
      });
      return false;
    }
    return true;
  }
}

export default App;
