import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import Apps from './components/app/';


ReactDOM.render(
  <React.StrictMode>
    <Apps/>
  </React.StrictMode>,
  document.getElementById('root')
);




// class WhoAmI extends Component {
//   constructor (props) {
//     super (props);
//     this.state = {
//       year: 20,
//       post: 10
//     }
//     // this.nextYears = this.nextYears.bind (this);
//     // this.nextYears = () => {
//     //   this.setState (states => ({
//     //     year: ++states.year
//     //   }))
//     // }
//   }
//       nextYears = () => {
//       this.setState (states => ({
//         year: ++states.year
//       }))
//     }
//   // nextYears () {
//   //   this.setState (states => ({
//   //     year: ++states.year
//   //   }))
//   // }
//   render () {
//     const {name, surname, link} = this.props;
//     const {year} = this.state;
//     return (
//       <>
//         <button onClick = {this.nextYears}>++</button>
//         <h1>My name is {name}, surname - {surname}, year = {year} </h1>
//         <a href={link}>My profile</a>
//       </>
//     )
//   }
// }

// const All = () => {
//   return (
//     <>
//       <WhoAmI name = "Akezhan" surname = "Saduov" link = "vk.com"/>
//       <WhoAmI name = "Alex" surname = "Golu" link = "vk.com"/>
//       <WhoAmI name = "John" surname = "Shepard" link = "vk.com"/>
//     </>
//   )
 
// }