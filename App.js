import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {text: ''};
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={{height:50}} 
         placeholder="Enter interesting link"
         onChangeText= {(text) => this.setState({text})} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
