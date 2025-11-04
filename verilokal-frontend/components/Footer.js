import { View, Text, Linking, TouchableOpacity } from "react-native";

export default function Footer() {
  return (
    <View
      style={{
        backgroundColor: "#1e293b", // dark slate blue
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderColor: "#0f172a",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          color: "#e2e8f0",
          fontSize: 14,
          marginBottom: 8,
        }}
      >
        © {new Date().getFullYear()} VeriLokal
      </Text>

      <View style={{ flexDirection: "row", gap: 16 }}>
        <TouchableOpacity onPress={() => Linking.openURL("https://facebook.com")}>
          <Text style={{ color: "#38bdf8", fontSize: 14 }}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL("https://instagram.com")}>
          <Text style={{ color: "#38bdf8", fontSize: 14 }}>Instagram</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL("mailto:support@woodcraft.com")}>
          <Text style={{ color: "#38bdf8", fontSize: 14 }}>Email Us</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
