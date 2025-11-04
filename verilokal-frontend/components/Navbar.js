import { View, Text, TouchableOpacity } from "react-native";
import { useRouter, usePathname } from "expo-router";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const links = [
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
    { name: "Products", route: "/products" },
    { name: "Contact", route: "/contact" },
  ];

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#1e293b",
        paddingHorizontal: 20,
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderColor: "#0f172a",
      }}
    >
      {/* App Title */}
      <Text
        style={{
          color: "#fff",
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        VeriLokal
      </Text>

      {/* Nav Links */}
      <View style={{ flexDirection: "row", gap: 24 }}>
        {links.map((link) => (
          <TouchableOpacity
            key={link.route}
            onPress={() => router.push(link.route)}
          >
            <Text
              style={{
                color: pathname === link.route ? "#38bdf8" : "#e2e8f0",
                fontWeight: pathname === link.route ? "bold" : "500",
                fontSize: 16,
              }}
            >
              {link.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
