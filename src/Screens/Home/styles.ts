import { StyleSheet } from 'react-native';


 export const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#c3cc78',
    padding:24
  },
  eventName: {
    color: '#5d6219',
    fontSize: 24, fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: '#856c0c', 
    fontSize: 16
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#7a9b57',
    borderRadius: 5,
    color: 'white', // #455e14
    padding: 16,
    fontSize: 16,
    marginRight: 12
  },
  
  buttonText: {
    color: '#856c0c',
    fontSize: 24
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#5d6219',
    alignItems: 'center',
    justifyContent: 'center'
  },

  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42
  },

  listEmptyText: {
    color: '#5d6219',
    fontSize: 14,
    textAlign: 'center'
  }

});