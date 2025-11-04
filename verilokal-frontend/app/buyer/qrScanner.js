import { View, Text, StyleSheet, Pressable } from "react-native";
import { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { router } from "expo-router";

export default function ScanQR() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleScan = ({ data }) => {
    setScanned(true);

    // ✅ data could be just product ID or full URL
    let productId = data;

    // If backend sends full URL e.g. https://api.verilokal.com/product/123
    if (data.startsWith("http")) {
      productId = data.split("/").pop();
    }

    // Navigate to product details page
    router.push(`/buyer/product?id=${productId}`);
  };

  if (hasPermission === null) {
    return <Text style={styles.centerText}>Requesting camera permission...</Text>;
  }
  if (hasPermission === false) {
    return <Text style={styles.centerText}>No camera access.</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan Product QR Code</Text>

      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleScan}
        style={styles.scanner}
      />

      {scanned && (
        <Pressable style={styles.button} onPress={() => setScanned(false)}>
          <Text style={styles.buttonText}>Scan Again</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 12, textAlign: "center" },
  scanner: { flex: 1, borderRadius: 16, overflow: "hidden" },
  button: {
    backgroundColor: "#000",
    padding: 14,
    borderRadius: 8,
    marginTop: 15,
  },
  buttonText: { color: "#fff", fontWeight: "600", textAlign: "center" },
  centerText: { flex: 1, textAlign: "center", marginTop: 100, fontSize: 18 },
});
