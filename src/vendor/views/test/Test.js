import React from 'react';
import ImageBox from '../../components/Boxes/ImageBox';
import opencts from '../../../assets/opencts.png';
import Title from '../../components/Typography/Title';
import Input from '../../components/Inputs/Input';
import Button from '../../components/Buttons/Button';
import Grid from '../../layouts/Grid/Grid';
import Col from '../../layouts/Grid/Col';

const Test = () => {
    return (<div>
        <Title rule align="right">Image Box</Title>
        <ImageBox url={opencts} opacity="0.75" width="300px" height="300px" >
            <div style={{
                width: '180px'
            }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, impedit.
            </div>
        </ImageBox>

        <Title rule align="right">Titres</Title>
        <Title>Hello !</Title>
        <Title thin>Hello !</Title>
        <Title type="h2">Hello !</Title>
        <Title type="h2" thin>Hello !</Title>
        <Title type="h3">Hello !</Title>
        <Title type="h3" thin>Hello !</Title>
        <Title type="h4">Hello !</Title>
        <Title type="h5">Hello !</Title>
        <Title type="h6">Hello !</Title>
        <Title type="h7">Hello !</Title>

        <Title rule align="right">Inputs</Title>

        <Title type="h3" align="left" thin>Avec label et icon</Title>
        <Input label="Username" placeholder="Username" required icon="message" />

        <Title type="h3" align="left" thin>Sans label et icon</Title>
        <Input required placeholder='Username' icon="message" />

        <Title type="h3" align="left" thin>Avec label et sans icon</Title>
        <Input required placeholder='Username' label="Username" />

        <Title type="h3" align="left" thin>Sans label label et sans icon</Title>
        <Input required placeholder='Username' />

        <Title rule align="right">Boutons</Title>
        <Button>Bouton par défaut</Button> <br /> <br />
        <Button expand>Bouton étendu</Button> <br /> <br />
        <Button outline>Bouton sans fond</Button> <br /> <br />
        <Button outline color="secondary">Bouton sans fond</Button> <br /> <br />
        <Button color="secondary">Bouton secondaire </Button> <br /> <br />
        <Button color="success">Bouton success</Button> <br /> <br />
        <Button color="light" rounded>Bouton claire</Button> <br /> <br />
        <Button color="dark" rounded>Bouton sombre</Button> <br /> <br />
        <Button color="danger" rounded>Bouton bord arrondi</Button> <br />

        <Title rule align="right">Grid</Title>
        <Title type="h3" align="left" thin>Avec espace entre les contenus</Title>
        <Grid spacing="1">
            <Col bgColor="red">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus fugit iure nam nesciunt quo commodi aliquam voluptate. Ipsa voluptatum officiis numquam architecto vero doloribus ut tenetur perspiciatis expedita aperiam assumenda maxime dicta saepe nisi, quo ad esse facere amet. Vel consectetur, dicta necessitatibus doloremque incidunt hic quia itaque debitis iure!
            </Col>

            <Col bgColor="blue">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus fugit iure nam nesciunt quo commodi aliquam voluptate. Ipsa voluptatum officiis numquam architecto vero doloribus ut tenetur perspiciatis expedita aperiam assumenda maxime dicta saepe nisi, quo ad esse facere amet. Vel consectetur, dicta necessitatibus doloremque incidunt hic quia itaque debitis iure!
            </Col>

            <Col bgColor="green">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus fugit iure nam nesciunt quo commodi aliquam voluptate. Ipsa voluptatum officiis numquam architecto vero doloribus ut tenetur perspiciatis expedita aperiam assumenda maxime dicta saepe nisi, quo ad esse facere amet. Vel consectetur, dicta necessitatibus doloremque incidunt hic quia itaque debitis iure!
            </Col>
            <Col bgColor="yellow">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus fugit iure nam nesciunt quo commodi aliquam voluptate. Ipsa voluptatum officiis numquam architecto vero doloribus ut tenetur perspiciatis expedita aperiam assumenda maxime dicta saepe nisi, quo ad esse facere amet. Vel consectetur, dicta necessitatibus doloremque incidunt hic quia itaque debitis iure!
            </Col>
            <Col bgColor="purple">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus fugit iure nam nesciunt quo commodi aliquam voluptate. Ipsa voluptatum officiis numquam architecto vero doloribus ut tenetur perspiciatis expedita aperiam assumenda maxime dicta saepe nisi, quo ad esse facere amet. Vel consectetur, dicta necessitatibus doloremque incidunt hic quia itaque debitis iure!
            </Col>
        </Grid>

        <Title type="h3" align="left" thin>Sans espace entre les contenus</Title>
        <Grid>
            <Col bgColor="red" margin="2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus fugit iure nam nesciunt quo commodi aliquam voluptate. Ipsa voluptatum officiis numquam architecto vero doloribus ut tenetur perspiciatis expedita aperiam assumenda maxime dicta saepe nisi, quo ad esse facere amet. Vel consectetur, dicta necessitatibus doloremque incidunt hic quia itaque debitis iure!
            </Col>

            <Col bgColor="blue">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus fugit iure nam nesciunt quo commodi aliquam voluptate. Ipsa voluptatum officiis numquam architecto vero doloribus ut tenetur perspiciatis expedita aperiam assumenda maxime dicta saepe nisi, quo ad esse facere amet. Vel consectetur, dicta necessitatibus doloremque incidunt hic quia itaque debitis iure!
            </Col>

            <Col bgColor="green">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus fugit iure nam nesciunt quo commodi aliquam voluptate. Ipsa voluptatum officiis numquam architecto vero doloribus ut tenetur perspiciatis expedita aperiam assumenda maxime dicta saepe nisi, quo ad esse facere amet. Vel consectetur, dicta necessitatibus doloremque incidunt hic quia itaque debitis iure!
            </Col>
            <Col bgColor="yellow">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus fugit iure nam nesciunt quo commodi aliquam voluptate. Ipsa voluptatum officiis numquam architecto vero doloribus ut tenetur perspiciatis expedita aperiam assumenda maxime dicta saepe nisi, quo ad esse facere amet. Vel consectetur, dicta necessitatibus doloremque incidunt hic quia itaque debitis iure!
            </Col>
            <Col bgColor="purple">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus fugit iure nam nesciunt quo commodi aliquam voluptate. Ipsa voluptatum officiis numquam architecto vero doloribus ut tenetur perspiciatis expedita aperiam assumenda maxime dicta saepe nisi, quo ad esse facere amet. Vel consectetur, dicta necessitatibus doloremque incidunt hic quia itaque debitis iure!
            </Col>
        </Grid>
    </div>)
};

export default Test;