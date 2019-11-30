import React from 'react';
import PropTypes from 'prop-types';

function UnitComponent(props) {
    const {
        index,
        name
    } = props;
    return (
        <option key={index} value={name} />
    );
}

UnitComponent.propTypes = {
    index: PropTypes.number,
    name: PropTypes.string,
};

export default UnitComponent;