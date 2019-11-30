import {
    MODEL,
    CONFIG
} from "../config";

/**
 * Returns proper fixed_membership_fee_amount or 0
 * @param {string} organisationUnit
 * @returns {number}
 */
export function findParentUnit(organisationUnit) {
    if (!organisationUnit) {
        return 0;
    }
    const unit = CONFIG.find(item => item.name === organisationUnit);
    if (unit && unit.config) {
        if (organisationUnit === 'client' || unit.config.has_fixed_membership_fee) {
            return unit.config.fixed_membership_fee_amount;
        }
    } else {
        return 0;
    }
    for (const key in MODEL) {
        const parentUnit = MODEL[key].indexOf(organisationUnit);
        if (parentUnit > -1) {
            return findParentUnit(key);
        }
    }
}
