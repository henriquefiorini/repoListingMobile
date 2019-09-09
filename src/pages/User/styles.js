import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 32px;
`;

export const Header = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  background: #eee;
  border-radius: 50px;
`;

export const Name = styled.Text`
  margin-top: 12px;
  color: #333;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const Bio = styled.Text`
  margin-top: 4px;
  color: #999;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
`;

export const Stars = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding-top: 20px;
  border-top-width: 1px;
  border-color: #eee;
`;

export const Starred = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  padding: 12px 16px;
  border-radius: 4px;
  background: #f5f5f5;
`;

export const OwnerAvatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #eee;
`;

export const Info = styled.View`
  flex: 1;
  margin-left: 10px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  color: #333;
  font-size: 15px;
  font-weight: bold;
`;

export const Author = styled.Text`
  margin-top: 4px;
  color: #666;
  font-size: 13px;
`;
