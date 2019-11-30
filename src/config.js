export const DEFAULT_VAT = .2;
export const MINIMUM_MEMBERSHIP_FEE = 120;

// min and max prise range for each period
export const PRICE_RANGE = {
    week: {
        min: 25,
        max: 2000,
    },
    month: {
        min: 110,
        max: 8660,
    }
};

// main unit config
export const CONFIG = [
    {"name": "client", "config": {"has_fixed_membership_fee": false, "fixed_membership_fee_amount": 0}},
    {"name": "division_a", "config": {"has_fixed_membership_fee": false, "fixed_membership_fee_amount": 0}},
    {"name": "division_b", "config": {"has_fixed_membership_fee": true, "fixed_membership_fee_amount": 35000}},
    {"name": "area_a", "config": {"has_fixed_membership_fee": true, "fixed_membership_fee_amount": 45000}},
    {"name": "area_b", "config": {"has_fixed_membership_fee": false, "fixed_membership_fee_amount": 0}},
    {"name": "area_c", "config": {"has_fixed_membership_fee": true, "fixed_membership_fee_amount": 45000}},
    {"name": "area_d", "config": {"has_fixed_membership_fee": false, "fixed_membership_fee_amount": 0}},
    {"name": "branch_a", "config": null},
    {"name": "branch_b", "config": {"has_fixed_membership_fee": false, "fixed_membership_fee_amount": 0}},
    {"name": "branch_c", "config": {"has_fixed_membership_fee": false, "fixed_membership_fee_amount": 0}},
    {"name": "branch_d", "config": null},
    {"name": "branch_e", "config": {"has_fixed_membership_fee": false, "fixed_membership_fee_amount": 0}},
    {"name": "branch_f", "config": {"has_fixed_membership_fee": false, "fixed_membership_fee_amount": 0}},
    {"name": "branch_g", "config": {"has_fixed_membership_fee": false, "fixed_membership_fee_amount": 0}},
    {"name": "branch_h", "config": {"has_fixed_membership_fee": false, "fixed_membership_fee_amount": 0}},
    {"name": "branch_i", "config": {"has_fixed_membership_fee": false, "fixed_membership_fee_amount": 0}},
    {"name": "branch_j", "config": {"has_fixed_membership_fee": false, "fixed_membership_fee_amount": 0}},
    {"name": "branch_k", "config": {"has_fixed_membership_fee": true, "fixed_membership_fee_amount": 25000}},
    {"name": "branch_l", "config": {"has_fixed_membership_fee": false, "fixed_membership_fee_amount": 0}},
    {"name": "branch_m", "config": null},
    {"name": "branch_n", "config": {"has_fixed_membership_fee": false, "fixed_membership_fee_amount": 0}},
    {"name": "branch_o", "config": {"has_fixed_membership_fee": false, "fixed_membership_fee_amount": 0}},
    {"name": "branch_p", "config": {"has_fixed_membership_fee": false, "fixed_membership_fee_amount": 0}}
];

// unit structure
export const MODEL = {
    client: ['division_a', 'division_b'],
    division_a: ['area_a', 'area_b'],
    division_b: ['area_c', 'area_d'],
    area_a: ['branch_a', 'branch_b', 'branch_c', 'branch_d'],
    area_b: ['branch_e', 'branch_f', 'branch_g', 'branch_h'],
    area_c: ['branch_i', 'branch_j', 'branch_k', 'branch_l'],
    area_d: ['branch_m', 'branch_n', 'branch_o', 'branch_p'],
};
