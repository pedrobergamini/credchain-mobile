import React from 'react';
import PropTypes from 'prop-types';

import { MaterialIcons } from '@expo/vector-icons';

import {
  Container,
  Text,
  ContactCard,
  Head,
  Content,
  Footer,
  Button,
  Avatar,
  Name,
  Number,
  Info,
  AvatarContainer,
  InfoContainer,
  NumberContainer,
  NameContainer,
} from './styles';
import Header from '../../components/Header';
import Background from '../../components/Background';

function Contact({ name, phone, uri }) {
  return (
    <ContactCard>
      <AvatarContainer>
        <Avatar source={{ uri }} />
      </AvatarContainer>
      <InfoContainer>
        <Info>
          <NameContainer>
            <MaterialIcons name="account-circle" color="#7225ff" />
            <Name ellipsizeMode="head"> {name}</Name>
          </NameContainer>
          <NumberContainer>
            <MaterialIcons name="call" color="#7225ff" />
            <Number> {phone}</Number>
          </NumberContainer>
        </Info>
      </InfoContainer>
    </ContactCard>
  );
}

export default function Contacts() {
  return (
    <Background>
      <Header />
      <Container>
        <Head>
          <Text>Contatos</Text>
        </Head>
        <Content>
          <Contact
            uri="https://avatars3.githubusercontent.com/u/21299792?s=460&v=4"
            name="Gabriel L. F. de Souza"
            phone="(11) 98377-8743"
          />
          <Contact
            uri="https://avatars3.githubusercontent.com/u/21299792?s=460&v=4"
            name="Pedro Henrique Gama"
            phone="(11) 98377-8743"
          />
          <Contact
            uri="https://avatars3.githubusercontent.com/u/21299792?s=460&v=4"
            name="Pedro Mello"
            phone="(11) 98377-8743"
          />
          <Contact
            uri="https://avatars3.githubusercontent.com/u/21299792?s=460&v=4"
            name="Bernardo Nery"
            phone="(11) 98377-8743"
          />
        </Content>
        <Footer>
          <Button onPress={() => {}}>
            <Text>Novo Contato</Text>
          </Button>
        </Footer>
      </Container>
    </Background>
  );
}

const tabBarIcon = ({ tintColor }) => (
  <MaterialIcons name="perm-contact-calendar" size={30} color={tintColor} />
);

Contacts.navigationOptions = {
  tabBarLabel: 'Contatos',
  tabBarIcon,
};

tabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};
