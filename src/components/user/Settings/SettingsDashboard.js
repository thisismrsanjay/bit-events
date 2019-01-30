import React from 'react';
import {Switch,Route} from 'react-router-dom';
import SettingNav from './SettingsNav';

import BasicsPage from './BasicPage';
import AboutPage from './AboutPage';
import PhotosPage from './PhotosPage';
import AccountPage from './AccountPage';

const SettingsDashboard = () =>{
    return (
        <div className="row ">   
            <div className="col-9 col-md-8">
                <Switch>
                    <Route path='/settings/basic' component={BasicsPage}/>
                    <Route path='/settings/about' component={AboutPage}/>
                    <Route path='/settings/photos' component={PhotosPage}/>
                    <Route path='/settings/account' component={AccountPage}/>
                </Switch>
            </div>
            <div className="col-3 col-md-4">
                <SettingNav/>
            </div>
        </div>
    )
}

export default SettingsDashboard ;