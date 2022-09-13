import React from 'react'
import {TextInput,View, Button} from 'react-native'
import {styles} from './styles'

const AddTask = ({task, onChangeText, addItem ,placeholder}) => {

    return (

        <View style={styles.textInputContainer}>
        <TextInput 
          placeholder={placeholder} 
          style={styles.input}
          onChangeText = {onChangeText}
          value={task}
        />
        <Button title='Add' color={'#192A51'} onPress={addItem}></Button>
      </View>
    )

}

export default AddTask