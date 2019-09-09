import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Keyboard, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import {
  Container,
  Form,
  Input,
  Button,
  List,
  User,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
} from './styles';

class Main extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  static navigationOptions = {
    title: 'Usuários',
  };

  state = {
    newUser: '',
    users: [],
    isLoading: false,
  };

  async componentDidMount() {
    const users = await AsyncStorage.getItem('users');
    if (users) {
      this.setState({
        users: JSON.parse(users),
      });
    }
  }

  componentDidUpdate(_, prevState) {
    const { users } = this.state;
    if (users !== prevState.users) {
      AsyncStorage.setItem('users', JSON.stringify(users));
    }
  }

  handleAddUser = async () => {
    const { newUser, users } = this.state;
    this.setState({ isLoading: true });

    const response = await api.get(`/users/${newUser}`);
    const data = {
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: response.data.avatar_url,
    };
    this.setState({
      newUser: '',
      users: [...users, data],
      isLoading: false,
    });
    Keyboard.dismiss();
  };

  handleNavigation = user => {
    const { navigation } = this.props;
    navigation.navigate('User', { user });
  };

  render() {
    const { newUser, users, isLoading } = this.state;

    return (
      <Container>
        <Form>
          <Input
            value={newUser}
            placeholder="Type the Github user"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="send"
            onChangeText={text => this.setState({ newUser: text })}
            onSubmitEditing={this.handleAddUser}
          />
          <Button onPress={this.handleAddUser}>
            {isLoading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Icon name="add" size={20} color="#fff" />
            )}
          </Button>
        </Form>
        <List
          data={users}
          keyExtractor={user => user.login}
          renderItem={({ item }) => (
            <User>
              <Avatar source={{ uri: item.avatar }} />
              <Name>{item.name}</Name>
              <Bio>{item.bio}</Bio>
              <ProfileButton onPress={() => this.handleNavigation(item)}>
                <ProfileButtonText>Ver perfil</ProfileButtonText>
              </ProfileButton>
            </User>
          )}
        />
      </Container>
    );
  }
}

export default Main;
