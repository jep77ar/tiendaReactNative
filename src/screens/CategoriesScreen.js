import { FlatList } from "react-native";
import { CATEGORIES } from "../../data/categories";
import GridItem from "../components/GridItem";

export default function ({ navigation }) {
  const handleSelectedCategory = (category) => {
    console.log("onclick", category);
    navigation.navigate("Products", {
      categoryID: category.id,
      name: category.title,
    });
  };

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={({ item }) => (
        <GridItem item={item} onSelected={handleSelectedCategory} />
      )}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
}
