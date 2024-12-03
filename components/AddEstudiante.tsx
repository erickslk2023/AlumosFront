import { View, Text, Alert, TextInput, Button, FlatList ,StyleSheet} from 'react-native'
import React, { useEffect,  useState } from 'react'
import api from '../service/api';
import { Estudiante } from '../modelo/Estudiante';

export default function EstudianteComponent() {

  const [nombre, setNombre]= useState<string>('');
  const [apellido, setApellido] = useState<string> ('')
  const [correo, setCorreo]= useState<string> ('')
  const [telefono, setTelefono] = useState<string> ('')
  

  
  const [estudiantes, setEstudiantes] = useState<Estudiante[]>([]);


  const handleAddEstudiante = async () => {
    try {
      const newEstudiante = { nombre, apellido, correo, telefono };
      const response = await api.post('estudiantes', newEstudiante);
      setEstudiantes([...estudiantes, response.data]);
      setNombre('');
      setApellido('');
      setCorreo('');
      setTelefono('');
    } catch (error) {
      Alert.alert('Error', 'Ocurrió un error al agregar el estudiante: ' + error);
    }
  };

  return (

    
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Estudiante</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
       
      />
      <TextInput
        style={styles.input}
        placeholder="Apellido"
        value={apellido}
        onChangeText={setApellido}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo"
        value={correo}
        onChangeText={setCorreo}
      />
      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        value={telefono}
        onChangeText={setTelefono}
      />
      <Button title="Agregar Estudiante" onPress={handleAddEstudiante} />

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