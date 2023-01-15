import React from 'react'

// Mounting happens when the component is being put into the DOM
// During this the methods execute in the below order
// 1. constructor
// 2. getDerivedStateFromProps
// 3. render
// 4. componentDidMount


// Checking Order of execution during mounting phase in Component's lifecycle
class MyComponent extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = { color: "Red"}
        console.log('constructor')
    }

    static getDerivedStateFromProps(props, state)
    {
        console.log('getDerivedStateFromProps')
        return { color: props.color}
    }

    render()
    {
        console.log('render')
        return (
        <>
        <p>My favorite color is {this.state.color}</p>
        </>)
    }

    componentDidMount()
    {
        console.log('componentDidMount')
        this.setState({color: "Blue"})
    }
}
export default MyComponent

// The order of execution(output of this in the console) will be:
// 1. constructor - because the constructor will always be the first one to be executed in mounting phase
// 2. getDerivedStateFromProps - this executes after the constructor and before the render | and it makes this.state = {color: Yellow} - Yellow was passed as props
// 3. render - next render is called which renders the elements into the DOM
// 4. componentDidMount - after mounting - means after render the componentDidMount gets Called also it makes the state to {color: Blue}
// ----- Updating phase begins below
// 5. getDerivedStateFromProps - It was called because in the ComponentDidMount we have added a line which changes the state of the component - (This is a part of updating phase)
                            //   Because of this the updating phase starts i.e. the component will be re-rendered according to the change in state
                            //   Also this makes the state = {color : "yellow"} - Yellow was passed as props

// 6. render - render method is called again to re-render