import { View, Text, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { router } from "expo-router";

export default function BuyerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleBusinessLogin = () => {
    // TODO: Replace with your API authentication check
    if (email === "test@buyer.com" && password === "123456") {
      router.replace("/buyer"); 
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>Buyer Login</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, padding: 12, marginBottom: 10, borderRadius: 6 }}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{ borderWidth: 1, padding: 12, marginBottom: 20, borderRadius: 6 }}
      />

      <Pressable
        onPress={handleBusinessLogin}
        style={{ backgroundColor: "#2563eb", padding: 14, borderRadius: 8 }}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontSize: 16 }}>
          Sign In
        </Text>
      </Pressable>
    </View>
  );
}