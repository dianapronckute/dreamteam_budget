import { Platform, StyleSheet, StatusBar } from "react-native"; 

export default StyleSheet.create({   
  container: {     
    flex: 1,    
    flexDirection: "column",    
    alignItems: "top",     
    justifyContent: "space-around",    
    ...Platform.select({       
      ios: { paddingTop: 20 },       
      android: { paddingTop: StatusBar.currentHeight }     
      })   
  },   
 
  box: {
    width: 100,     
    justifyContent: "center",     
    alignSelf: "stretch",     
    alignItems: "center",     
    backgroundColor: "lightgray",
  },   
  boxText: {     
    color: "darkslategray",     
    fontWeight: "bold"   
    } 
});
