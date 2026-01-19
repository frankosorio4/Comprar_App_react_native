import { View, Image } from "react-native"
import { styles } from "./styles"
import { Button } from "@/Components/Button"
import { Input } from "@/Components/Input"

export default function Home() {

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("@/assets/logo.png")} />

      <View style={styles.form}>
        <Input placeholder="O que vai comprar?" />
        <Button title="Entrar" />
      </View>

      <View style={styles.content}>

      </View>
    </View>
  )
}
