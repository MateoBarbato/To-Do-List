import { FlatList } from "react-native";
import {styles} from  './styles'

const CustomFlatList = ( {data,renderItem,showsVerticalScrollIndicator} ) => {

    return (
        <FlatList
        style={styles.containerToDo}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item)=> item.id.toString()}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      />    
    )

}

export default CustomFlatList