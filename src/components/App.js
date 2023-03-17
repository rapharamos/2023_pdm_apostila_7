import React from 'react'
import Busca from './Busca'
import env from 'react-dotenv'
import { createClient } from 'pexels'
import ListaImagens from './ListaImagens'
import PexelsLogo from './PexelsLogo'
import pexelsClient from '../utils/pexelsClient'
export default class App extends React.Component {
  state = {
    pics: []
  }
  onBuscaRealizada = (termo) => {
    pexelsClient.get('/search', {
      params: {query: termo}
    })
    .then(result => {
      console.log(result.data.photos)
      this.setState({pics: result.data.photos})
    })
    .catch(erro => console.log(erro))
  }
  // pexelsClient = null
  // onBuscaRealizada = (termo)  =>{
  //   this.pexelsClient.photos.search({
  //     query: termo
  //   })
  //   .then(pics => this.setState({pics: pics.photos})) 
  // }

  // componentDidMount(){
  //   this.pexelsClient = createClient(env.PEXELS_KEY)
  // }
  render(){
    return (
      <div className='grid justify-content-center m-auto w-9 border-round border-1 border-400'>
        {/* .col-12 */}
        <div className="col-12">
          <PexelsLogo />
        </div>
        <div className="col-12">
          <h1>Exibir uma lista de...</h1>
        </div>
        <div className="col-8">
          <Busca 
            onBuscaRealizada={this.onBuscaRealizada}/>
        </div>
        <div className="col-8">
          <ListaImagens pics={this.state.pics}/>
        </div>
      </div>
    )
  }
}
