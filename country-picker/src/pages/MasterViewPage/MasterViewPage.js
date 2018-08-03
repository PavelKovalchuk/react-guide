import React from 'react';
import PropTypes from 'prop-types';

import ListViewItem from '../../components/ListViewItem/ListViewItem';

const MasterViewPage = ({ countries, selectedCountry, onSelectCountry }) => (
    <div>
        <div className="list-group list-scrollable">
            {countries.map(country => (
                    <ListViewItem
                        key={country.name}
                        title={country.name}
                        subTitle={country.region}
                        active={selectedCountry.countryName === country.name}
                        handleOnClick={(e) => (onSelectCountry(country.name, e))}
                    />
                )
            )}
        </div>
    </div>
);

MasterViewPage.propTypes = {
    countries: PropTypes.arrayOf(PropTypes.object).isRequired,
    selectedCountry: PropTypes.object.isRequired,
    onSelectCountry: PropTypes.func.isRequired
};

export default MasterViewPage;