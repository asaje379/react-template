import React from 'react';
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
                    history.push(onLoginRedirect);
                }}>
                    <Input required placeholder='Adresse email' type="email" icon="message" />
                    <Input required placeholder='Mot de passe' type="password" minLength="8" icon="lock" />
                    <Button color="success" rounded expand>Connexion</Button>
                </form>
            </Col>
        </Grid>
    </ImageBox>;
};

export default Login;