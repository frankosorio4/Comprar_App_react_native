import { View, Image } from "react-native"
import { styles } from "./styles"
import { Button } from "@/Components/Button"
import { Input } from "@/Components/Input"

export default function Home() {

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("@/assets/logo.png")} />

      <Input placeholder="O que vai comprar?" />

      <Button title="Entrar" />
      {/* <Button
        title="Voltar"
        activeOpacity={0.5}
        onPress={() => console.log("Voltar")}
      /> */}
    </View>
  )
}
