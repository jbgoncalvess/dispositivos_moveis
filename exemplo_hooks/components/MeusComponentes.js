import {View, Text, Button} from 'react-native';
import {useState, useEffect, createContext, useContext} from 'react';

export function ExemploUseState_01 () {
  const [contador, setContador] = useState(0); //Esse é o padrão da definição do estado, aluno.

  function aumentar () {
    setContador(contador + 1); // A cada "aumentar", cont++.
  }

  // O react re-renderiza, respeitando o novo estado.
  // Ou seja, já aparece para o usuário o novo valor após chamar a função "aumentar".

  return(
    <View style={{alignItems: 'center'}}>
      <Text>
        CONTADOR É:  {contador}
      </Text>
      <Button title='AUMENTAR' onPress={aumentar}></Button>
    </View>

  );

}
//==========================================================================================================

export function ExemploUseEffect_01 () {
  const [contador, setContador] = useState(0); //Esse é o padrão da definição do estado, aluno.

  function aumentar () {
    setContador(contador + 1); // A cada "aumentar", cont++.
  }

  // Neste exemplo, quando chamo a função "aumentar", eu faço um incrimento na variável "contador".
  // Com isso, sempre que o valor de "contador" mudar, o useEffect vai chamar a função mudar.

  function mudar () {
    if (contador == 0 || contador == 1 || contador == 5){
      return;
    }
      alert("O contador mudou para:" + contador);
  }

  useEffect(mudar, [contador]);
  
  return(
    <View style={{alignItems: 'center'}}>
      <Text>
        CONTADOR É:  {contador}
      </Text>
      <Button title='AUMENTAR' onPress={aumentar}></Button>
    </View>

  );

}


//==========================================================================================================

// Defino o contexto globalmente para usar quando eu quiser.

const TemaContext = createContext('claro');

export function ExemploUseContext_01 () {

  function Filho () {
    const tema = useContext(TemaContext);
    return (<Text style={{fontSize: 30}}> O tema é {tema} </Text>);
  }

  // No "value", eu posso passar, por exemplo, o tema que eu quiser, que todos os "filhos" vão aderir.
  return (
    <TemaContext.Provider value = "escuro">
      <View>
        <Filho/>
      </View>
    </TemaContext.Provider>    
  );  

}


