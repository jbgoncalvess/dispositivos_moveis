import {View} from 'react-native'

// Lembre-se de importar todas as funções, alunos.
import {ExemploView, ExemploText, ExemploImage, ExemploTextInput, ExemploScrollView, ExemploStyleSheet, ExemploBotao, ExemploStatusBar} from './components/MeusComponentes';

// Para realizar o teste individual do que cada componente faz, deixe dentro da View somente a função que deseja testar.

export default function App() {
  return(
    <View>
      <ExemploText/>
      <ExemploImage/>
      <ExemploTextInput/>
      <ExemploStyleSheet/>
      <ExemploScrollView/>
      <ExemploBotao/>
      <ExemploStatusBar/>
    </View>
  );
}

