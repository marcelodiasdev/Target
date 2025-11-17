import { colors } from "@/theme";
import { View, TextInput, TextInputProps, Text } from "react-native";
import { styles } from "./styles";

type Props = TextInputProps & {
  label: string;
};

export const Input = ({ label, ...rest }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}> {label}</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor={colors.gray[400]}
        {...rest}
      />
    </View>
  );
};
