import React from 'react';
import Review from '../../../Reviews/Review';
import {Switch,Route } from 'react-router-dom';

const DashboardHome = () => {
    return (
        <div>
             <Switch>
              <Route path='/reviews'>
                <Review></Review>
              </Route>
            </Switch>
        </div>
    );
};

export default DashboardHome;