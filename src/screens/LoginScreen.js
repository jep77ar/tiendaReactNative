import { useState } from "react";
import {
  KeyboardAvoidingView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { signIn } from "../app/services/authApi";
import { COLORS } from "../../constants/colors";

const AuthScreen = () => {
  const title = "LOGIN";
  const btnAction = "Ingresar";
  const message = "¿No tienes cuenta?";
  const messageAction = "Registrate";
  const messageTarget = "register";

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <KeyboardAvoidingView behavior="height" style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          secureTextEntry
          autoCapitalize="none"
          placeholder="Clave"
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity
          style={styles.btn}
          onPress={async () => {
            let resp = await signIn(email, password);
            console.log("signIn en screen", resp);
          }}
        >
          <Text style={styles.white}>{btnAction}</Text>
        </TouchableOpacity>

        <View style={styles.prompt}>
          <Text style={styles.promptMessage}>{message}</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Auth");
            }}
          >
            <Text style={styles.promptButtom}>{messageAction}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontFamily: "Georgia",
    marginBottom: 18,
    textAlign: "center",
  },
  container: {
    width: "80%",
    maxWidth: 400,
    padding: 12,
    margin: 12,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white",
  },
  prompt: {
    alignItems: "center",
  },
  promptMessage: {
    fontSize: 16,
    fontFamily: "OpenSans",
    color: "#333",
  },
  promptButtom: {
    fontSize: 16,
    fontFamily: "OpenSansBold",
    color: COLORS.primary,
  },
  buttom: {
    backgroundColor: COLORS.primary,
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  btn: {
    backgroundColor: COLORS.primary,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  white: {
    color: "white",
  },
});

export default AuthScreen;
