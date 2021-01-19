import logo from './logo.svg';
import './App.css';
import React from 'react'

function Header(props){
 
    return(
      <>
      <h2>The lenght of the list is:</h2>
      <h2>{props.things.length}</h2>
      </>
    )
  
}
function Thing(props){
  return(
    <li><h3>{props.thing.name}</h3></li>
  )
}
function ThingList(props){

    return(
      <ul>
        {props.thingsList.map(thing=><Thing thing={thing} />)}
      </ul>
    )
  
}
class ThingListForm extends React.Component{
  constructor(props){
    super(props);
    this.props = props;
    this.state={
      name:''
    };
    this.handelChanges = this.handelChanges.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this);
  }
  handelSubmit(event){
    event.preventDefault()
    this.props.createNewThing(this.state)

  }
  handelChanges(event){
    this.setState({name: event.target.value})
  }
  render(){
    return(
      <form onSubmit={this.handelSubmit}>
      <label>
        Add new thing
        <input type='text' required onChange={this.handelChanges}/>
      </label>
      <input type='submit' value='Add'/>
      </form>
    )
  }
}

function Footer(props){
  return(
    <h3>{props.text}</h3>
  )
}

class App extends React.Component{
  constructor(){
    super();
    this.state= {
      thingList: [
        {
          id:1,
          name : 'Door'
        },
        {
          id:2,
          name : 'Bed'
        }
      ],
    };
    this.CreateThings = this.CreateThings.bind(this);
  }

  CreateThings(thing){
    let thingList = this.state.thingList
    thingList.push(thing)
    this.setState({thingList})
  }

  render(){
  return (
    <div className="App">
     
       <Header things={this.state.thingList}/>
       <ThingList thingsList={this.state.thingList}/>
       <ThingListForm createNewThing={(thing)=> this.CreateThings(thing)}/>
       <Footer text={"@copyright for Ahmad Almohammad" } />
      
    </div>
  );
}}

export default App;
