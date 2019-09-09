import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';

import api from '../../services/api';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles';

class User extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func.isRequired,
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  });

  state = {
    stars: [],
    currentPage: 1,
    isLoading: true,
    isRefreshing: false,
  };

  async componentDidMount() {
    this.loadStars();
  }

  loadStars = async (page = 1) => {
    const { navigation } = this.props;
    const { stars } = this.state;

    const user = navigation.getParam('user');
    const response = await api.get(`/users/${user.login}/starred`, {
      params: {
        page,
        per_page: 10,
      },
    });

    this.setState({
      stars: page > 1 ? [...stars, ...response.data] : response.data,
      currentPage: page,
      isLoading: false,
      isRefreshing: false,
    });
  };

  loadMore = () => {
    const { currentPage } = this.state;
    const nextPage = currentPage + 1;
    this.loadStars(nextPage);
  };

  refresh = () => {
    this.setState(
      {
        stars: [],
        isRefreshing: true,
      },
      this.loadStars
    );
  };

  handleNavigation = repository => {
    const { navigation } = this.props;
    navigation.navigate('Repository', { repository });
  };

  render() {
    const { navigation } = this.props;
    const { stars, isLoading, isRefreshing } = this.state;

    const user = navigation.getParam('user');
    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>
        {isLoading ? (
          <ActivityIndicator color="#7159c1" />
        ) : (
          <Stars
            data={stars}
            keyExtractor={star => String(star.id)}
            onEndReachedThreshold={0.2}
            onEndReached={this.loadMore}
            onRefresh={this.refresh}
            refreshing={isRefreshing}
            renderItem={({ item }) => (
              <Starred onPress={() => this.handleNavigation(item)}>
                <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                <Info>
                  <Title>{item.name}</Title>
                  <Author>{item.owner.login}</Author>
                </Info>
              </Starred>
            )}
          />
        )}
      </Container>
    );
  }
}

export default User;
