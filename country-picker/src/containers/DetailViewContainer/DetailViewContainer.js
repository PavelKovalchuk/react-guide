import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// components / utils
import CountryDetailPage from '../../pages/CountryDetailPage/CountryDetailPage';
import { countryPropType } from '../../utils/customPropTypes';
import { objectIsEmpty } from '../../utils/helperFunctions';
import Preloader from '../../components/Preloader/Preloader';
import Alert from '../../components/Alert/Alert';

class DetailViewContainer extends React.Component {

    renderCountryDetailPage(){
        return (
            <CountryDetailPage selectedCountry={this.props.selectedCountry} />
        );
    }

    renderInitialEmptyView(){
        return (<div>Select a country to get more information!</div>);
    }

    renderPreloader(){
        return <Preloader/>;
    }

    renderErrorAlert(error){
        return <Alert type="danger" message={error.message} />;
    }

    getRenderedContent(){
        let renderedContent = null;

        if(!objectIsEmpty(this.props.singleCountryLoadingError)){
            return this.renderErrorAlert(this.props.singleCountryLoadingError);
        }else if(this.props.isSingleCountryLoading){
            return this.renderPreloader()
        }else if(objectIsEmpty(this.props.selectedCountry)){
            return this.renderInitialEmptyView()
        }else {
            return this.renderCountryDetailPage()
        }
    }

    render() {
        console.log('CountryDetailContainer render this.props:', this.props);
        return (
            <div>
                {this.getRenderedContent()}
            </div>
        );
    }
}

DetailViewContainer.propTypes = {
    selectedCountry: PropTypes.oneOfType([
        countryPropType,
        PropTypes.object
    ]).isRequired,
    isSingleCountryLoading: PropTypes.bool.isRequired,
    singleCountryLoadingError: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    console.log('DetailViewContainer mapStateToProps:', state.countriesReducer);
    return{
        selectedCountry: state.countriesReducer.selectedCountry,
        isSingleCountryLoading: state.countriesReducer.isSingleCountryLoading,
        singleCountryLoadingError: state.countriesReducer.singleCountryLoadingError
    }
};

export default connect(mapStateToProps, null)(DetailViewContainer);