import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// components / actions
import MasterViewPage from '../../pages/MasterViewPage/MasterViewPage';
import * as countryActions from '../../actions/index';
import { filterCountries, objectIsEmpty } from '../../utils/helperFunctions';
import {countryPreviewPropType} from '../../utils/customPropTypes';
import Searcher from '../../components/Searcher/Searcher';
import Alert from '../../components/Alert/Alert';
import Preloader from '../../components/Preloader/Preloader';


class MasterViewContainer extends React.Component {

    componentWillMount() {
        //this.props.actions.requestAllCountries();
    }

    selectCountryHandler = (countryName, event) => {
        this.props.onCountryChanged(countryName);
    }

    searchCountryHandler = (e) =>{
        const lookupValue = e.target.value;
        if(lookupValue.length < 2){
            return null;
        }
        this.props.onSearchCountries(lookupValue);
    }

    getRenderedContent = () => {
        let selectedCountryName =
            objectIsEmpty(this.props.selectedCountry)
            ? ''
            : this.props.selectedCountry.countryName;

        let renderedContent = null;

        if(!objectIsEmpty(this.props.searchingCountriesLoadingError)){
            return <Alert type="warning" message={this.props.searchingCountriesLoadingError.message}/>;
        }else if(this.props.isSearchingCountriesLoading){
            return <Preloader/>
        }else if(this.props.countries.length <= 0){
            return <Alert type="success" message="Start looking for something"/>;
        }else {
            return this.props.countries && this.props.countries.length > 0
                ?  <MasterViewPage
                    //countries={filterCountries(this.props.countries, this.props.searchFieldInput)}
                    countries={this.props.countries}
                    onSelectCountry={this.selectCountryHandler}
                    selectedCountryName = {selectedCountryName}
                    searchFieldInput={this.props.searchFieldInput}
                    />
                : null

        }
    }

    render() {

        return (
            <div className="row">
                {<Searcher searchCountryHandler={this.searchCountryHandler} />}
                { this.getRenderedContent() }
            </div>
        );
    }
}

MasterViewContainer.propTypes = {
    countries: PropTypes.arrayOf(countryPreviewPropType),
    searchFieldInput: PropTypes.string.isRequired,
    onCountryChanged: PropTypes.func.isRequired,
    onSearchCountries: PropTypes.func.isRequired,
    isSearchingCountriesLoading: PropTypes.bool.isRequired,
    searchingCountriesLoadingError: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    countries: state.countriesReducer.countries,
    searchFieldInput: state.countriesReducer.searchFieldInput,
    selectedCountry: state.countriesReducer.selectedCountry,
    isSearchingCountriesLoading: state.countriesReducer.isSearchingCountriesLoading,
    searchingCountriesLoadingError: state.countriesReducer.searchingCountriesLoadingError,
});

const mapDispatchToProps = dispatch => {

    return {
        onCountryChanged: (countryName, event) => dispatch(countryActions.selectCountry(countryName, event)),
        onSearchCountries: (lookupValue) => dispatch(countryActions.searchCountries(lookupValue)),
    }

};


export default connect(mapStateToProps, mapDispatchToProps)(MasterViewContainer);