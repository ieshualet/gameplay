
import { View, Text, Image } from "react-native";
import illustration from "../../assets/illustration.png"
import { stylesSignIn } from "./styles";

export function Signin() {

  return (
       <View style={stylesSignIn.container}>
        <Image source={illustration} style={stylesSignIn.image} resizeMode="stretch"/>
       </View>
  );
}