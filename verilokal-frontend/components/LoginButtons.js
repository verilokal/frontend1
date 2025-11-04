import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function LoginButtons() {
  const router = useRouter();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
        marginTop: 40,
      }}
    >
      {/* Login as Buyer */}
      <TouchableOpacity
        onPress={() => router.push("/login-buyer")}
        style={{
          backgroundColor: "#38bdf8",
          paddingVertical: 12,
          paddingHorizontal: 24,
          borderRadius: 8,
          shadowColor: "#000",
          shadowOpacity: 0.2,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 3,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          Login as Buyer
        </Text>
      </TouchableOpacity>

      {/* Login as Business */}
      <TouchableOpacity
        onPress={() => router.push("/login-business")}
        style={{
          backgroundColor: "#1e293b",
          paddingVertical: 12,
          paddingHorizontal: 24,
          borderRadius: 8,
          shadowColor: "#000",
          shadowOpacity: 0.2,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 3,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          Login as Business
        </Text>
      </TouchableOpacity>
    </View>

    
  );
}
