import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// components / actions
import MasterViewPage from '../../pages/MasterViewPage/MasterViewPage';
import * as countryActions from '../../actions/index';

const MasterViewContainer = ({ countries, selectedCountry, actions }) => (
    <div>
        { countries.length > 0 ?
            <MasterViewPage
                countries={countries}
                selectedCountry={selectedCountry}
                selectCountry={actions.selectCountry}
            />
            :
            <div>Loading Countries...</div>
        }
    </div>
);

MasterViewContainer.propTypes = {
    countries: PropTypes.arrayOf(PropTypes.object).isRequired,
    selectedCountry: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    countries: state.countriesReducer.countries,
    selectedCountry: state.countriesReducer.selectedCountry
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign({}, countryActions), dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(MasterViewContainer);