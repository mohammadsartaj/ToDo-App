import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Intro2() {
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
        Track Your Progress 📊
      </Text>
      <Text style={{ fontSize: 16, textAlign: "center", marginBottom: 40 }}>
        Get insights and stay motivated as you complete tasks.
      </Text>
      <TouchableOpacity
        onPress={() => router.push("/intro/step3")}
        style={{
          backgroundColor: "#007AFF",
          paddingHorizontal: 20,
          paddingVertical: 12,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "600" }}>Next →</Text>
      </TouchableOpacity>
    </View>
  );
}
