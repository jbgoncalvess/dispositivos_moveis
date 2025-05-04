import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaInicial from './screens/TelaInicial';
import TelaDetalhes from './screens/TelaDetalhes';

// Aqui criamos o stack navigator para gerenciar a navegação
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // Define o container principal para gerenciar a navegação do app
    <NavigationContainer>
    {/*ATENÇÃO ALUNO: Aqui configuramos o stack navigator e registramos as telas.
    Nota-se que para chamar uma rota é necessário utilizar exatamente o nome declarado*/}
      <Stack.Navigator>
        <Stack.Screen name="Inicial" component={TelaInicial} />
        <Stack.Screen name="Detalhes" component={TelaDetalhes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
