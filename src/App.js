import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import InitScreen from './Component/Authentication/InitScreen';
import LoginScreen from './Component/Authentication/LoginScreen';
import ChangePassword from './Component/Authentication/ChangePassword';
import Register from './Component/Authentication/Register';
import CodeConfirmation from './Component/Authentication/CodeConfirmation';
import HomePage from './Component/Home/HomePage';
import MyAdv from './Component/advertising/MyAdv';
import Orders from './Component/Orders/Orders';
import SearchMenue from './Component/Search/SearchMenue';
import Notify from './Component/notification/Notify';
import MYProfile from './Component/MyProfile/MYProfile';
import UpdateProfile from './Component/MyProfile/UpdateProfile';
import UpdatePassword from './Component/MyProfile/UpdatePassword';
import ServiceDetailes from './Component/Home/ServiceDetailes';
import CityDetailes from './Component/Home/CityDetailes';
import Theadvertiser from './Component/Home/Theadvertiser';
import EditInfo from './Component/advertising/EditInfo';
import AddAdver from './Component/advertising/AddAdver';
import Payment from './Component/advertising/Payment';
import PublishAd from './Component/advertising/PublishAd';
import SuccessAdd from './Component/advertising/SuccessAdd';
import EditAdv from './Component/advertising/EditAdv';
import AdvDetailes from './Component/advertising/AdvDetailes';
import AddOrders from './Component/Orders/AddOrders';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={InitScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/ChangePassword' component={ChangePassword} />
          <Route path='/Register' component={Register} />
          <Route path='/CodeConfirm' component={CodeConfirmation} />
          <Route path='/Home' component={HomePage} />
          <Route path='/MyAdv' component={MyAdv} />
          <Route path='/Orders' component={Orders} />
          <Route path='/SearchMenue' component={SearchMenue} />
          <Route path='/Notify' component={Notify} />
          <Route path='/MYProfile' component={MYProfile} />
          <Route path='/UpdateProfile' component={UpdateProfile} />
          <Route path='/UpdatePassword' component={UpdatePassword} />
          <Route path='/ServiceDetailes' component={ServiceDetailes} />
          <Route path='/CityDetailes' component={CityDetailes} />
          <Route path='/Theadvertiser' component={Theadvertiser} />
          <Route path='/EditInfo' component={EditInfo} />
          <Route path='/AddAdver' component={AddAdver} />
          <Route path='/Payment' component={Payment} />
          <Route path='/PublishAd' component={PublishAd} />
          <Route path='/SuccessAdd' component={SuccessAdd} />
          <Route path='/EditAdv' component={EditAdv} />
          <Route path='/AdvDetailes' component={AdvDetailes} />
          <Route path='/AddOrders' component={AddOrders} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
