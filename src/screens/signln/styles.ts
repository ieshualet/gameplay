import{ StyleSheet } from "react-native"; 
import { theme } from "../../global/styles/theme";

export const stylesSignIn = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:theme.colors.background
  },
  image:{
    width:'100%',
    height:360
  },
  content:{
    marginTop:-40
  },
  tittle:{
    color:theme.colors.header,
    fontSize:40,
    marginBottom:16,
    textAlign:'center'
  }
});