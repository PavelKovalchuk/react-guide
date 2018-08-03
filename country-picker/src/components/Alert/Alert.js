import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({type, message}) => {

    let alertClassName = "alert alert-" + type;
    return (
        <div className={alertClassName} role="alert">{message}</div>
    );

};

Alert.propTypes = {
    type: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
};

export default Alert;