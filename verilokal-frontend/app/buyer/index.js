import { View, Text, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function BuyerHome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buyer Dashboard</Text>
      <Text style={styles.subtitle}>Verify Product Authenticity</Text>

      {/* Button to open QR Scanner */}
      <Pressable
        style={styles.scanButton}
        onPress={() => router.push("/buyer/qrScanner")}
      >
        <Text style={styles.scanButtonText}>Scan QR Code</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 30,
  },
  scanButton: {
    backgroundColor: "#000",
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  scanButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
