import React, { Component } from 'react';
import {Text,View,ScrollView,TouchableOpacity, Image, StyleSheet} from 'react-native';


import img1 from '../../src/images/img1.png';
import img2 from '../../src/images/img2.png';
import img3 from '../../src/images/img3.png';




export default class MyList extends Component {
    state = {
       loading: false,
       data: [],
       current_page: 1,
       error: null,
       hasMore: true
     }
     
     componentDidMount() { this.getListOfData(); };

     getListOfData = () => {
        if (this.state.loading) { return; }
        this.setState({ loading: true });
        let newData = [];
        newData.push({
            title: "IPhone vai detectar portas e transcrever áudios", 
            text: "A Apple anunciou novas funções de acessibilidade que serão incluídas nos seus dispositivos físicos (como iPhone e iPad) e versões de sistema operacional ao longo do ano de 2022.",
            image: require("../images/img1.png"),
            id: this.state.data.length
           

        });
        newData.push({
            title: "Linguagem de programação Python se destaca pela facilidade de aprendizado", 
            text: "A Python ainda é uma das principais linguagens de programação ensinadas em escolas e universidades. Justamente por conta da sua facilidade de aprendizado. E este é mais um indicativo de que o reinado da Python deve continuar, pelo menos por mais alguns anos, ao aprender a linguagem na universidade, os futuros profissionais de tecnologia tendem a continuar a usá-la no mercado de trabalho.",
            image: require("../images/img2.png"),
            id: this.state.data.length+1
        });
        newData.push({
            title: "A importância do planejamento no dia a dia de trabalho", 
            text: "Se você deseja alcançar um objetivo de forma rápida e eficiente, o melhor recurso é utilizar o planejamento. Assim você obtém mais clareza e visão para a tomada de decisão. Não deixe que o tempo passe e seu sonho e suas metas fiquem pelo meio do caminho.",
            image: require("../images/img3.png"),
            id: this.state.data.length+2
        });
        this.setState({
            hasMore: true,        
            data: [...this.state.data, ...newData],
            loading: false,
            current_page: this.state.current_page + 1
        });
       
    }

    isCloseToBottom({ layoutMeasurement, contentOffset, contentSize }) {   
        return layoutMeasurement.height + contentOffset.y
        >= contentSize.height - 50; 
    }

    renderList = () => {
        return ( this.state.data.map((u) => {
          return ( 
            <TouchableOpacity key={u.id}>
                    <View style={{ padding: 10 }}>
                        <Image style={style.image} source={u.image} />
                       <Text style={style.title}>{u.title}</Text>        
                       <Text style={style.text}>{u.text}</Text>
                    </View>
             </TouchableOpacity>);
            })
       );
      }

    render() {
        return (
          <ScrollView onScroll={({ nativeEvent }) => {
            if (this.isCloseToBottom(nativeEvent) && this.state.hasMore) {                
                 this.getListOfData(); }}}> 
            {this.renderList()} 
          </ScrollView>
          );
      }

}

const
style = StyleSheet.create({
    image:{
    width:'100%',
    height:150,
    borderRadius:10
},

title:{
    fontSize: 15,
    fontSize:20,
    marginTop:10

},

text:{
    marginTop:15
}
})