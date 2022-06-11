import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ModalConfirma = ({ modalVisible, itemSelected, onHandlerDelete }) => {
  console.log("ModalConfirma: ", modalVisible, itemSelected);
  return (
    <Modal animationType="slide" visible={modalVisible}>
      <View style={styles.modal}>
        <View>
          <Text style={styles.modalTitle}>Confirmación</Text>
        </View>

        <View>
          <Text style={styles.modalMessagge}>
            ¿Está seguro que desea borrar?
          </Text>
        </View>

        <View style={styles.modalMessagge}>
          <Text style={styles.modalItem}>{itemSelected.name}</Text>
        </View>

        <View style={styles.modalBotonera}>
          <TouchableOpacity
            style={styles.modalTextButton}
            onPress={() => onHandlerDelete(true)}
          >
            <Text>Si?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.modalTextButton}
            onPress={() => onHandlerDelete(false)}
          >
            <Text>No?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modal: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
  modalMessagge: {
    fontSize: 30,
  },
  modalItem: {
    fontSize: 40,
    fontColor: "red",
    fontWeight: "bold",
  },
  modalBotonera: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  modalTextButton: {
    borderColor: "red",
    borderWidth: 2,
    width: "10%",
    fontWeight: "bold",
    borderRadius: 25,
    backgroundColor: "orange",
    padding: 5,
    margin: 5,
    textAlign: "center",
  },
});

export default ModalConfirma;
