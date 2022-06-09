import React from 'react'
const App = () => {
    return (
        <Component numbers={['a', 'b', 'c']}/>
        
    )
}
export default App 



const Component = (props) => {
    const array = []
    for (let i = 0; i < props.numbers.length;i++){
        array.push(
            <div>下标为{i}值为{props.numbers[i]}</div>
        )
    }
    return <div>{array}</div>
}
