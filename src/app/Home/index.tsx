import { useState } from "react"
import { View, Image, TouchableOpacity, Text, ScrollView, FlatList } from "react-native"

import { styles } from "./styles"

import { Button } from "@/Components/Button"
import { Input } from "@/Components/Input"
import { Filter } from "@/Components/Filter"
import { Item } from "@/Components/Item"

import { FilterStatus } from "@/Types/FilterStatus"

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE]

const ITEMS = [
  { id: "1", status: FilterStatus.DONE, description: "Cafe" },
  { id: "2", status: FilterStatus.PENDING, description: "Azucar" },
  { id: "3", status: FilterStatus.DONE, description: "Leche" },
]

export default function Home() {
  const [filter, setFilter] = useState(FilterStatus.PENDING)

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("@/assets/logo.png")} />

      <View style={styles.form}>
        <Input placeholder="O que vai comprar?" />
        <Button title="Entrar" />
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
          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={ITEMS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item
              data={item}
              onStatus={() => console.log("Change Status")}
              onRemove={() => console.log("Remove Item")}
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