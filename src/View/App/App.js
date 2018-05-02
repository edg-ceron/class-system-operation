import React, { Component } from 'react';
import './App.css';

import Degrees from '../../Components/Degrees'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render() {
    let {selected} = this.state
    console.log(this.state.selected)
    return (
      <div className="Menu">
        <h1 className='title has-text-centered'>Diferentes programas </h1>
        <p className='subtitle'>Elige el programa que sea de tu eleccion:</p>
        <div className='columns'>
          <div className='column'>
            <div className='content has-text-centered'>
              <li>Calcula los grados farenheit a celcius</li>
              <div 
                className="button"
                onClick={() => this.setState({selected: 'Degree'})}>
                <p>Seleccionar</p>
              </div>
              <li>Calcula los grados farenheit a celcius</li>
              <div className="button">Seleccionar</div>   
              <li>Calcula los grados farenheit a celcius</li>
              <div className="button">Seleccionar</div>   
              <li>Calcula los grados farenheit a celcius</li>
              <div className="button">Seleccionar</div>   
              <li>Calcula los grados farenheit a celcius</li>
              <div className="button">Seleccionar</div>   
              <li>Calcula los grados farenheit a celcius</li>
              <div className="button">Seleccionar</div>   
              <li>Calcula los grados farenheit a celcius</li>
              <div className="button">Seleccionar</div>   
              <li>Calcula los grados farenheit a celcius</li>
              <div className="button">Seleccionar</div>            
            </div>
          </div>
          {selected === 'Degree' && (
            <div className='column'>
              <Degrees />
            </div>
          )}
      </div>
      </div>
    );
  }
}

export default App;
