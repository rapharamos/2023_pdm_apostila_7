import React from 'react'
import Imagem from './Imagem'

// props = {pics: [...]}
const ListaImagens = ({pics}) => {
  return (
    pics.map((pic, key) => {
      <Imagem 
        pic={pic.src.small}
        key={key}
      />
    })
  )
}


// <Imagem />
// <Imagem />
// <Imagem />
// <Imagem />



export default ListaImagens