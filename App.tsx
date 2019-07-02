/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React from 'react';
import { StyleSheet, View} from 'react-native';
import Home from './src/Home';

const App = () => {
  return (
    <View style={styles.container}>
        <Home />
      </View>
    );
  }
  
class AppContainer extends React.Component {
  render(){
    return (
      <App />
    )
  }
}
    
// this is not hot loading
// export default App

// exporting the Class Component works very well
export default AppContainer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});