import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react'
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity} from 'react-native';
import { Modal } from 'react-native-web';


export default function App() {

  const [task,setTask] = useState('')
  const [lista,setLista] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedTask, setSelectedTask] = useState(null)

  const onHandleChangeText = (text)=>{
    setTask(text)
  }

  const addItem = () => {
    setLista((prevLista)=>[...prevLista,
    {id:Date.now(),data:task}
    ]);
  }

  const onHandleModal = (id) =>{
    setModalVisible(true)
    setSelectedTask(lista.find((item) => item.id === id))
    console.warn(id)
  }

  const renderList = ({item})=> (
      <View key ={item.id}>
      <Text style={styles.toDoText}>{item.data}</Text>
      <TouchableOpacity style={styles.button} onPress={ () => onHandleModal(item.id)}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
      </View>
  )

  const onHandleDeleteItem = (id) => { 
    setLista(task.filter((item) => item.id===id));
    setSelectedTask(null);
    setModalVisible(!modalVisible)
  }

  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput 
          placeholder='New Task' 
          style={styles.input}
          onChangeText = {(value)=> onHandleChangeText(value)}
        />
        <Button title='Add' color={'#192A51'} onPress={addItem}></Button>
      </View>
      <FlatList
        style={styles.containerToDo}
        data={lista}
        renderItem={renderList}
        keyExtractor={(item)=> item.id.toString()}
        // contentContainerStyle={styles.alignJusti}
        showsVerticalScrollIndicator={false}
      />
      <Modal animationType="slide" visible={modalVisible}> 
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Detalle de la lista</Text>
        </View>
        <View style={styles.modalMessageContainer}> 
          <Text style={styles.modalMessage}>¿Estas seguro de que quieres eliminar?</Text>
        </View>
        <View style={styles.modalMessageContainer}> 
          <Text style={styles.selectedTask}>{selectedTask?.data}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button 
            title='Eliminar'
            onPress={() => onHandleDeleteItem(selectedTask?.id)}
            color='#4A306D'
          />
          <Button 
            title='Cancelar'
            onPress={() => setModalVisible(!modalVisible)}
            color='#cccccc'
          />
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(107, 191, 255, 0.29)',
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    paddingVertical: 20,
    zIndex:4
  },
  modalTitle: {
    fontSize: 16
  },
  modalMessageContainer : {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  modalMessage: {
    fontSize: 14,
  },
  selectedTask: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#4A306D',
    padding: 10,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
  },
  delete: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff'
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
    borderWidth:1,
    borderColor:'#192A51',
    marginHorizontal:15,
    marginBottom:20
  },
  alignJusti:{
    justifyContent:'center',
    alignItems:'center'
  },
  toDoText:{
    borderWidth:1,
    borderColor:'#192A51',
    width:320,
    paddingHorizontal:10,
    height:30,
    marginVertical:10,
    lineHeight:30

  },
  input: {
    width:'75%',
    borderBottomColor:'#192A51',
    borderBottomWidth:1,
    height:40,
    color:'black',
  }
});
