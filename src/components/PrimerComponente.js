import React  from "react";
import { Text, StyleSheet } from "react-native";

const PrimerComponente = () => <Text style={styles.color}>Hola Mundo</Text>;

const styles = StyleSheet.create({
    color: {
        color: "#FFF",
    }
  });
  

export default PrimerComponente;