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


export function ExemploUseState_02() {
  const [nome, setNome] = useState(''); // Inicio uma variável que seu estado inicial é vazia ''.
  const [listaNomes, setListaNomes] = useState([]); // Inicio um array que seu estado inicial é vazio [].

  function adicionarNome() {
    if (nome.trim() !== '') {
      setListaNomes([...listaNomes, nome]); // spread operator, manipula dados em um array.
      setNome('');                          // Neste caso nos clonamos a lista original e adicionamos o nome no final. Reinicio o nome.
    }
  }

  function renderizarNome(index, item) { // Retorno o texto e a posição do array. Exemplo: pos 0 - Ciclano de tal, pos 1 - Fulano do mal ...
    return <Text key={index}>{item}</Text>;
  }

  return (
    <View style={{ alignItems: 'center', padding: 20 }}>
      <TextInput
        style={{ borderWidth: 2, padding: 5, marginBottom: 10, width: 200 }}
        placeholder="Digite um nome"
        value={nome}                    // O usuário digita o nome e com o setNome mudamos o conteúdo da variável nome, pois ela tem estado (useState).
        onChangeText={setNome}
      />
      <Button title="Adicionar Nome" onPress={adicionarNome} />
      
    {listaNomes.map(function (item, index) { 
      /*As chaves antes do código JS é para entrar no modo JSX, que permite executar códigos JS. Sem as chaves o React acharia que eu estou
      escrevendo algo da estrutura visual e não a lógica de programação.*/
      // Retorno o texto e a posição do array. Exemplo: pos 0 - Ciclano de tal, pos 1 - Fulano do mal ...
      return <Text key={index}>{item}</Text>;
    })}
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


