import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useContext } from "react";
import { AppContext } from "../app/ShopProvider";
import { COLORS } from "../../constants/colors";

const ProductDetailScreen = () => {
  const { carrito, deleteToCart, generateOrder } = useContext(AppContext);

  return (
    <View style={styles.container}>
      {carrito.length > 0 ? (
        <Text style={styles.title}>
          El carrito tiene {carrito.length} productos
        </Text>
      ) : (
        <Text style={styles.title}>El carrito está vacío</Text>
      )}
      <View>
        <FlatList
          data={carrito}
          renderItem={({ item }) => (
            <View style={styles.list}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.detail}>{item.weight}</Text>
              <Text style={styles.detail}>${item.price}</Text>
              <TouchableOpacity
                style={styles.buttons_delete}
                onPress={() => deleteToCart(item)}
              >
                <Text>Sacar item</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.productID}
        />
      </View>
      {carrito.length > 0 && (
        <View style={styles.footer}>
          <View>
            <Text style={styles.total}>
              Total: $
              {carrito.reduce(
                (acumulado, currentValue) => acumulado + currentValue.price,
                0
              )}
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => generateOrder()}
            >
              <Text>Finalizar compra</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontFamily: "openSansBold",
    fontWeight: "bold",
    marginBottom: 10,
  },
  list: {
    padding: 20,
    margin: 10,
    borderRadius: 3,
    backgroundColor: "#ccc",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid #000",
  },
  buttons: {
    backgroundColor: COLORS.primary,
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttons_delete: {
    backgroundColor: "orange",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  total: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  breadItem: {
    padding: 20,
    margin: 10,
    borderRadius: 3,
    backgroundColor: "#ccc",
  },
  detail: {
    fontSize: 18,
  },
});

export default ProductDetailScreen;
