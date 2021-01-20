import React from 'react';
import Sidebar from '../../components/Navbars/Sidebar';
import Toolbar from '../../components/Navbars/Toolbar';
import Window from '../Window/Window';
import { Switch, Route } from 'react-router-dom';
import Test from '../../views/test/Test';
import img from '../../../assets/detourer.jpg';
import { Icon } from '../../components/Icons/icons';

const Mainwindow = () => {
    return <div>
        <Sidebar/>
        <Window left="270px" overflow="hidden">
            <Toolbar>
                <img src={img} alt="USER" width="32" height="32"/>
                <Icon name="user" />
            </Toolbar>
            <Window top="55px">
                <Switch>
                    <Route exact path='/admin/test' component={Test} />
                    <Route exact path='/admin/home' component={Test} />
                </Switch>
            </Window>
        </Window>
    </div>
};

export default Mainwindow;