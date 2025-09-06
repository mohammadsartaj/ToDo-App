import { ThemeProvider } from "@/hooks/useThem";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Stack } from "expo-router";
import React from "react";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

export default function RootLayout() {
  return (
    <ConvexProvider client={convex}>
      <ThemeProvider>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
          >
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="splash" />
              <Stack.Screen name="intro/index" />
              <Stack.Screen name="intro/step2" />
              <Stack.Screen name="intro/step3" />
              <Stack.Screen name="(tabs)" />
            </Stack>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </ThemeProvider>
    </ConvexProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
