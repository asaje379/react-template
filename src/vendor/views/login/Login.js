import React, { useState } from 'react';
import ImageBox from '../../components/Boxes/ImageBox';
import Grid from '../../layouts/Grid/Grid';
import Input from '../../components/Inputs/Input';
import bkgd from '../../../assets/bkgd.jpeg';
import logoApp from '../../../assets/opencts.png';
import Col from '../../layouts/Grid/Col';
import Title from '../../components/Typography/Title';

import classes from './login.module.scss';
import Button from '../../components/Buttons/Button';
import { useHistory } from 'react-router-dom';

const Login = ({
    backgroundImage = bkgd,
    logo = logoApp,
    title = 'Connectez-vous !',
    subtitle = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quod.',
    onLoginRedirect = '/admin'
}) => {

    const history = useHistory();
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    return <ImageBox width="100vw" height="100vh" url={backgroundImage}>
        <Grid width="80%" bgColor="#fff" justify="around">
            <Col>
                <ImageBox opacity="0">
                    <img src={logo} alt="LOGO" className={classes.logo} />
                </ImageBox>
            </Col>
            <Col bgColor="#fff" padding="30px">
                <Title padding="5px 0">{title}</Title>
                <Title type="h4" thin padding="5px 0">
                    {subtitle}
                </Title>
                <form className={classes.form} onSubmit={() => {
                    console.log('object')
                    history.push(onLoginRedirect);
                }}>
                    <Input 
                        value={credentials.email} 
                        onChange={v => setCredentials({ ...credentials, email: v })} 
                        required 
                        name="username"
                        placeholder='Adresse email' type="email" icon="message" />

                    <Input 
                        required 
                        value={credentials.password} 
                        onChange={v => setCredentials({ ...credentials, password: v })}
                        placeholder='Mot de passe' 
                        name="password"
                        type="password" minLength="8" icon="lock" />
                    <Button type="submit" lg color="success" rounded expand>Connexion</Button>
                </form>
            </Col>
        </Grid>
    </ImageBox>;
};

export default Login;