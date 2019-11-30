import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import {
    CONFIG,
    PRICE_RANGE,
    DEFAULT_VAT,
    MINIMUM_MEMBERSHIP_FEE,
} from './config';

ReactDOM.render(<App
    config={CONFIG}
    priceRange={PRICE_RANGE}
    minimumMembershipFee={MINIMUM_MEMBERSHIP_FEE}
    defaultVat={DEFAULT_VAT}
/>, document.getElementById('root'));
