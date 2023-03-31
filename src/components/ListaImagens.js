import React from 'react'
import Imagem from './Imagem'

// props = {pics: [...]}
const ListaImagens = ({pics, imgStyle}) => {
  return (
    pics.map((pic, key) => {
      return <Imagem 
        pic={pic.src.small}
        key={key}
        imgStyle={imgStyle}
      />
    })
  )
}


// <Imagem />
// <Imagem />
// <Imagem />
// <Imagem />



export default ListaImagens