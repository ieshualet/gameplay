
import { View, Text, Image } from "react-native";
import illustration from "../../assets/illustration.png"
import { stylesSignIn } from "./styles";

export function Signin() {

  return (
       <View style={stylesSignIn.container}>
        <Image source={illustration} style={stylesSignIn.image} resizeMode="stretch"/>
        <View style={stylesSignIn.content}>
          <Text style={stylesSignIn.tittle}>
            Organize suas{`\n`}
            jogatinas{`\n`}
            facilmente
          </Text>
          <Text style={stylesSignIn.subtittle}>
            Crie grupos pra jogar seus games{`\n`}
            favoritos com seus amigos
          </Text>
        </View>
       </View>
  );
}