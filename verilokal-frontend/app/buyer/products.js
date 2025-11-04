import { Text, StyleSheet, Image, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function ProductDetails() {
  const { id } = useLocalSearchParams();

  // Temporary langs
  const products = {
    "1": {
      name: "Pine Wood Carving",
      type: "Woodcraft",
      origin: "Baguio City",
      date: "2025-01-12",
      description: "Hand-carved pinewood sculpture.",
      image: require("../../assets/products/pinecarving.jpg"),
      verified: true
    },
    "2": {
      name: "Inabel Woven Scarf",
      type: "Textile",
      origin: "La Union",
      date: "2025-01-15",
      description: "Traditional Ilocano Inabel scarf.",
      image: require("../../assets/products/inabel.webp"),
      verified: true
    },
  };

  const product = products[id];

  if (!product) {
    return <Text style={styles.notFound}>❌ Product not found!</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={product.image} style={styles.image} />

      <Text style={styles.name}>{product.name}</Text>
      <Text>Type: {product.type}</Text>
      <Text>Origin: {product.origin}</Text>
      <Text>Production Date: {product.date}</Text>

      <Text style={styles.sectionTitle}>Description</Text>
      <Text>{product.description}</Text>
      
      <Text style={styles.verified}>
        ✅ Verified Product — Blockchain Secured
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#fff" },
  image: { width: "100%", height: 250, borderRadius: 12, marginBottom: 15 },
  name: { fontSize: 22, fontWeight: "bold", marginBottom: 6 },
  sectionTitle: { marginTop: 10, fontWeight: "bold" },
  verified: { marginTop: 12, fontWeight: "bold", color: "green" },
  notFound: { textAlign: "center", marginTop: 100, fontSize: 18 }
});
