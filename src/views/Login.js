import React from 'react';
import VendorLogin from '../vendor/views/login/Login';
import logoApp from '../assets/opencts.png';
import bcdImg from '../assets/bkgd.jpeg';

export default function Login() {
    return <VendorLogin
        backgroundImage= {bcdImg}
        logo= {logoApp}
        title='Veuillez vous connecter !'
        subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit'
        onLoginRedirect='/admin' />;
}
