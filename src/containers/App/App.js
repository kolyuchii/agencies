import React from 'react';
import AppComponent from '../../ui/app';
import ErrorComponent from '../../ui/error';
import UnitComponent from '../../ui/unit';
import {
  findParentUnit,
} from '../../utils/get-organisation-units-fee';
import validate from '../../utils/validate';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);

    // Set default state
    this.state = {
      unit: null,
      price: 0,
      period: 'week',
      fee: 0,
      errors: null,
    }
  }

  render() {
    return (
        <AppComponent
            onPriceChanged={this.onPriceChanged.bind(this)}
            onPeriodChanged={this.onPeriodChanged.bind(this)}
            unitChanged={this.unitChanged.bind(this)}
            units={this.getUnits()}
            calculate={this.calculate.bind(this)}
            errors={this.getErrors()}
            fee={this.state.fee}
        />
    );
  }
  getUnits() {
    if (this.props.config) {
      return this.props.config
          .map((item, index) => <UnitComponent key={index} name={item.name}/>);
    }
    return null;
  }
  getErrors() {
    if (this.state.errors && this.state.errors.length) {
      return this.state.errors
          .map(error => <ErrorComponent error={error} />);
    }
    return null;
  }

  calculate() {
    // validate the price
    const errorsArr = validate(this.state.price, this.state.unit, this.state.period);
    if (errorsArr.length > 0) {
      this.setState({
        fee: 0,
        errors: errorsArr
      });
      return false;
    }

    let price = findParentUnit(this.state.unit) / 100; // to pounds
    if (price === 0) {
      price = this.getPricePerWeek();
    }
    const fee = Math.max(price, this.props.minimumMembershipFee);
    this.setState({
      fee: fee + fee * this.props.defaultVat,
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
}

App.propTypes = {
  config: PropTypes.array,
  priceRange: PropTypes.object,
  minimumMembershipFee: PropTypes.number,
  defaultVat: PropTypes.number,
};

export default App;
