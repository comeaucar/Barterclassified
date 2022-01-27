import React from 'react';
import {Button, Container, Menu} from "semantic-ui-react";
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <Menu inverted fixed={'top'}>
            <Container>
                <Menu.Item header as={Link} to={'/'}>

                    The Barter Classified
                </Menu.Item>
                <Menu.Item position={'right'}>
                    <Button as={Link} to={'admin'} basic inverted content={'login'}/>
                    <Button basic inverted content={'Register'} style={{marginLeft: '0.5em'}}/>
                </Menu.Item>

            </Container>
        </Menu>
    );
};

export default NavBar;