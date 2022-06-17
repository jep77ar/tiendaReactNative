import { FlatList } from "react-native";
import { BREADS } from "../../data/breads";
import ProductItem from "../components/ProductItem";

export default function CategoriesProductScreen({ navigation, route }) {
  const breads = BREADS.filter(
    (bread) => bread.category === route.params.categoryID
  );

  const handleSelected = (bread) => {
    console.log("bread selected: ", bread);
    navigation.navigate("Details", {
      productID: bread.id,
      name: bread.name,
      description: bread.description,
      price: bread.price,
      weight: bread.weight,
    });
  };

  const renderItem = ({ item }) => (
    <ProductItem item={item} onSelected={handleSelected} />
  );

  return (
    <FlatList
      data={breads}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
}
