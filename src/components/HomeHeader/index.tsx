import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import { colors } from "@/theme/colors";
import { Separator } from "../Separator";
import { Summary, SummaryProps } from "../Summary";

export type HomeHeaderProps = {
  total: string;
  input: SummaryProps;
  output: SummaryProps;
};

type Props = {
  data: HomeHeaderProps;
};

const HomeHeader = ({ data }: Props) => {
  return (
    <LinearGradient
      colors={[colors.babyBlue[500], colors.babyBlue[700]]}
      style={styles.container}
    >
      <View>
        <Text style={styles.label}>Total que você possui</Text>
        <Text style={styles.total}>{data.total}</Text>
      </View>
      <Separator color={colors.blue[400]} />
      <View style={styles.summary}>
        <Summary
          data={data.input}
          icon={{ name: "arrow-upward", color: colors.green[500] }}
        />
        <Summary
          isRight
          data={data.output}
          icon={{ name: "arrow-downward", color: colors.red[300] }}
        />
      </View>
    </LinearGradient>
  );
};

export default HomeHeader;
