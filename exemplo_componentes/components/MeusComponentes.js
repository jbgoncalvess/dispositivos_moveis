// TODO E QUALQUER COMPONENTE DO REACT QUE EU FOR UTILIZAR, EU TENHO QUE IMPORTAR!!!
import {View, Text, Image, TextInput, ScrollView, StyleSheet, Button, StatusBar} from 'react-native';


// Exemplo do componente View
export function ExemploView () {

  return(
    <View style={{borderWidth: 75, borderColor: 'lightpink'}}>
    </View>
  );

}

// Exemplo do componente Text
export function ExemploText () {

  return(
    <Text style={{fontSize: 30, color: 'lightblue', fontWeight: 'bold', padding: 50}}>
      ALUNOS
    </Text>
  );

}

// Exemplo do componente Image
export function ExemploImage () {
  
  return(
    <Image source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2obl6Iv0bhjiwb-cVViWoKh3f8GrH7G5RAg&s"}}
    style={{height: 300, width: 300}}>
    </Image>
  );

}

// Exemplo do componente TextInput

export function ExemploTextInput () {

  return(
    <TextInput
    placeholder = 'Digite aqui, usuário'
    style={{borderWidth: 2, padding: 10, width: '50%'}}>
    </TextInput>
  );

}

// Exemplo do componente ScrollView

export function ExemploScrollView () {

  const itens = [];
  let i;

  for (i = 0; i <= 1000; i++ ) {
    itens.push(<Text key={i}> Exemplo {i}</Text>)
  }

  return(
    <ScrollView style={{alignItems: 'center'}}>
      {itens}
    </ScrollView>
  );

}


// Exemplo da API StyleSheet

export function ExemploStyleSheet () {


  return(
    <View style={estilo.container}>
      <Text style={estilo.texto}>
        ALUNOS
      </Text>
    </View>

  );
}

const estilo = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
  },

  texto: {
    fontFamily: 'Times',
    fontSize: 50,
    color: 'lightgreen',
  },

});

// Exemplo do componente Button

export function ExemploBotao () {
  
  function SeClicou () {
    alert('Botao pressionado')
  }

  return(
    <View style={estilo.container}>
      <Button title = 'Clique aqui' onPress={SeClicou}/>
    </View>
  );

}

// Exemplo do componente StatusBar

export function ExemploStatusBar () {

  return (
    <StatusBar barStyle='light-content' backgroundColor='purple'>    
    </StatusBar>
  );

}

