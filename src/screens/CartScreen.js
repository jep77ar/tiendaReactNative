import { StyleSheet, View, Text } from "react-native";

const ProductDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Text>El carrito está vacío</Text>
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
    fontFamily: "fantasy",
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default ProductDetailScreen;
