import { View, Text, FlatList, Pressable, StyleSheet, Modal, Image } from "react-native";
import { useState } from "react";
import { router } from "expo-router";

export default function BusinessDashboard() {
  const [products] = useState([
    {
      id: "1",
      name: "Pine Wood Carving",
      type: "Woodcraft",
      materials: "Wood",
      origin: "Baguio City",
      productionDate: "2025-01-12",
      description: "Hand-carved pinewood sculpture made by local artisans.",
      certificate: "FairTrade_License.pdf",
      image: require("../../assets/products/pinecarving.jpg"),
    },
    {
      id: "2",
      name: "Inabel Woven Scarf",
      type: "Textile",
      materials: "Textile yes",
      origin: "La Union",
      productionDate: "2025-01-15",
      description: "Traditional Ilocano Inabel scarf handcrafted in La Union.",
      certificate: "DTI_Registration.pdf",
      image: require("../../assets/products/inabel.webp"),
    },
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Business Dashboard</Text>
      <Text style={styles.subTitle}>Registered Products</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Pressable onPress={() => openModal(item)}>
              <Text style={styles.productName}>{item.name}</Text>
            </Pressable>
          </View>
        )}
      />

      <Pressable
        style={styles.button}
        onPress={() => router.push("/business/productRegistration")}
      >
        <Text style={styles.buttonText}>+ Register New Product</Text>
      </Pressable>

      {/* ✅ Modal */}
      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedProduct && (
              <>
                {/* Product Image */}
                <Image source={selectedProduct.image} style={styles.modalImage} />

                <Text style={styles.modalTitle}>{selectedProduct.name}</Text>
                <Text>Type: {selectedProduct.type}</Text>
                <Text>Materials: {selectedProduct.materials}</Text>
                <Text>Origin: {selectedProduct.origin}</Text>
                <Text>Production Date: {selectedProduct.productionDate}</Text>
                <Text style={{ marginTop: 8, fontWeight: "600" }}>Description:</Text>
                <Text>{selectedProduct.description}</Text>

                <Text style={{ marginTop: 8, fontWeight: "600" }}>Certificate:</Text>
                <Text>{selectedProduct.certificate}</Text>

                <View style={styles.qrContainer}>
                  <View style={styles.qrPlaceholder} />
                  <Text style={styles.qrLabel}>Product QR Code</Text>
                </View>

                <Pressable
                  style={styles.closeButton}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.closeButtonText}>Close</Text>
                </Pressable>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: "#f9f9f9" 
  },
  title: { 
    fontSize: 26, 
    fontWeight: "bold", 
    marginBottom: 10 
  },
  subTitle: { 
    fontSize: 18, 
    fontWeight: "600", 
    marginBottom: 12 

  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  productName: { 
    fontSize: 17, 
    fontWeight: "bold", 
    marginBottom: 6, 
    color: "#0066cc" 
  },
  thumbnail: {
    width: "100%",
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#000",
    padding: 14,
    borderRadius: 8,
    marginTop: 18,
  },
  buttonText: { 
    color: "#fff", 
    textAlign: "center", 
    fontWeight: "600" 
  },
  modalOverlay: {
    flex: 1, 
    backgroundColor: "rgba(0,0,0,0.5)", 
    justifyContent: "center", 
    padding: 20,
  },
  modalContent: { 
    backgroundColor: "#fff", 
    padding: 20, 
    borderRadius: 10, 
    alignItems: "center",
  },
  modalImage: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginBottom: 10,
  },
  modalTitle: { 
    fontSize: 22, 
    fontWeight: "bold", 
    marginBottom: 10 
  },

  qrContainer: {
  marginTop: 18,
  alignItems: "center",
},
  qrPlaceholder: {
  width: 140,
  height: 140,
  backgroundColor: "#eaeaea",
  borderRadius: 8,
  borderWidth: 1,
  borderColor: "#ccc",
},

  qrLabel: {
  marginTop: 8,
  fontWeight: "600",
  color: "#444",
},
  closeButton: { 
    backgroundColor: "#000", 
    padding: 12, 
    borderRadius: 8, 
    marginTop: 15 
  },
  closeButtonText: { 
    color: "#fff", 
    textAlign: "center", 
    fontWeight: "600" },
});
/*
*/ 