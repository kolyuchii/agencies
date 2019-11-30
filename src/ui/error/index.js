import React from 'react';
import PropTypes from 'prop-types';

function ErrorComponent(props) {
    const {
        error,
    } = props;
    return (
        <div className="error">{ error }</div>
    );
}

ErrorComponent.propTypes = {
    error: PropTypes.string,
};

export default ErrorComponent;