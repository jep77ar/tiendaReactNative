import { StyleSheet, View, Text, FlatList } from "react-native";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../app/ShopProvider";

const ProductDetailScreen = () => {
  const { getOrders, carrito } = useContext(AppContext);

  const [ordenes, setOrdenes] = useState([]);

  async function getOrdersFromShop() {
    console.log("getOrdersFromShop");
    const orders = await getOrders();
    console.log("orders: ", orders);
    setOrdenes(orders);
  }

  useEffect(() => {
    getOrdersFromShop();
  }, [carrito]);

  return (
    <View style={styles.container}>
      {ordenes.length > 0 ? (
        <Text style={styles.title}>
          Cantidad de ordenes encontradas: {ordenes.length}
        </Text>
      ) : (
        <Text style={styles.title}>No hay ordenes cargadas</Text>
      )}

      <View>
        <FlatList
          data={ordenes}
          renderItem={({ item }) => (
            <View style={styles.list}>
              <Text>{item.buyer}</Text>
              <Text>{item.date}</Text>
              <Text>${item.total}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
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
  detail: {
    fontSize: 18,
  },
});

export default ProductDetailScreen;
