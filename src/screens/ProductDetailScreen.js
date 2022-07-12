import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { AppContext } from "../app/ShopProvider";
import { COLORS } from "../../constants/colors";

const ProductDetailScreen = ({ navigation, route }) => {
  const { addToCart } = useContext(AppContext);

  const bread = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}> {bread.name}</Text>
      <Text> {bread.description}</Text>
      <Text style={styles.monto}> ${bread.price}</Text>
      <Text> {bread.weight}</Text>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.goBack()}
        >
          <Text>Volver</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => addToCart(bread)}
        >
          <Text>Añadir al carrito</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    margin: 10,
    borderRadius: 3,
    backgroundColor: "#ccc",
  },
  title: {
    fontSize: 30,
    fontFamily: "fantasy",
    fontWeight: "bold",
    marginBottom: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttons: {
    backgroundColor: COLORS.primary,
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  monto: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default ProductDetailScreen;
