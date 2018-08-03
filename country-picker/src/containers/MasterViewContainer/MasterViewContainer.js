import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// components / actions
import MasterViewPage from '../../pages/MasterViewPage/MasterViewPage';
import * as countryActions from '../../actions/index';
import { filterCountries } from '../../utils/helperFunctions';

class MasterViewContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentWillMount() {
        //this.props.actions.requestAllCountries();
    }
    render() {

        console.log('MasterViewContainer this.props', this.props);

        return (
            <div>
                { this.props.countries.length > 0 ?
                    <MasterViewPage
                        countries={filterCountries(this.props.countries, this.props.searchFieldInput)}
                        selectCountry={this.props.actions.selectCountry}
                        selectedCountry = {this.props.selectedCountry}
                        searchFieldInput={this.props.searchFieldInput}
                        changeSearchFieldInput={this.props.actions.changeSearchFieldInput}
                        activeCountryLI={this.props.activeCountryLI}
                        setActiveCountryListItem={this.props.actions.setActiveCountryListItem}
                    />
                    :
                    <div>Loading Countries...</div>
                }
            </div>
        );
    }
}

MasterViewContainer.propTypes = {
    countries: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        region: PropTypes.string.isRequired
    })).isRequired,
    actions: PropTypes.object.isRequired,
    searchFieldInput: PropTypes.string.isRequired,
    activeCountryLI: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    countries: state.countriesReducer.countries,
    searchFieldInput: state.countriesReducer.searchFieldInput,
    activeCountryLI: state.countriesReducer.activeCountryLI,
    selectedCountry: state.countriesReducer.selectedCountry
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign({}, countryActions), dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(MasterViewContainer);