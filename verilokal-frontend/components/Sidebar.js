// components/Sidebar.js
import { Home, UserPlus } from "lucide-react"; // icons for web
import { Pressable, Text, View } from "react-native";

export default function Sidebar({ router }) {
  return (
    <View style={styles.sidebar}>
      <Text style={styles.title}>Dashboard</Text>

      <Pressable
        style={styles.button}
        onPress={() => router.push("/business")}
      >
        <Home size={18} style={styles.icon} />
        <Text style={styles.buttonText}>Home</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => router.push("/business/productRegistration")}
      >
        <UserPlus size={18} style={styles.icon} />
        <Text style={styles.buttonText}>Register</Text>
      </Pressable>
    </View>
  );
}

const styles = {
  sidebar: {
    width: 200,
    height: "100vh",
    backgroundColor: "#1f2937",
    paddingTop: 30,
    paddingHorizontal: 15,
    position: "fixed",
    left: 0,
    top: 0,
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  title: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "700",
    marginBottom: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 8,
    backgroundColor: "#374151",
  },
  buttonText: {
    color: "#fff",
    marginLeft: 8,
    fontWeight: "600",
  },
  icon: {
    color: "#fff",
  },
};
