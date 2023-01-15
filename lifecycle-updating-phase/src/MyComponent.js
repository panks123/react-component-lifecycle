import React from 'react'
// Updating phase in lifecycle of  component
// --- mainly the below methods are executed in order during updating phase
// 1. getDerivedStateFromProps
// 2. shouldComponentUpdate
// 3. render
// 4. getSnapshotBeforeUpdate
// . componentDidUpdate

class MyComponent extends React.Component{
    constructor(){
        super()
        this.state = { color: "Red", model : "Mustang" } 
        console.log('constructor')
    }
    
    onChangeColorToGreen = ()=>{
        this.setState({...this.state, color:"Green"})
    }
    static getDerivedStateFromProps(){
        console.log('getDerivedStateFromProps')
        return { brand: "Ford"} // If we return some different property(which is not exactly present in the existing object) from here - 
                               // this new property will be added to the state object
    }

    shouldComponentUpdate()
    {
        console.log('shouldComponentUpdate')
        // return false; // This states react not to call render method on update - but generally we don't do this - may be we can do it on some conditions
                     // Also , if we return false from here, the update which ws made in the componentDidMount is rolled bac to the prevState
        return true; // This states react not to call render method on update - but generally we don't do this - may be we can do it on some conditions
    }

    render(){
        console.log('render')
        return (
            <>
                <p>This is my car model : {this.state.model}.</p> 
                <p> It's color is {this.state.color}</p>
                <input type="button" value="Change color to Green" onClick = {this.onChangeColorToGreen}/>
                <div id="div1"></div>
                <div id="div2"></div>
            </>
        )
    }

    componentDidMount()
    {
        console.log('componentDidMount')
        setTimeout(()=>{
            // From here we are trying to update the state of the component
            this.setState({...this.state, color: "Black"})
        }, 2000)
    }

    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        // It has access to the props and state before the update
        console.log('getSnapshotBeforeUpdate')
        document.getElementById('div1').innerText = `Before update the color of the car was: ${prevState.color}`
        // Also it must return something or null (should not be left undefined)
        return null
    }
    // Also note that we can use getSnapshotBeforeUpdate only if we are also having componentDidUpdate
    componentDidUpdate()
    {
        console.log('componentDidUpdate')
        document.getElementById('div2').innerText = `After update the color of the car is now: ${this.state.color}`
    }
}

export default MyComponent;

// Order of execution:
// ----- During mounting
// 1. constructor got called
// 2. getDerivedStateFromProps got called
// 3. render got called
// After the component was mounted 
// 4. componentDidMount was called - where the state of the component was updated
// So now the component will move to the updating phase
// --- During updating phase
// 5. getDerivedStateFromProps was called
// 6. shouldComponentUpdate was called - it returned true so it proceeded next
// 7. render got called with the updated state
// 8. getSnapShotBeforeUpdate was called
// 9. componentDidUpdate was called

// If we click the button 'Change color to green' - this will again update the state and again component will go in updatin phase
// And it will execute the functions in below order again

// - getDerivedStateFromProps was called
// - shouldComponentUpdate was called - it returned true so it proceeded next
// - render got called with the updated state
// - getSnapShotBeforeUpdate was called
// - componentDidUpdate was called