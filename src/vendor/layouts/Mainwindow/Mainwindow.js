import React, { useState } from 'react';
import Sidebar from '../../components/Navbars/Sidebar';
import Toolbar from '../../components/Navbars/Toolbar';
import Window from '../Window/Window';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
import { Icon } from '../../components/Icons/Icon';
import Archive from '../../../views/Archive';
import Logs from '../../../views/Logs';
import Settings from '../../../views/Settings';
import Plan from '../../../components/Plan';
import Dashboard from '../../../views/Dashboard';

const Mainwindow = ({
    image = null,
    sidebar = null,
}) => {

    const [hideSidebar, setHideSidebar] = useState(false);
    const history = useHistory();

    return <div>
        <Sidebar image={image} opened={!hideSidebar}>{sidebar}</Sidebar>
        <Window left={hideSidebar ? '0px' : '270px'} overflow="hidden">
            <Toolbar>
                <div className="d-flex ai-center">
                    <Icon className name="menu" onClick={() => setHideSidebar(!hideSidebar)} />
                    <div className="ml-4">
                        <Icon name="home" onClick={() => history.push('/admin/dashboard')} />
                    </div>
                </div>
                <Icon name="user" onClick={() => history.push('/')} />
            </Toolbar>
            <Window top="55px" >
                <Switch>
                    <Route exact path='/admin'>
                        <Redirect to="/admin/dashboard" />
                    </Route>
                    <Route exact path='/admin/dashboard' component={Dashboard} />
                    <Route exact path='/admin/archives' component={Archive} />
                    <Route exact path='/admin/logs' component={Logs} />
                    <Route exact path='/admin/settings' component={Settings} />
                    <Route exact path='/admin/plan/:id' component={Plan} />
                </Switch>
            </Window>
        </Window>
    </div>
};

export default Mainwindow;