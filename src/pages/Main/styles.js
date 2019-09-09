import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 24px;
`;

export const Form = styled.KeyboardAvoidingView`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  height: 40px;
  padding: 0 16px;
  border: 1px solid #eee;
  border-radius: 4px;
  background: #eee;
`;

export const Button = styled(RectButton)`
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  padding: 0 12px;
  border-radius: 4px;
  background: #7159c1;
  opacity: ${props => (props.isLoading ? 0.7 : 1)};
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 24px;
`;

export const User = styled.View`
  align-items: center;
  margin: 0 20px 32px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: #eee;
`;

export const Name = styled.Text`
  margin-top: 8px;
  color: #333;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  margin-top: 4px;
  color: #999;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
`;

export const ProfileButton = styled(RectButton)`
  align-self: stretch;
  align-items: center;
  justify-content: center;
  height: 36px;
  margin-top: 12px;
  border-radius: 4px;
  background: #7159c1;
`;

export const ProfileButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
`;
