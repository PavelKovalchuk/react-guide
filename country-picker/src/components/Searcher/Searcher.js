import React from 'react';
import PropTypes from 'prop-types';

const Searcher = ({searchCountryHandler}) => {
    return (
        <form className="form-horizontal">
            <div className="form-group">
                <div className="col-sm-12">
                    <input
                        type="text"
                        className="form-control Searcher-input"
                        placeholder="Start searching for countries"
                        onChange={searchCountryHandler}
                    />
                </div>
            </div>
        </form>
    );
};

Searcher.propTypes = {
    searchCountryHandler: PropTypes.func.isRequired
};

export default Searcher;