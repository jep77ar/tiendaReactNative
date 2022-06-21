import { View, Text } from "react-native";

const Details = ({ navigation, route }) => {
  return (
    <View>
      <Text>Details {route.params.id.description}</Text>
    </View>
  );
};

export default Details;
