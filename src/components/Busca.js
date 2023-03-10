// rce
import React, { Component } from 'react'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'

export class Busca extends Component {
  state = {
    termoDeBusca: ''
  }
  onTermoAlterado = (event) => {
    console.log(event.target.value)
  }
  render() {
    return (
      <div className="flex flex-column">
        {/* span.p-input-icon-left.w-full */}
        <span className="p-input-icon-left w-full">
          {/* i.pi.pi-search */}
          <i className="pi pi-search"></i>
          <InputText 
            className='w-full'
            onChange={this.onTermoAlterado}
            placeholder={this.props.dica}/>
        </span>
        <Button 
          label="OK"
          className="p-button-outlined mt-2"
        />
      </div>
    )
  }
}

Busca.defaultProps = {
  dica: "Digite algo que deseja ver..."
}

export default Busca