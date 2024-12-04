import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../pages/Home/Home";
import Usuario from "../pages/Usuario/Usuario";
import Agregar from "../pages/Agregar/Agregar";
import Clases from "../pages/Clases/Clases";
import  Asignatura  from "../pages/Agregar/Asignatura";


export default function NavBar() {
  const drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <drawer.Navigator initialRouteName="Home">
        <drawer.Screen name="Home" component={Home} />
        <drawer.Screen name="Alumnos" component={Usuario} />
        <drawer.Screen name="Agregar" component={Agregar} />
        <drawer.Screen name="Asigntura" component={Clases} />
        <drawer.Screen name="Agragar Clase" component={Asignatura} />
      </drawer.Navigator>
    </NavigationContainer>
  );
}
