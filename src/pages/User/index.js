/* eslint-disable react/prop-types */
/* eslint-disable react/static-property-placement */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
  Loading,
} from './styles';

// export default function User({ navigation }) {
export default class User extends Component {
  static propTypes = {
    route: PropTypes.shape({
      params: PropTypes.object,
    }).isRequired,
  };

  state = {
    stars: [],
    loading: true,
    page: 1,
    refreshing: false,
  };

  componentDidMount() {
    this.load();
  }

  load = async () => {
    const { page } = this.state;
    const { route } = this.props;
    const { user } = route.params;
    const response = await api.get(`/users/${user.login}/starred`, {
      params: { page },
    });
    // console.tron.log(this.state);
    this.setState({
      stars: response.data,
      loading: false,
      refreshing: false,
    });
  };

  loadMore = async () => {
    const { page } = this.state;
    const nextpage = await (page + 1);
    this.setState({ loading: true, page: nextpage });
    this.load();
  };

  refreshList = () => {
    this.setState({ refreshing: true, stars: [], page: 1 }, this.load);
  };

  handleNavigate = repository => {
    const { navigation } = this.props;
    // console.tron.log(repository);
    navigation.navigate('Repository', { repository });
  };

  render() {
    const { stars, loading, refreshing } = this.state;
    const { route } = this.props;
    const { user } = route.params;
    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name> {user.name} </Name>
          <Bio> {user.bio} </Bio>
        </Header>

        {loading ? (
          <Loading />
        ) : (
          <Stars
            data={stars}
            onEndReachedThreshold={0.2} // Carrega mais itens quando chegar em 20% do fim
            onEndReached={this.loadMore}
            onRefresh={this.refreshList}
            refreshing={refreshing} // Função que carrega mais itens
            keyExtractor={star => String(star.id)}
            renderItem={({ item }) => (
              <Starred onPress={() => this.handleNavigate(item)}>
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
