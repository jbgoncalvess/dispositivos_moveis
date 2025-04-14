import {Text, View, Button} from "react-native";
import { useState } from "react";


// Exemplo de arrow function sem return.
export const Ola = () => <Text> Ola, sou aluno do 3º ano </Text>;


// Exemplo de arrow function como parâmetro em outra função.
export const MeuNome = () => {
    const [mensagem, setMensagem] = useState("");

    const exibirNome = () => {
        // Aqui, por exemplo, utilizo um setTimeout com arrow function.
        // Nota-se que como parâmetro do timeout eu passo uma função anônima com arrow function.
        // A função só é executada após a passagem do tempo. Podia ser uma função normal.
        setTimeout(() => {
            setMensagem("Meu nome é Ciclano do 3° ano");
        }, 3000);
    };

    return (
        <View>
            <Text style={{ fontSize: 20, marginBottom: 20 }}>{mensagem}</Text>
            <Button title="Clique para Exibir o Nome e turma" onPress={exibirNome} />
        </View>
    );
};


// Componente com objeto literal, utilizando arrow functions para chamar
export const MostrarPessoa = () => {
  const [nome, setNome] = useState("");

  // Exemplo do this herdando o contexto do método exibir, que pertence ao objeto literal pessoa.
  const pessoa = {
      nome: "Beltrano",
      sobrenome: "Alvares",
      falar: function() {
          setTimeout(() => {
              setNome(`Nome é: ${this.nome} | Sobrenome é: ${this.sobrenome}.`); // this aponta para o objeto
          }, 1000);
      }
  };

  return(
    <View>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>{nome}</Text>
      <Button title="Exibir Nome" onPress={() => pessoa.falar()} />
    </View>
  );

}
