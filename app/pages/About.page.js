import result from 'lodash/result';

class AboutPage extends Component {
  render () {
    const navigatingFrom = result(this.props, 'navigation.state.params.navigatingFrom', '');
    return (
      <View style={styles.container}>
        <Text>About View </Text>
        {navigatingFrom ? <Text>Navigating from: {navigatingFrom} </Text> : null}
      </View>
    );
  }
}
