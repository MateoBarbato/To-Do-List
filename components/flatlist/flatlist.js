import { FlatList } from "react-native";
import {styles} from  './styles'

const CustomFlatList = ( {data,renderItem,showsVerticalScrollIndicator} ) => {

    return (
        <FlatList
        style={styles.containerToDo}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item)=> item.id.toString()}
        // contentContainerStyle={styles.alignJusti}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      />    
    )

}

export default CustomFlatList