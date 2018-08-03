import React from 'react';
import PropTypes from 'prop-types';

import ListViewItem from '../../components/ListViewItem/ListViewItem';

const MasterViewPage = ({ countries, selectedCountryName, onSelectCountry }) => {

    return (
        <div>
            <div className="list-group list-scrollable">
                {countries.map(country => (
                        <ListViewItem
                            key={country.name}
                            title={country.name}
                            subTitle={country.region}
                            active={selectedCountryName === country.name}
                            handleOnClick={(e) => (onSelectCountry(country.name, e))}
                        />
                    )
                )}
            </div>
        </div>
    );

};

MasterViewPage.propTypes = {
    countries: PropTypes.arrayOf(PropTypes.object).isRequired,
    selectedCountryName: PropTypes.string.isRequired,
    onSelectCountry: PropTypes.func.isRequired
};

export default MasterViewPage;