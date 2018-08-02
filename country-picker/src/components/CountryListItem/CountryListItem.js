import React from 'react';
import PropTypes from 'prop-types';

const CountryListItem = ({ title, subTitle, active, handleOnClick }) => (
    <a className={`list-group-item ${(active && 'active-list-item')}`} onClick={handleOnClick}>
        <h4 className="list-group-item-heading">{title}</h4>
        <p className="list-group-item-text">{subTitle}</p>
    </a>
);

CountryListItem.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    handleOnClick: PropTypes.func.isRequired
};

export default CountryListItem;