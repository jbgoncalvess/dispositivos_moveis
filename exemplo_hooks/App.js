import {View} from 'react-native'

// Lembre-se de importar todas as funções, alunos.
import {ExemploUseState_01, ExemploUseState_02, ExemploUseEffect_01, ExemploUseContext_01} from './components/MeusComponentes';

// Para realizar o teste individual do que cada componente faz, deixe dentro da View somente a função que deseja testar.

export default function App() {
  return(
    <View>
      <ExemploUseState_01/>
      <ExemploUseState_02/>
      <ExemploUseEffect_01/>
      <ExemploUseContext_01/>
    </View> 
  );
}
