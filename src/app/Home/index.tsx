import { View, Image, TouchableOpacity, Text, ScrollView, FlatList } from "react-native"

import { styles } from "./styles"

import { Button } from "@/Components/Button"
import { Input } from "@/Components/Input"
import { Filter } from "@/Components/Filter"
import { Item } from "@/Components/Item"

import { FilterStatus } from "@/Types/FilterStatus"

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE]

const ITEMS = Array.from({ length: 100 }).map((_, index) => String(index))

export default function Home() {

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
              <Filter key={status} status={status} isActive={false} />
            ))
          }
          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={ITEMS}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Item
              data={{ status: FilterStatus.DONE, description: item }}
              onStatus={() => console.log("Change Status")}
              onRemove={() => console.log("Remove Item")}
            />
          )}
        />
      </View>
    </View>
  )
}