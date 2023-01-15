import React from 'react'

class Child extends React.Component{
    componentWillUnmount(){
        console.log('Component will unmount')
    }
    render(){

        return (
          <div>
            I am a child component
          </div>
        )
    }
}

export default Child;