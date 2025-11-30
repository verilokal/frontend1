import axios from "axios";
import { useEffect, useState } from "react";
import {
  Alert,
  Dimensions,
  Image,
  Modal,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function AdminDashboard() {
  const [pendingBusinesses, setPendingBusinesses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const serverUrl = "http://localhost:3000"; // change if deployed

  // Load pending businesses
  const loadBusinesses = async () => {
    try {
      const res = await axios.get(`${serverUrl}/api/admin/pending-businesses`);
      setPendingBusinesses(res.data);
    } catch (error) {
      Alert.alert("Error", "Failed to load businesses");
      console.error(error);
    }
  };

  useEffect(() => {
    loadBusinesses();
  }, []);

  // Verify handler
  const handleVerify = async (id) => {
    try {
      await axios.put(`${serverUrl}/api/admin/verify/${id}`);
      Alert.alert("Success", "Business verified!");
      setPendingBusinesses((prev) => prev.filter((b) => b.id !== id));
    } catch (error) {
      Alert.alert("Error", "Verification failed");
      console.error(error);
    }
  };

  // Show image modal
  const showImage = (imgPath) => {
    if (!imgPath) return;
    const fullUrl = `${serverUrl}/${imgPath}`; // prepend server URL
    setCurrentImage(fullUrl);
    setShowModal(true);
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#f7f7f7" }}>
      <Text style={{ fontSize: 28, fontWeight: "700", marginBottom: 20 }}>
        Admin Dashboard
      </Text>

      <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 10 }}>
        Pending Business Accounts
      </Text>

      <ScrollView horizontal style={{ marginTop: 10 }}>
        <View>
          {/* Table Header */}
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#e0e0e0",
              paddingVertical: 10,
              paddingHorizontal: 5,
              minWidth: 1200,
            }}
          >
            <Text style={{ flex: 1, fontWeight: "700" }}>Name</Text>
            <Text style={{ flex: 1, fontWeight: "700" }}>Address</Text>
            <Text style={{ flex: 1, fontWeight: "700" }}>Registered Name</Text>
            <Text style={{ flex: 2, fontWeight: "700" }}>Description</Text>
            <Text style={{ flex: 1, fontWeight: "700", textAlign: "center" }}>
              Product Image
            </Text>
            <Text style={{ flex: 1, fontWeight: "700", textAlign: "center" }}>
              Certificates
            </Text>
            <Text style={{ flex: 1, fontWeight: "700", textAlign: "center" }}>
              Logo
            </Text>
            <Text style={{ flex: 1, fontWeight: "700" }}>Contact No</Text>
            <Text style={{ flex: 0.8, fontWeight: "700", textAlign: "center" }}>
              Action
            </Text>
          </View>

          {/* Table Rows */}
          {pendingBusinesses.length === 0 ? (
            <Text style={{ fontSize: 16, color: "#888", marginTop: 10 }}>
              No pending businesses
            </Text>
          ) : (
            pendingBusinesses.map((b) => (
              <View
                key={b.id}
                style={{
                  flexDirection: "row",
                  paddingVertical: 12,
                  paddingHorizontal: 5,
                  borderBottomWidth: 1,
                  borderBottomColor: "#eee",
                  alignItems: "center",
                  minWidth: 1200,
                  backgroundColor: "#fff",
                }}
              >
                <Text style={{ flex: 1 }}>{b.name}</Text>
                <Text style={{ flex: 1 }}>{b.address}</Text>
                <Text style={{ flex: 1 }}>{b.registered_business_name}</Text>
                <Text style={{ flex: 2 }}>{b.description}</Text>

                {/* Product Image */}
                <View style={{ flex: 1, alignItems: "center" }}>
                  {b.product_img ? (
                    <TouchableOpacity
                      onPress={() => showImage(b.product_img)}
                      style={{
                        backgroundColor: "#4CAF50",
                        paddingVertical: 4,
                        paddingHorizontal: 6,
                        borderRadius: 4,
                      }}
                    >
                      <Text style={{ color: "#fff", fontWeight: "700" }}>
                        Show
                      </Text>
                    </TouchableOpacity>
                  ) : (
                    <Text>-</Text>
                  )}
                </View>

                {/* Certificates */}
                <View style={{ flex: 1, alignItems: "center" }}>
                  {b.certificates ? (
                    <TouchableOpacity
                      onPress={() => showImage(b.certificates)}
                      style={{
                        backgroundColor: "#4CAF50",
                        paddingVertical: 4,
                        paddingHorizontal: 6,
                        borderRadius: 4,
                      }}
                    >
                      <Text style={{ color: "#fff", fontWeight: "700" }}>
                        Show
                      </Text>
                    </TouchableOpacity>
                  ) : (
                    <Text>-</Text>
                  )}
                </View>

                {/* Logo */}
                <View style={{ flex: 1, alignItems: "center" }}>
                  {b.logo ? (
                    <TouchableOpacity
                      onPress={() => showImage(b.logo)}
                      style={{
                        backgroundColor: "#4CAF50",
                        paddingVertical: 4,
                        paddingHorizontal: 6,
                        borderRadius: 4,
                      }}
                    >
                      <Text style={{ color: "#fff", fontWeight: "700" }}>
                        Show
                      </Text>
                    </TouchableOpacity>
                  ) : (
                    <Text>-</Text>
                  )}
                </View>

                <Text style={{ flex: 1 }}>{b.contact_no}</Text>

                {/* Verify button */}
                <TouchableOpacity
                  onPress={() => handleVerify(b.id)}
                  style={{
                    flex: 0.8,
                    backgroundColor: "#FF8C00",
                    paddingVertical: 6,
                    borderRadius: 6,
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "#fff", fontWeight: "700" }}>Verify</Text>
                </TouchableOpacity>
              </View>
            ))
          )}
        </View>
      </ScrollView>

      {/* Image Modal */}
      <Modal visible={showModal} transparent={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.8)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={{ uri: currentImage }}
            style={{
              width: Dimensions.get("window").width * 0.8,
              height: Dimensions.get("window").height * 0.6,
              resizeMode: "contain",
            }}
          />
          <Pressable
            onPress={() => setShowModal(false)}
            style={{
              marginTop: 20,
              paddingVertical: 10,
              paddingHorizontal: 20,
              backgroundColor: "#FF4444",
              borderRadius: 6,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "700" }}>Close</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
}
