import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import { useState } from "react";
import { router } from "expo-router";

export default function RegisterProduct() {
  const [productName, setProductName] = useState("");
  const [type, setType] = useState("");
  const [materials, setQuantity] = useState("");
  const [origin, setOrigin] = useState("");
  const [productionDate, setProductionDate] = useState("");
  const [description, setDescription] = useState("");
  const [certificate, setCertificate] = useState(null); // placeholder

  const handleSubmit = () => {
    const productData = {
      productName,
      type,
      materials,
      origin,
      productionDate,
      description,
      certificate,
    };

    console.log("Product submitted:", productData);
    alert("✅ Product registered successfully!");

    // TODO: Send this to backend/blockchain later

    router.push("/business");
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20, fontWeight: "bold" }}>
        Register Product
      </Text>

      {/* Product Name */}
      <TextInput
        placeholder="Product Name"
        value={productName}
        onChangeText={setProductName}
        style={inputStyle}
      />

      {/* Type */}
      <TextInput
        placeholder="Product Type (ex: Woodcraft, Textile)"
        value={type}
        onChangeText={setType}
        style={inputStyle}
      />

      {/* Materials */}
      <TextInput
        placeholder="Materials used"
        value={materials}
        onChangeText={setQuantity}
        keyboardType="numeric"
        style={inputStyle}
      />

      {/* Origin */}
      <TextInput
        placeholder="Origin (ex: Baguio, La Union)"
        value={origin}
        onChangeText={setOrigin}
        style={inputStyle}
      />

      {/* Production Date */}
      <TextInput
        placeholder="Production Date (YYYY-MM-DD)"
        value={productionDate}
        onChangeText={setProductionDate}
        style={inputStyle}
      />

      {/* Description */}
      <TextInput
        placeholder="Description (product details, artisan info, etc.)"
        value={description}
        onChangeText={setDescription}
        multiline
        style={[inputStyle, { height: 100 }]}
      />

      {/* Certificates Section */}
        <View style={{
        borderWidth: 1,
        borderColor: "#ddd",
        padding: 20,
        borderRadius: 12,
        marginBottom: 20,
        backgroundColor: "#fff"
        }}>
        <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 6, textAlign: "center" }}>
            Certificates and Registrations
        </Text>
        <Text style={{ color: "#555", marginBottom: 16, textAlign: "center" }}>
            Upload your product certificates and government registrations for verification
        </Text>

        {/* Upload Box */}
        <Pressable
            onPress={() => {
            setCertificate("FairTrade_License.docx"); 
            alert("📎 Certificate attached (mock)");
            }}
            style={{
            borderWidth: 1.5,
            borderStyle: "dashed",
            borderColor: "#999",
            borderRadius: 10,
            paddingVertical: 30,
            alignItems: "center",
            marginBottom: 18,
            backgroundColor: "#fafafa",
            }}
        >
            <Text style={{ fontSize: 32, marginBottom: 8 }}>📄</Text>
            <Text style={{ fontSize: 16, fontWeight: "600", color: "#444" }}>
            Upload Certificate Documents
            </Text>
            <Text style={{ color: "#777", fontSize: 13, marginTop: 4 }}>
            PDF, DOCX, up to 10MB
            </Text>
        </Pressable>

        {/* File Preview */}
        {certificate && (
            <>
            <Text style={{ fontWeight: "600", marginBottom: 8 }}>
                Uploaded Documents
            </Text>

            <View style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#f4f4f4",
                padding: 12,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "#ddd",
                justifyContent: "space-between"
            }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontSize: 24, marginRight: 10 }}>📄</Text>
                <View>
                    <Text style={{ fontWeight: "500" }}>{certificate}</Text>
                    <Text style={{ fontSize: 12, color: "#555" }}>0.5 MB</Text>
                </View>
                </View>

                <Pressable
                onPress={() => setCertificate(null)}
                style={{
                    backgroundColor: "#ff4d4f",
                    width: 28,
                    height: 28,
                    borderRadius: 50,
                    alignItems: "center",
                    justifyContent: "center"
                }}
                >
                <Text style={{ color: "#fff", fontWeight: "bold" }}>X</Text>
                </Pressable>
            </View>
            </>
        )}
        </View>
        {/* Submit Button */}
        <Pressable
        onPress={handleSubmit}
        style={{
            backgroundColor: "#0A84FF",
            paddingVertical: 14,
            borderRadius: 10,
            alignItems: "center",
            marginTop: 10
        }}
        >
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}>
            Submit Product
        </Text>
        </Pressable>
    </ScrollView>
  );
}

const inputStyle = {
  borderWidth: 1,
  borderColor: "#ccc",
  padding: 12,
  borderRadius: 8,
  marginBottom: 12,
  backgroundColor: "#fff",
};


