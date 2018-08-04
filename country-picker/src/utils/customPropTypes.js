// centralize proptypes which are used in multiple places
import { PropTypes } from 'prop-types';

export const languagePropType = PropTypes.shape({
    name: PropTypes.string.isRequired
});

export const currencyPropType = PropTypes.shape({
    code: PropTypes.string,
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired
});

export const countryPropType = PropTypes.shape({
    countryName: PropTypes.string.isRequired,
    capitalCity: PropTypes.string.isRequired,
    regionName: PropTypes.string.isRequired,
    population: PropTypes.number.isRequired,
    currencies: PropTypes.arrayOf(currencyPropType.isRequired).isRequired,
    languages: PropTypes.arrayOf(languagePropType.isRequired).isRequired
});

export const countryPreviewPropType = PropTypes.shape({
    name: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired
});