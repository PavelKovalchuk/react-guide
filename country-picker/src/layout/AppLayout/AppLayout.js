import React from 'react';

// components
import MasterViewContainer from '../../containers/MasterViewContainer/MasterViewContainer';
import DetailViewContainer from '../../containers/DetailViewContainer/DetailViewContainer';

import * as classes from './AppLayout.css';

const AppLayout = () => (
    <div className="container AppLayout">
        <div className="row">
            <div className="col-xs-6">
                {<MasterViewContainer />}
            </div>
            <div className="col-xs-6">
                {<DetailViewContainer />}
            </div>
        </div>
    </div>


);

export default AppLayout;