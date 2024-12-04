import { View, Text, Alert, TextInput, Button, FlatList ,StyleSheet,} from 'react-native'
import React, { useEffect,  useState } from 'react'
import api from '../service/api';
import { Estudiante } from '../modelo/Estudiante';

export default function AsiganuraComponente() {

  const [nombre, setNombre]= useState<string>('');
  const [estado, setEstado] = useState<string> ('')
  
   
  const [asignaturas, setAsignaturas] = useState<Estudiante[]>([]);


  const handleAddAsignatura = async () => {
    try {
      const newAsignatura = { nombre, estado };
      const response = await api.post('asignaturas', newAsignatura);
      setAsignaturas([...asignaturas, response.data]);
     
      setNombre('');
      setEstado('');

    } catch (error) {
      Alert.alert('Error', 'Ocurrió un error al agregar el estudiante: ' + error);
      console.log(asignaturas);
    }
  };

  return (

    
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Asigantura</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
       
      />
      <TextInput
        style={styles.input}
        placeholder="Estado"
        value={estado}
        onChangeText={setEstado}
      />
    
      <Button title="Agregar" onPress={handleAddAsignatura} />

     </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#f4f4f4',
      marginTop:10,
      marginBottom:90,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      textAlign: 'center',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 8,
      marginBottom: 8,
      borderRadius: 4,
    },
    card: {
      backgroundColor: '#fff',
      padding: 16,
      marginBottom: 8,
      borderRadius: 4,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
      marginTop:5
    },
    actions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 8,
    },
  });