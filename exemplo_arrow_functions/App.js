import { View } from 'react-native';
import {Ola, MeuNome, MostrarPessoa} from './components/ArrowFunctions';

//Com arrow function
const App = () => {
  return(
    <View style={{alignItems: 'center'}}>
      <Ola/>
      <MeuNome/>
      <MostrarPessoa/>
    </View>
  );
}
export default App;

// Sem arrow function

/*export default function App() {
  
  return (
    <View style={{alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>
       SOU ALUNO DO 3º ANO E
      LOGO MAIS EU ME FORMO
      </Text>    
    </View>
  );
}*/
