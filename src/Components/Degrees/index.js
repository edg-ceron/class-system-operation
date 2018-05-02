import React, { Component } from 'react';

class Degrees extends Component {
  constructor(props){
    super(props)
    this.state = {
      tiempo: '0',
    }
  }
  handleChange(event) {
    this.setState({value: event.target.value})
  }

  calculate () {
    let {value} = this.state
    let gCelcius = (value-32)/1.8
    this.setState({gCelcius})
  }

  onClickCalculate () {
    let startTime, endTime = 0
    startTime = performance.now(); 
    this.calculate()
    console.log('end [calculate]')    
    endTime = performance.now()
    let totalTime = endTime - startTime
    this.setState({executionTime: totalTime})
  }

  render() {
    let {executionTime, gCelcius} = this.state
    return (
      <div className='content has-text-centered'>
        <div className='column'>
          <p className='subtitle'>Calcula grados Farenheit a Celcius</p>
          <p>Ingresa el numero de grados Farenheit que seran convertidos</p>
          <div>
            <label>Farenheit: </label>
            <input 
              value={this.state.value}
              onChange={this.handleChange.bind(this)}/>
            {gCelcius && (
              <label> = {gCelcius}</label>
            )}
          </div>
          <br/>          
          <div className='button is-success' onClick={this.onClickCalculate.bind(this)}>Calcular</div>
          <br/>
          <br/>
          <br/>
          <br/>   
          <p>Tiempo de ejecucion: {executionTime}</p>
        </div>
      </div>
    )
  }
}
export default Degrees;
