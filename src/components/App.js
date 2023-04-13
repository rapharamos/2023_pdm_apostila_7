import React from 'react'
import Busca from './Busca'
import env from 'react-dotenv'
import { createClient } from 'pexels'
import ListaImagens from './ListaImagens'
import PexelsLogo from './PexelsLogo'
import pexelsClient from '../utils/pexelsClient'
import unsplashedClient from '../utils/unsplashedClient'
import { MultiSelect } from 'primereact/multiselect'
import axios from 'axios'


export default class App extends React.Component {
  state = {
    pics: [],
    selectedValues: []
  }

  onBuscaRealizada = (termo) => {
    const promises = [];
    if (this.state.selectedValues.includes('PEXELS')) {
      console.log('Procurei no PEXELS!')
      promises.push(pexelsClient.get('/search', { params: { query: termo } }));
    }
    if (this.state.selectedValues.includes('UNSPLASHED')) {
      console.log('Procurei no UNSPLASHED!')
      promises.push(unsplashedClient.get('/search/photos', { params: { query: termo } }));
    }
    Promise.all(promises)
      .then((results) => {
        const pics = results.flatMap((result) => result.data.results || result.data.photos);
        this.setState({ pics });
      })
      .catch((erro) => console.log(erro));
  };

  // onBuscaRealizada = (termo) => {
  //   pexelsClient.get('/search', {
  //     params: {query: termo}
  //   })
  //   .then(result => {
  //     console.log(result.data.photos)
  //     this.setState({pics: result.data.photos})
  //   })
  //   .catch(erro => console.log(erro))

  // }
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
        <div className="col-12 MultiSelect">
          <MultiSelect value={this.state.selectedValues} options={['PEXELS', 'UNSPLASHED']} onChange={(e) => (console.log(e.value), this.setState({selectedValues: e.value}))} />
        </div>
        <div className="col-12">
          <Busca 
            onBuscaRealizada={this.onBuscaRealizada}/>
        </div>
        <div className="col-12">
          <div className="grid">
            <ListaImagens 
              pics={this.state.pics} 
              // mobile first col-md-6
              imgStyle={'col-12 md:col-6 lg:col-4 xl:col-3'}/> 
          </div>
          </div>
      </div>
    )
  }
}
