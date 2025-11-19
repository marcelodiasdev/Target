import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View, Alert, StatusBar } from "react-native";

import { PageHeader } from "@/components/PageHeader";
import { Input } from "@/components/Input";
import { Button } from "@/components/Buttom";
import { CurrencyInput } from "@/components/CurrencyInput";
import { useTargetDatabase } from "@/database/useTargetDatabase";

const Target = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  const params = useLocalSearchParams<{ id?: string }>();

  const handleAmountChange = (value: number | null) => {
    const safeValue = value === null ? 0 : value;
    setAmount(safeValue);
  };

  const targetDatabase = useTargetDatabase();

  async function create() {
    try {
      await targetDatabase.create({ name, amount });

      Alert.alert("Nova meta", "Meta criada com sucesso!", [
        {
          text: "OK",
          onPress: () => router.back(),
        },
      ]);
    } catch (error) {
      Alert.alert("Error", "Não foi possível criar a meta.");
      console.error(error);
      setIsProcessing(false);
    }
  }

  function handleSave() {
    if (!name.trim() || amount <= 0) {
      return Alert.alert(
        "Atenção",
        "Preencha nome e valor precisa ser maior que zero"
      );
    }

    setIsProcessing(true);

    if (params.id) {
      update();
    } else {
      create();
    }
  }

  async function update() {
    try {
      await targetDatabase.update({ id: Number(params.id), name, amount });
      Alert.alert("Sucesso!", "Meta atualizada com sucesso!", [
        {
          text: "Ok",
          onPress: router.back,
        },
      ]);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível atualizar a meta.");
      console.log(error);
      setIsProcessing(false);
    }
  }

  async function fetchDetails(id: number) {
    try {
      const response = await targetDatabase.show(id);

      setName(response.name);
      setAmount(response.amount);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar os detalhes da meta");
      console.error(error);
    }
  }

  function handleRemove() {
    if (!params.id) {
      return;
    }

    async function remove() {
      try {
        setIsProcessing(true);

        await targetDatabase.remove(Number(params.id));
        Alert.alert("Meta", "Meta removida!", [
          { text: "Ok", onPress: () => router.replace("/") },
        ]);
      } catch (error) {
        Alert.alert("Erro", "Não foi possível remover a meta.");
        console.log(error);
      }
    }

    Alert.alert("Remover", "Deseja realemente remover?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: remove },
    ]);
  }

  useEffect(() => {
    if (params.id) {
      fetchDetails(Number(params.id));
    }
  }, [params.id]);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <PageHeader
        title="Meta"
        subtitle="Economize para alcançar sua meta financeira"
        rightButton={
          params.id ? { icon: "delete", onPress: handleRemove } : undefined
        }
      />
      <View style={{ marginTop: 32, gap: 24 }}>
        <StatusBar barStyle="dark-content" />
        <Input
          label="Nome da meta"
          placeholder="Ex: Viagem p/ praia, Apple Watch"
          onChangeText={setName}
          value={name}
        />

        <CurrencyInput
          label="valor alvo (R$)"
          value={amount}
          onChangeValue={handleAmountChange}
        />
        <Button
          title="Salvar"
          onPress={handleSave}
          isProcessing={isProcessing}
        />
      </View>
    </View>
  );
};

export default Target;
