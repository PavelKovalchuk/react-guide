import React from 'react';

// components / utils
import CountryCard from '../../components/CountryCard/CountryCard';
import { countryPropType } from '../../utils/customPropTypes';

const CountryDetailPage = ({ selectedCountry }) => (
    <CountryCard
        countryName={selectedCountry.countryName}
        regionName={selectedCountry.regionName}
        image={selectedCountry.flagImageLink}
        languages={selectedCountry.languages}
        capitalCity={selectedCountry.capitalCity}
        currencies={selectedCountry.currencies}
        population={selectedCountry.population}
    />
);

CountryDetailPage.propTypes = {
    selectedCountry: countryPropType.isRequired
};

export default CountryDetailPage;