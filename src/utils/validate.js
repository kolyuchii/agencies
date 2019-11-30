import {
    PRICE_RANGE,
} from '../config';

export default function(price, unit, period) {
    const priceRange = PRICE_RANGE[period];
    const result = [];
    if (/\D/g.test(price)) {
        result.push('The rent amount must be a number');
    }
    if (price > priceRange.max) {
        result.push(`The rent amount is too high! Minimum value is £${priceRange.max} per ${period}`);
    }
    if (price < priceRange.min) {
        result.push(`The rent amount is too low! Minimum value is £${priceRange.min} per ${period}`);
    }
    if (!unit) {
        result.push('Please specify the organisation unit');
    }
    return result;
}