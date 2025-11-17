import { View } from "react-native";

import { PageHeader } from "@/components/PageHeader";
import { Input } from "@/components/Input";
import { Button } from "@/components/Buttom";
import { CurrencyInput } from "@/components/CurrencyInput";

const Target = () => {
  return (
    <View style={{ flex: 1, padding: 24 }}>
      <PageHeader
        title="Meta"
        subtitle="Economize para alcançar sua meta financeira"
        rightButton={{
          icon: "edit",
          onPress: () => {},
        }}
      />
      <View style={{ marginTop: 32, gap: 24 }}>
        <Input
          label="Nome da meta"
          placeholder="Ex: Viagem p/ praia, Apple Watch"
        />

        <CurrencyInput label="valor alvo" value={24000.73} />
        <Button title="Salvar" />
      </View>
    </View>
  );
};

export default Target;
