import { View, Text, Alert, FlatList ,StyleSheet} from 'react-native'
import React, { useEffect,  useState } from 'react'
import api from '../service/api';
import { Asignatura } from '../modelo/Asignatura';

export default function AsiganuraComponente() {

  const [nombre, setNombre]= useState<string>('');
  const [estado, setEstado]  = useState<number> (0)
 

  const [asignaturas, setAsignaturas]= useState([]);


  const getAsignaturas = async () =>{
    try {
        
        const response= await api.get('asignaturas');
        setAsignaturas(response.data)

    } catch (error) {
        Alert.alert('Error', 'Ocurrio un error' + error)
    }
  }

  useEffect(()=>{
        getAsignaturas()
  }, [])

  return (
    <View style={styles.container}>
      
    <FlatList 
      data={asignaturas}
      keyExtractor={(item:Asignatura) => item.idasignatura.toString()}
      renderItem={({item})=>(

        <View style={styles.card}>
            <Text>{ `${item.nombre}`}</Text>
            <Text>{item.estado}</Text>
            
        </View>
       
      )}

      >


    </FlatList>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#f4f4f4',
      marginTop:10
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