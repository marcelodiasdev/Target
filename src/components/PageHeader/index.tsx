import { router } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "@/theme";

import { styles } from "./styles";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  rightButton?: {
    onPress: () => void;
    icon: keyof typeof MaterialIcons.glyphMap;
  };
};

export const PageHeader = ({
  title,
  subtitle,
  rightButton,
}: PageHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32} color={colors.black} />
        </TouchableOpacity>
        {rightButton && (
          <TouchableOpacity onPress={rightButton.onPress}>
            <MaterialIcons
              name={rightButton.icon}
              size={34}
              color={colors.gray[500]}
            />
          </TouchableOpacity>
        )}
      </View>

      <Text style={styles.title}> {title}</Text>
      {subtitle && <Text style={styles.subtitle}> {subtitle} </Text>}
    </View>
  );
};
