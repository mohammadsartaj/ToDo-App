import { useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/intro"); // go to intro after 2s
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 28, fontWeight: "700" }}>Todo App</Text>
      <ActivityIndicator size="large" style={{ marginTop: 20 }} />
    </View>
  );
}
