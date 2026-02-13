import { useState, useEffect } from "react"
import { View, Image, TouchableOpacity, Text, ScrollView, FlatList, Alert, Keyboard } from "react-native"

import { styles } from "./styles"

import { Button } from "@/Components/Button"
import { Input } from "@/Components/Input"
import { Filter } from "@/Components/Filter"
import { Item } from "@/Components/Item"

import { FilterStatus } from "@/Types/FilterStatus"
import { ItemStorage, itemsStorage } from "@/storage/itemStorage"

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE]

export default function Home() {
  const [filter, setFilter] = useState(FilterStatus.PENDING)
  const [description, setDescription] = useState("")
  const [items, setItems] = useState<ItemStorage[]>([])

  async function handleAddItem() {
    if (!description.trim()) {
      return Alert.alert("Add", "Inform the description of the item")
    }

    const newItem = {
      id: Math.random().toString(36).substring(2),
      description,
      status: FilterStatus.PENDING,
    }

    await itemsStorage.addItem(newItem)
    await itemsByStatus()// to update when add item in pending tap

    setFilter(FilterStatus.PENDING) // to update when add item in bought tap
    Keyboard.dismiss()
    Alert.alert("Added", `"${description}" added successfully`)
    setDescription("")
  }

  async function itemsByStatus() {
    try {
      const response = await itemsStorage.getByStatus(filter);
      setItems(response);
      console.log("function getItems byStatus")
    } catch (error) {
      console.log(error)
      Alert.alert("Erro", "Não foi possível carregar a lista.")
    }
  }

  async function deleteItem(id: string) {
    try {
      await itemsStorage.removeItem(id);
      await itemsByStatus();
      // setItems((oldItems) => oldItems.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error)
      Alert.alert("Erro", "Não foi possível remover o item.")
      throw new Error("REMOVE:ITEM: " + error)
    }
  }

  async function clearItems() {
    try {
      Alert.alert("Limpar", "Deseja remover todas os itens?", [
        {
          text: "Sim",
          onPress: async () => {
            await itemsStorage.clearItems();
            setItems([]);
          }
        },
        {
          text: "Não",
          style: "cancel",
          onPress: () => { console.log("Limpar cancelado") }
        }
      ])
    } catch (error) {
      console.log("Nao foi possivel limpar a lista.")
      throw new Error("CLEAR:ITEMS: " + error)
    }
  }

  async function changeStatus(id: string) {
    const newStatus = await itemsStorage.toogleStatus(id);
    if (!newStatus) {
      Alert.alert("Erro", "Não foi possível alterar o status do item.");
      return
    }
    await itemsByStatus();
    // setFilter(newStatus)// if we want to update the tap when change status
  }

  useEffect(() => {
    itemsByStatus();
  }, [filter])

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("@/assets/logo.png")} />

      <View style={styles.form}>
        <Input
          placeholder="O que vai comprar?"
          onChangeText={setDescription}
          value={description}
        />
        <Button title="Add" onPress={handleAddItem} />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {
            FILTER_STATUS.map((status) => (
              <Filter
                key={status}
                status={status}
                isActive={status === filter}
                onPress={() => setFilter(status)}
              />
            ))
          }
          <TouchableOpacity
            style={styles.clearButton}
            onPress={clearItems}
          >
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item
              data={item}
              onStatus={() => {
                console.log("Change Status")
                changeStatus(item.id)
              }}
              onRemove={() => {
                deleteItem(item.id);
                console.log("Remove Item");
              }}
            />
          )}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={() => (<Text style={styles.emptyListText}>Lista Vazia</Text>)}
        />
      </View>
    </View>
  )
}