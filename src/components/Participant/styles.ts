import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#7a9b57',
    borederRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: '#455e14',
    marginLeft: 16

  },
  buttonText: {
    color: '#856c0c',
    fontSize: 24
    
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#BC3908', //#941b0c
    alignItems: 'center',
    justifyContent: 'center'
  }
  
  

});