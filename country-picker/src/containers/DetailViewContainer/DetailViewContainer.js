import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// components / utils
import CountryDetailPage from '../../pages/CountryDetailPage/CountryDetailPage';
import { countryPropType } from '../../utils/customPropTypes';
import { objectIsEmpty } from '../../utils/helperFunctions';

class DetailViewContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        console.log('CountryDetailContainer render this.props:', this.props);
        return (
            <div>
                {
                    objectIsEmpty(this.props.selectedCountry)
                        ? <div>Select a country to get more information!</div>
                        : <CountryDetailPage selectedCountry={this.props.selectedCountry} />
                }
            </div>
        );
    }
}

DetailViewContainer.propTypes = {
    selectedCountry: PropTypes.oneOfType([
        countryPropType,
        PropTypes.object
    ]).isRequired
};

const mapStateToProps = state => {
    console.log('DetailViewContainer mapStateToProps:', state.countriesReducer.selectedCountry);
    return{
        selectedCountry: state.countriesReducer.selectedCountry
    }
};

export default connect(mapStateToProps, null)(DetailViewContainer);