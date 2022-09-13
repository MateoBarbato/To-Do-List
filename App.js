import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react'
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity} from 'react-native';
import { CustomModal, AddTask , CustomFlatList } from './components/index';


export default function App() {

  const [task,setTask] = useState('')
  const [lista,setLista] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedTask, setSelectedTask] = useState(null)

  const onHandleChangeText = (text)=>{
    setTask(text)
  }

  const addItem = () => {
    setLista((prevLista)=> [...prevLista,
    {id:Date.now(),data:task}
    ]);
  }

  const onHandleModal = (id) =>{
    setModalVisible(!modalVisible)
    setSelectedTask(lista.find((item) => item.id === id))
  }

  const renderList = ({item})=> (
      <View key={item.id} style={styles.containerItem}>
      <Text style={styles.toDoText}>{item.data}</Text>
      <TouchableOpacity style={styles.button} onPress={ () => onHandleModal(item.id)}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
      </View>
      
  )

  const onHandleDeleteItem = (id) => { 
    setLista(lista.filter((item) => item.id!==id));
    setSelectedTask(null);
    setModalVisible(!modalVisible)
  }

  return (
    
    
    <View style={styles.container}>
      <AddTask
      task={task}
      onChangeText={onHandleChangeText}
      placeholder='New Task'
      addItem={addItem}
      />
      <CustomFlatList
        style={styles.containerToDo}
        data={lista}
        renderItem={renderList}
        keyExtractor={(item)=> item.id.toString()}
        // contentContainerStyle={styles.alignJusti}
        showsVerticalScrollIndicator={false}
      />
      <CustomModal visible={modalVisible} animationType ={'slice'}>
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
      </CustomModal>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(107, 191, 255, 0.29)',
  },
 
  alignJusti:{
    justifyContent:'center',
    alignItems:'center'
  },
  containerItem:{
    flex:1,
    justifyContent:'space-evenly',
    flexDirection:'row'
  },
  toDoText:{
    borderWidth:1,
    borderColor:'#192A51',
    width:280,
    borderRadius:5,
    paddingHorizontal:10,
    height:30,
    marginVertical:10,
    marginHorizontal:4,
    lineHeight:30,
    backgroundColor:'white'

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
    width:'10%',
    height:'80%',
    marginTop:5,
    alignItems:'center',
    justifyContent:'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
  },
  delete: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  }
});
