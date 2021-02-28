import React, { Component, useState } from 'react'
import useFetch from './useFetch'

export default function App() {

  const [buttonText, setButtonText] = useState("Click me, please");
  const data = useFetch('https://jsonplaceholder.typicode.com/users')

  return (
    <div>
      <button onClick={() => setButtonText("Thanks, been clicked!")}>{buttonText}</button>
      <ul>
        {data.data.map(el => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    </div>
  )
}


// export default class App extends Component {

//   constructor() {
//     super();
//     this.state = {
//       buttonText: "Click me, please",
//       inCrement: 0
//     }
   
//     this.handleClick = () => {
//       this.setState({
//         buttonText: "Thanks, been clicked!"
//       })
//     }
//     this.handleIncrement = () => {
//       this.setState({
//         inCrement: this.state.inCrement + 1
//       })
//     }
//   }

//   render() {

//     const { buttonText, inCrement } = this.state;

//     return (
//       <div>
//         <button onClick={this.handleClick}>{buttonText}</button>
//         <br/>
//         <h1>{inCrement}</h1>
//         <button onClick={this.handleIncrement}>Increment</button>
//       </div>
//     )
//   }
// }
