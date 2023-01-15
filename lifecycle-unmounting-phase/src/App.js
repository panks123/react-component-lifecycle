import React from 'react';
import './App.css';
import Child from './Child';

// Unmounting phase - When a component is being removed from the DOM
// - Only one method runs in this phase
// componentWillUnmount - this method runs just before the component is removed from the DOM using ReactDOM

class App extends React.Component {
  constructor()
  {
    super()
    this.state = {show: true}
  }

  toggleShow = ()=>{
    // this method toggles the state 'show' as true/false
    this.state.show ? this.setState({show:false}) : this.setState({show:true});
  }

  render()
  {
    let myChild;
    if(this.state.show)
    {
      // If this.state.show is true Child Component will be mounted below in the render
      // when we toggle using the button this.show.state will become false, render below will execute again with this.state.show = false, 
      // So, the existing Child component will be removed i.e. unmounted 
      // So the componentWillUnmount of Child Component will be executed

      myChild = <Child/>
    } 
    return (
      <>
        {myChild }
        <input type="button" value ="Toggle show child" onClick={this.toggleShow}/>
      </>
    )
  }
}

export default App;
