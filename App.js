import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput placeholder='New Task' style={styles.input}></TextInput>
        <Button title='Add' color={'#192A51'} onPress={()=> console.log('Hola desde el boton!')}></Button>
      </View>
      <View style={styles.containerToDo}>
        <Text style={styles.toDoText}>Item 1</Text>
        <Text style={styles.toDoText}>Item 1</Text>
        <Text style={styles.toDoText}>Item 1</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(107, 191, 255, 0.29)',
    // alignItems: 'center',
    // justifyContent: 'flex-start',
  },
  textInputContainer: {
  marginHorizontal:20,
  marginTop:50,
  marginBottom:20,
  backgroundColor:'#DEE2FF',
  padding:5,
  flexDirection: 'row',
  justifyContent: 'space-between'
  },
  containerToDo:{
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center',
    borderWidth:1,
    borderColor:'#192A51',
    marginHorizontal:15,
    paddingTop:20,
    marginBottom:150

  },
  toDoText:{
    borderWidth:1,
    borderColor:'#192A51',
    width:'90%',
    paddingHorizontal:10,
    height:30,
    marginVertical:10

  },
  input: {
    width:'75%',
    borderBottomColor:'#192A51',
    borderBottomWidth:1,
    height:40,
    color:'black',
  }
});
