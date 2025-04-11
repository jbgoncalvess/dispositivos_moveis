import {View, Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function () {

  // Obtem o objeto de navegação usando o hook useNavigation (lembra do useState, aluno?).
  // Dessa forma, permite acessar os métodos como navigate e goBack.
  const navigation = useNavigation();

  // Função que responsável por navegar para a tela "Detalhes".
  // O método navigate realiza essa transação.
  function irDetalhes() {
    navigation.navigate('Detalhes');
  }

  return(
  <View style={{alignItems: 'center', padding: 10}}>
    <Text>
      SOU ALUNO DO 3º ANO!
    </Text>
    <Button title="Detalhes" onPress={irDetalhes}/>
  </View>
  );
}
