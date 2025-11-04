import { View, Text} from "react-native";
import LoginButtons from "../components/LoginButtons";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f8fafc",
        alignItems: "center",
        paddingTop: 100,
        paddingHorizontal: 20,
      }}
    >
      {/* Headline */}
      <Text
        style={{
          fontSize: 70,
          fontWeight: "bold",
          textAlign: "center",
          color: "#0f172a",
          marginBottom: 12,
        }}
      >
        Verilokal
      </Text>
      {/* Headline */}
      <Text
        style={{
          fontSize: 32,
          fontWeight: "bold",
          textAlign: "center",
          color: "#0f172a",
          marginBottom: 12,
        }}
      >
        Authenticate Local Products
      </Text>

      {/* Subtext */}
      <Text
        style={{
          fontSize: 16,
          textAlign: "center",
          color: "#475569",
          maxWidth: 500,
          lineHeight: 22,
        }}
      >
        Ensuring genuine Filipino craftsmanship through secure QR verification
        and blockchain technology — protecting artisans and empowering buyers.
      </Text>

      {/* CTA Button */}
      <LoginButtons />

      {/* Trusted Tag */}
      <Text
        style={{
          marginTop: 20,
          fontSize: 14,
          color: "#64748b",
          fontStyle: "italic",
        }}
      >
        Preserving what is true, empowering what is ours.
      </Text>
    </View>
  );
}