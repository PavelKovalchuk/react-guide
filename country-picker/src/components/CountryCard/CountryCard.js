import React from 'react';
import PropTypes from 'prop-types';
import { currencyPropType, languagePropType } from '../../utils/customPropTypes';
import LoadImage from '../LoadImageComponent/LoadImageComponent';

class CountryCard extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    render() {
        console.log('CountryCard this.props', this.props);

        const { countryName, regionName, image,
            languages, capitalCity, currencies, population } = this.props;
        return (
            <div className="thumbnail row card-background">
                <h2 className="text-center">{countryName}</h2>
                <LoadImage imageLink={image} />
                <div className="caption">
                    <p className="text-center">
                        Region: {regionName} -- Population: {population} -- Capital: {capitalCity}
                    </p>
                    <hr />
                    <div className="col-xs-6">
                        <p className="text-center">Languages</p>
                        {languages.map(language => (
                            <div key={language.name}>
                                {language.name}
                            </div>
                        ))}
                    </div>
                    <div className="col-xs-6 left-border">
                        <p className="text-center">Currencies</p>
                        {currencies.map((currency, i) => (
                            <div key={currency.name}>
                                code: {currency.code} <br />
                                name: {currency.name} <br />
                                symbol: {currency.symbol}
                                {i !== currencies.length - 1 && <hr />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

CountryCard.propTypes = {
    countryName: PropTypes.string.isRequired,
    regionName: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    languages: PropTypes.arrayOf(languagePropType).isRequired,
    capitalCity: PropTypes.string.isRequired,
    currencies: PropTypes.arrayOf(currencyPropType).isRequired,
    population: PropTypes.number.isRequired
};

export default CountryCard;