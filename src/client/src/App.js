import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state={
      dados: {}
    }
  }

  componentWillMount() {
    this.callApi()
    .then(response => {
      this.setState({ dados: response })
      console.log(response);
    })
    .catch(err => console.log(err))
  }


  callApi = async() => {
    const response = await fetch('/api/cliente/4555')
    const body = await response.json()


    if (response.status !== 200) throw Error(body.message)

    return body
  }



  render() {
   const { dados } = this.state
   return (
     <div className="App">
       <header className="App-header">
         <h1 className="App-title">Oir</h1>
       </header>
       <div>{ dados.nome}</div>

     </div>
   )
 }
}

export default App;
