import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EstudianteComponent from './components/EstudianteComponent';
import AsignaturaComponent from './components/AsignaturaComponente';
import AddEstudiante from './components/AddEstudiante';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <NavBar>


    </NavBar>
    // <View style={styles.container}>
    //   <Text>Estudiantes</Text>
    //   <StatusBar style="auto" />
    //   <EstudianteComponent></EstudianteComponent>
    //   <AsignaturaComponent></AsignaturaComponent>
    
    //     <AddEstudiante/>
    
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
