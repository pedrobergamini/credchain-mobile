import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  margin: 10px 20px;
`;

export const Title = styled.Text`
  color: rgb(30, 30, 30);
  font-weight: bold;
  font-size: 33px;
  margin-right: 5px;
`;

export const Head = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
`;

export const Info = styled.View`
  background: #fff;
  width: 100%;
  height: 250px;
  border-radius: 60px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  elevation: 10;

  align-items: center;
  justify-content: center;
`;

export const AudioButton = styled(RectButton)`
  background: #7225ff;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  opacity: ${props => (props.isRecording ? 0.5 : 1)};
`;
