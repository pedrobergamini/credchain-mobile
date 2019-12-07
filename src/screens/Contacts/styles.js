import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  margin: 10px 20px;
  /* justify-content: center;
  align-content: center; */
`;

export const Text = styled.Text``;

export const Input = styled.TextInput``;

export const ContactCard = styled(RectButton)`
  background: #fff;
  width: 100%;
  min-height: 80px;
  border-radius: 10px;
  elevation: 10;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Name = styled.Text`
  color: #666;
  font-weight: bold;
  font-size: 18px;
`;

export const Number = styled.Text`
  color: #666;
  font-weight: bold;
  font-size: 14px;
`;

export const NumberContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NameContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AvatarContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;

  width: 20%;
  height: 55px;
  /* border-color: #7225ff; */
  /* border-right-width: 1px; */
`;

export const InfoContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 70%;
  height: 55px;
  /* border-color: #7225ff; */
  /* border-left-width: 1px; */
`;

export const Info = styled.View`
  display: flex;
`;

export const Button = styled.TouchableOpacity``;

export const Head = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
`;

export const Content = styled.View`
  display: flex;
  flex: 1;
  width: 100%;
`;

export const Footer = styled.View``;
