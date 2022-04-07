import * as React from 'react';
import {View,Text,StyleSheet,Image,ScrollView} from 'react-native';

export default function App(){
  return(
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Top privadas </Text>
      <Text style={estilo.frase}> E suas notas </Text>
      
      <ScrollView>
      <View style={estilo.fotos}>
      <Image style={estilo.img} source={require("./assets/bob.jpg")} />
      
      <Text style={estilo.legenda}>Privada do Bob esponja</Text>
      <Text style={estilo.nota}>100/10</Text>
      <Text style={estilo.legenda}>mesma coisa que uma privada normal porem do Bob esponja</Text>
     
      <Image style={estilo.img} source={require("./assets/busao.jpg")} />
      <Text style={estilo.legenda}> Privada de busão </Text>
      <Text style={estilo.nota}>5/10</Text>
      <Text style={estilo.legenda}>Muito desconfortavel e desagradavel, porem muito util e com uma descarga legal</Text>
      
      <Image style={estilo.img} source={require("./assets/japa1.jpg")} />
      <Text style={estilo.legenda}> Privada japonesa inteligente </Text>
      <Text style={estilo.nota}>1000/10</Text>
      <Text style={estilo.legenda}>Privada hightech, tem led, bide e esquenta as nadegas e uma pia acoplada</Text>
      
      <Image style={estilo.img} source={require("./assets/japa2.jfif")} />
      <Text style={estilo.legenda}> Privada chinesa de banheiros publicos</Text>
      <Text style={estilo.nota}>0/10</Text>
      <Text style={estilo.legenda}>privada no chão????? pq baralhos essa porra ta no chão?????????????</Text>
      
      <Image style={estilo.img} source={require("./assets/trono.jpg")} />
      <Text style={estilo.legenda}> O trono</Text>
      <Text style={estilo.nota}>100/10</Text>
      <Text style={estilo.legenda}>uma privada porem com formato de trono, para soltar seu toroso como um verdadeiro rei</Text>
      
      <Image style={estilo.img} source={require("./assets/duo.jfif")} />
      <Text style={estilo.legenda}>Privada duo</Text>
      <Text style={estilo.nota}>5/10</Text>
      <Text style={estilo.legenda}>aquela privada para utilizar junto com seu parceiro ou amada</Text>
      
      <Image style={estilo.img} source={require("./assets/mictorioCompartilhado.jfif")} />
      <Text style={estilo.legenda}> Mictorio compartilhado</Text>
      <Text style={estilo.nota}>0/10</Text>
      <Text style={estilo.legenda}>não respeita a area de respingo, alem de ser desagradavel</Text>
      
      <Image style={estilo.img} source={require("./assets/mictoriosimples.jfif")} />
      <Text style={estilo.legenda}> Mictorio</Text>
      <Text style={estilo.nota}>7/10</Text>
      <Text style={estilo.legenda}>Muito pratico, porem um pouco anti-higiênico, se bem localizado em um banhero se torna 8/10 </Text>
      
      <Image style={estilo.img} source={require("./assets/minimalista.jfif")} />
      <Text style={estilo.legenda}> Privada minimalista</Text>
      <Text style={estilo.nota}>7/10</Text>
      <Text style={estilo.legenda}>Bonita porem faz a msm função de uma privada normal porem 10x mais caro</Text>
      
      <Image style={estilo.img} source={require("./assets/privadapadrao.jfif")} />
      <Text style={estilo.legenda}> Privada padrao</Text>
      <Text style={estilo.nota}>10/10</Text>
      <Text style={estilo.legenda}>Boa, util, pratica e confortavel, nada a reclamar</Text>
      </View>
      </ScrollView>
    
    </View>
  );
}

const estilo = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#DC143C" ,
    textAlign: 'center',
  },
  titulo:{
    textAlign: 'center',
    fontSize: 30,
    marginTop:45,
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  frase:{
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  img:{
    width: 300,
    height: 200,
    alignItems: "center",
    borderRadius: 15,
  },
  legenda:{
    textAlign: 'center',
    fontWeight: 'bold',
  },
  fotos:{
    flex:1,
    alignItems: 'center',
  },
  nota:{
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },

});