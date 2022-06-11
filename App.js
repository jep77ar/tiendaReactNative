import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ModalConfirma from "./components/ModalConfirma";

export default function App() {
  const [textItem, setTextItem] = useState("");
  const [itemList, setItemList] = useState([]);

  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const agregaItem = () => {
    if (textItem.length > 0) {
      console.log("agregando: ", textItem);
      setItemList([...itemList, { id: Math.random(), name: textItem }]);
      setTextItem("");
    }
  };

  const onHandlerChangeItem = (text) => setTextItem(text);
  const onHandlerKeyPress = (key) => {
    if (key.key === "Enter") {
      agregaItem();
    }
  };

  const onHandlerDelete = (hayQBorrar) => {
    console.log("onHandlerDelete1: ", hayQBorrar, itemSelected);
    if (hayQBorrar) {
      setItemList(itemList.filter((item) => item.id !== itemSelected.id));
      setItemSelected({});
    }

    setModalVisible(!modalVisible);
    console.log("onHandlerDelete2: ", itemSelected, itemList);
  };

  const onHandlerModal = (elemento) => {
    console.log("onHandlerModal1: ", elemento.item);
    setItemSelected(itemList.find((item) => item.id === elemento.item.id));
    setModalVisible(!modalVisible);

    console.log("onHandlerModal2: ", itemSelected, itemList);
  };

  return (
    <View style={styles.container}>
      <ModalConfirma
        modalVisible={modalVisible}
        itemSelected={itemSelected}
        onHandlerDelete={onHandlerDelete}
      />

      <Text style={styles.textItem}>Hola, Coder!!</Text>
      <View style={styles.row}>
        <TextInput
          placeholder="Item de la lista"
          style={styles.input}
          onChangeText={onHandlerChangeItem}
          onKeyPress={onHandlerKeyPress}
          value={textItem}
        />

        <TouchableOpacity style={styles.button} onPress={agregaItem}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      {/* <View>
        <Text style={styles.items}>{textItem}</Text>
      </View> */}
      <FlatList
        data={itemList}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onHandlerModal({ item })}>
            <View>
              <Text style={styles.items}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "cyan",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    width: "100%",
    padding: 30,
  },
  textItem: {
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    borderBottomColor: "black",
    borderRightColor: "black",
    borderBottomWidth: 2,
    borderRightWidth: 2,
    width: 200,
    padding: 10,
    fontSize: 20,
  },
  items: {
    fontSize: 30,
    color: "brown",
    alignItems: "flex-start",
    margin: 4,
  },
  button: {
    width: 40,
    margin: 10,
  },
  buttonText: {
    fontSize: 30,
    color: "green",
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
  },
});
