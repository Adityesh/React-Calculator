import React from 'react';
import './App.css';
import * as math from 'mathjs'



class App extends React.Component {

  constructor(props){
    super(props)
    this.state = { 
      currentInput : ''  
    }
  }

  componentDidMount(){
    document.getElementById('display').textContent = '0'
  }


  handleEqual = event => {
    this.setState({
      currentInput : math.round(math.evaluate(this.state.currentInput),2)
    })
  }

  handleOperation = (event) => {
    let id = event.target.id
    

    if(id === 'add'){
      this.setState((prevState,props)=>{
        return {
          currentInput : prevState.currentInput + '+'
        }
      })
    }
    else if(id === 'subtract'){
      this.setState((prevState,props)=>{
        return {
          currentInput : prevState.currentInput + '-'
        }
      })
    }

    else if(id === 'multiply'){
      this.setState((prevState,props)=>{
        return {
          currentInput : prevState.currentInput + '*'
        }
      })
    }

    else{
      this.setState((prevState,props)=>{
        return {
          currentInput : prevState.currentInput + '/'
        }
      })
    }
  }
  

  handleClick = event =>{
    let input = event.target.innerHTML
    let id = event.target.id

    if(id === 'clear'){
      //Handle clear button
      this.setState({
        currentInput : ''
      })
    }
    else if(id === 'zero'){
      //Handle multiple zero input
      if(this.state.currentInput !== ""){
        this.setState((prevState, props) => {
          return {currentInput: prevState.currentInput+ input};
        })
      }
    }
    else if(id === 'decimal'){
      //Handle multiple decimal input
      if(this.state.currentInput[this.state.currentInput.length-1] !== '.'){
        this.setState((prevState, props) => {
          return {currentInput: prevState.currentInput + input};
        })
      }
      
      
    }
    else{
      //Handle number input
      this.setState((prevState, props) => {
        return {currentInput: prevState.currentInput+ input};
      })
      
    }
    
    
    
  }

  

  render(){
    return (
      <div className="App">
        <h1 style={{marginBottom:'10%',textAlign:'center'}}>React Calculator</h1>
        <div className="content">
          
    <div id="display" className="row">{this.state.currentInput}</div>
  
          <div id="buttons">
            <div className="row">
              <div className="btn" onClick={this.handleClick} id="one">1</div>
              <div className="btn" onClick={this.handleClick} id="two">2</div>
              <div className="btn" onClick={this.handleClick} id="three">3</div>
              <div className="btn" onClick={this.handleOperation} id="add">+</div>
            </div>
            <div className="row">
              <div className="btn" onClick={this.handleClick} id="four">4</div>
              <div className="btn" onClick={this.handleClick} id="five">5</div>
              <div className="btn" onClick={this.handleClick} id="six">6</div>
              <div className="btn" onClick={this.handleOperation} id="subtract">-</div>
            </div>
            <div className="row">
              <div className="btn" onClick={this.handleClick} id="seven">7</div>
              <div className="btn" onClick={this.handleClick} id="eight">8</div>
              <div className="btn" onClick={this.handleClick} id="nine">9</div>
              <div className="btn" onClick={this.handleOperation} id="multiply">x</div>
            </div>
            <div className="row">
              <div className="btn" onClick={this.handleClick} id="zero">0</div>
              <div className="btn" onClick={this.handleClick} id="decimal">.</div>
              <div className="btn" onClick={this.handleClick} id="clear" >C</div>
              <div className="btn" onClick={this.handleOperation} id="divide">/</div>
            </div>
            <div className="row">
              <div id="equals" onClick={this.handleEqual}>=</div>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
