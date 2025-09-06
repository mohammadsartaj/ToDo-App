import { ColorScheme } from "@/hooks/useThem";
import { StyleSheet } from "react-native";

export const createHomeStyles = (colors: ColorScheme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.bg,
    },
    safeArea: {
      flex: 1,
    },

    // 🔹 Loading
    loadingContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    loadingText: {
      marginTop: 16,
      fontSize: 16,
      fontWeight: "600",
      color: colors.textMuted,
    },

    // 🔹 Header
    header: {
      paddingHorizontal: 20,
      paddingVertical: 24,
    },
    titleContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 16,
    },
    iconContainer: {
      width: 52,
      height: 52,
      borderRadius: 18,
      justifyContent: "center",
      alignItems: "center",
      marginRight: 14,
      backgroundColor: colors.surface,
      shadowColor: colors.shadow,
      shadowOpacity: 0.08,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
      elevation: 4,
    },
    titleTextContainer: {
      flex: 1,
    },
    title: {
      fontSize: 28,
      fontWeight: "700",
      letterSpacing: -0.5,
      marginBottom: 2,
      color: colors.text,
    },
    subtitle: {
      fontSize: 15,
      fontWeight: "500",
      color: colors.textMuted,
    },

    // 🔹 Progress
    progressContainer: {
      marginTop: 10,
    },
    progressBarContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    progressBar: {
      flex: 1,
      height: 10,
      borderRadius: 8,
      overflow: "hidden",
      backgroundColor: colors.border,
    },
    progressFill: {
      height: "100%",
      borderRadius: 8,
    },
    progressText: {
      fontSize: 14,
      fontWeight: "600",
      marginLeft: 12,
      color: colors.success,
    },

    // 🔹 Input Section
    inputSection: {
      paddingHorizontal: 20,
      paddingBottom: 16,
    },
    inputWrapper: {
      flexDirection: "row",
      alignItems: "flex-end",
    },
    input: {
      flex: 1,
      borderWidth: 1.5,
      borderRadius: 18,
      paddingHorizontal: 16,
      paddingVertical: 14,
      fontSize: 16,
      maxHeight: 120,
      fontWeight: "500",
      backgroundColor: colors.backgrounds.input,
      borderColor: colors.border,
      color: colors.text,
    },
    inputFocused: {
      borderColor: colors.primary,
    },
    addButton: {
      width: 52,
      height: 52,
      marginLeft: 12,
      borderRadius: 26,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.primary,
      shadowColor: colors.shadow,
      shadowOpacity: 0.2,
      shadowRadius: 6,
      elevation: 6,
    },
    addButtonDisabled: {
      opacity: 0.5,
    },

    // 🔹 Todo List
    todoList: {
      flex: 1,
    },
    todoListContent: {
      paddingHorizontal: 20,
      paddingBottom: 100,
    },
    todoItemWrapper: {
      marginVertical: 8,
    },
    todoItem: {
      flexDirection: "row",
      alignItems: "flex-start",
      padding: 16,
      borderRadius: 16,
      backgroundColor: colors.surface,
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 6,
      elevation: 4,
    },

    // 🔹 Checkbox
    checkbox: {
      marginRight: 14,
      marginTop: 2,
    },
    checkboxInner: {
      width: 28,
      height: 28,
      borderRadius: 14,
      borderWidth: 2,
      justifyContent: "center",
      alignItems: "center",
    },

    // 🔹 Todo Text
    todoTextContainer: {
      flex: 1,
    },
    todoText: {
      fontSize: 16,
      lineHeight: 22,
      fontWeight: "500",
      marginBottom: 12,
      color: colors.text,
    },

    // 🔹 Actions
    todoActions: {
      flexDirection: "row",
      gap: 10,
    },
    actionButton: {
      width: 36,
      height: 36,
      borderRadius: 18,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.surface,
      shadowColor: colors.shadow,
      shadowOpacity: 0.05,
      elevation: 2,
    },

    // 🔹 Edit Section
    editContainer: {
      flex: 1,
    },
    editInput: {
      borderWidth: 1.5,
      borderRadius: 14,
      paddingHorizontal: 14,
      paddingVertical: 12,
      fontSize: 16,
      fontWeight: "500",
      marginBottom: 14,
      backgroundColor: colors.backgrounds.editInput,
      borderColor: colors.primary,
      color: colors.text,
    },
    editButtons: {
      flexDirection: "row",
      gap: 10,
    },
    editButton: {
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
      paddingHorizontal: 14,
      paddingVertical: 10,
      borderRadius: 10,
      backgroundColor: colors.primary,
    },
    editButtonText: {
      color: "#ffffff",
      fontSize: 14,
      fontWeight: "600",
    },

    // 🔹 Empty State
    emptyContainer: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 60,
    },
    emptyIconContainer: {
      width: 100,
      height: 100,
      borderRadius: 50,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 20,
      backgroundColor: colors.surface,
      shadowColor: colors.shadow,
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 5,
    },
    emptyText: {
      fontSize: 20,
      fontWeight: "700",
      marginBottom: 6,
      color: colors.text,
    },
    emptySubtext: {
      fontSize: 15,
      textAlign: "center",
      paddingHorizontal: 32,
      lineHeight: 22,
      color: colors.textMuted,
    },
  });

  return styles;
};
