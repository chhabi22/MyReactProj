import React from 'react'
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'

//create stuff
class BooksList extends React.Component{
  state = {
    text: "",
    addBook: []
  }
  addNewBook = () =>{
    var newBook = this.state.text;
    var arr = this.state.addBook;
    arr.push(newBook);
    this.setState({addBook: arr, text: ""});
  }
  deleteBook = (t) =>{
    var arr = this.state.addBook;
    var pos = arr.indexOf(t);
    arr.splice(pos,1);
    this.setState({addBook: arr});
  }
  renderBooks = () =>{
    return this.state.addBook.map(t=>{
      return (
        <TouchableOpacity key={t}>
          <Text
            style={styles.addBook}
            onPress={()=>{this.deleteBook(t)}}
          >{t}</Text>
        </TouchableOpacity>
      )
    })
  }
  render(){
    return(
      <View style={styles.wholeStyle}>
        <View style={styles.viewStyle}>
          
          <TextInput 
            style={styles.inputStyle}
            onChangeText={(text)=>this.setState({text})}
            value={this.state.text}
          />
          <View style={{
             marginTop: 10,
            
           }}/>
          <Button 
            title="Add Your Book Name"
            color="#be8de0"
            onPress={this.addNewBook}
          />
          <View style={{marginTop: 100}}/>
          {this.renderBooks()}
        </View>
      </View>
    )
  }
}

const styles = {
  wholeStyle: {
    backgroundColor: "#ebdaf7",
    flex:1
  },
  viewStyle: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    
  },
  inputStyle:{
    height: 40,
    borderColor: "black",
    borderWidth: 1
  },
  addBook: {
      fontSize: 20,
      color: 'Black'
    }
}

export default BooksList