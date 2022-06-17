import { StyleSheet, View, Text } from "react-native";

const ProductDetailScreen = ({ route }) => {
  const bread = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}> {bread.name}</Text>
      <Text> {bread.description}</Text>
      <Text> {bread.price}</Text>
      <Text> {bread.weight}</Text>
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
