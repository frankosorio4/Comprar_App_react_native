import { View, Image } from "react-native"
import { styles } from "./styles"
import { Button } from "@/Components/Button"

export default function Home() {

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("@/assets/logo.png")} />

      <Button title="Entrar" />
      {/* <Button
        title="Voltar"
        activeOpacity={0.5}
        onPress={() => console.log("Voltar")}
      /> */}
    </View>
  )
}
