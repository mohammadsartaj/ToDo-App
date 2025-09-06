import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Intro3() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "600", marginBottom: 10 }}>
        Stay Focused ✨
      </Text>
      <Text style={{ fontSize: 16, textAlign: "center", marginBottom: 40 }}>
        Manage todos anywhere, anytime with your phone.
      </Text>
      <TouchableOpacity
        onPress={() => router.replace("/(tabs)")}
        style={{
          backgroundColor: "#007AFF",
          paddingHorizontal: 20,
          paddingVertical: 12,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "600" }}>Get Started →</Text>
      </TouchableOpacity>
    </View>
  );
}
