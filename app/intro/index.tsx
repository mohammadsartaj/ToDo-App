import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Intro1() {
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
        Welcome to Todo App ✅
      </Text>
      <Text style={{ fontSize: 16, textAlign: "center", marginBottom: 40 }}>
        Organize your tasks and boost productivity.
      </Text>
      <TouchableOpacity
        onPress={() => router.push("/intro/step2")}
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
