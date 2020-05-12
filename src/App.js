// (@flow) - this is the trick to check file
import React, { Component, PureComponent } from 'react';
import './App.css';
// import buttonOne from './components/ButtonOne'
// import ButtonOne from './components/ButtonOne';
import {connect} from 'react-redux';
// import {BrowserRouter as Router, Link, NavLink,Redirect} from 'react-router-dom';
// import Route from 'react-router-dom/Route';
// import Parent from './components/parent'
// import Users from './users/Users'
// import PropTypes from 'prop-types' 
import * as actionCreators from './store/actions/action'
import logo from './logo.svg'

// const Temp = (props) => {
//   console.log('render temp');
//   return (
//     <div>{props.val}</div>
//   )
// }

// class App extends PureComponent {
//   state = {
//     title : 'Dowhatever',
//     val : 1,
// }

// changeTitle = (newTitle) =>{
//     this.setState({
//         title : newTitle 
//     })
// }
// componentDidMount() {
//   console.log('mmmmmmmmmmmmmmmmmm');
//   setInterval(()=>{
//     this.setState(()=>{
//       return { val : 1}
//     })
//   },2000)
// }
// // shouldComponentUpdate(nextProp, nextState) {
// //   console.log(this.state.val=== nextState.val);
// //   console.log('next state', nextState);
// //   console.log(this.state);
// //   return this.state.val!== nextState.val;
// // }
//   render() {
//     console.log('rendered app');
//     // return (
//     //   <div className="App">
//     //     <Parent title = {this.state.title} worldEvent = {this.changeTitle.bind(this,'world event')}/>
//     //     <Parent title = {this.state.title} sameEvent = {this.changeTitle.bind(this,'Same event')}/>
//     //   </div>
//     // );
//     return (
//       <div className="App">
//         {/* <Users></Users> */}
//         <Temp val={this.state.val}></Temp>
//       </div>
//     )
//   }
// }
// Router Link chapter
// const User = ({username}) => {
//   return (
//     <h1>Welcome {username}</h1>
//   )
// }
// class App extends Component {
//   state={
//     loggedIn:false
//   }
//   handleLogin = ()=>{
//     this.setState(prevState=>({
//       loggedIn:!prevState.loggedIn
//     }))
//   }
//   render(){
//     return (
//       <Router>
//         <div className = 'App'>
//           <ul>
//             <li>
//             <NavLink to = '/' exact activeStyle={{color:'green'}}>Home</NavLink>
//             </li>
//             <li>
//             <NavLink to = '/About' exact activeStyle={{color:'green'}}>About</NavLink>
//             </li>
//             <li>
//               <NavLink to = '/user/john' exact activeStyle={{color:'green'}}>UserJohn</NavLink>
//             </li>
//             <li>
//               <NavLink to = '/user/peter' exact activeStyle={{color:'green'}}>UserPeter</NavLink>
//             </li>
//           </ul>
//           <input type = 'button' onClick={this.handleLogin.bind(this)} value={this.state.loggedIn?'log Out':'log in'}/>
//         <Route path = '/' exact render ={ ()=>{
//           return (
//             <h1> Welcome to route!!</h1>
//           )
//         }
//         }/>
//         <Route path = '/about' exact strict render ={ ()=>{
//           return (
//             <h1> Welcome to about!!</h1>
//           )
//         }
//         }/>
//         <Route path = '/user/:userid' exact strict render={({match})=>(
//           this.state.loggedIn ? <User username={match.params.userid}/> : (<Redirect to='/'></Redirect>)
//         )}/>
//         </div>
//         </Router>
//     )
//   }
// }
// REF lesson
// class App extends Component {
//   clickHandle = ()=>{
//     console.log(this.firstName);
//     alert('yeyeyey!!');
//   }
//   onKeyUp = (target, e)=>{
//     console.log(e.keyCode);
//     console.log(target);
//     if(e.keyCode===13){
//       switch(target) {
//         case 'firstName' :
//           this.lastName.focus() 
//           break;
//         case 'lastName' : 
//           this.age.focus()
//           break;
//         case 'age' :
//           this.submit.focus()
//           break;
//         default : 
//         this.firstName.focus()
//       }
//     }
//   }
//   render(){
//     return (
//       <div className = 'App'>
//         <div>
//         <span>FirstName </span>
//         <input ref={(input)=>{this.firstName=input}} onKeyUp={this.onKeyUp.bind(this,'firstName')}type = 'text'/>
//         </div>
//         <div>
//         <span>LastName </span>
//         <input type='text' ref={(input)=>{this.lastName=input}} onKeyUp={this.onKeyUp.bind(this,'lastName')}/>
//         </div>
//         <div>
//         <span>Age </span>
//         <input type='text' ref={(input)=>{this.age=input}} onKeyUp={this.onKeyUp.bind(this,'age')}/>
//         </div>
//         <div>
//         <input type='submit' value="submit" onClick={this.clickHandle}ref={(input)=>{this.submit=input}}></input>
//         </div>
//       </div>
//     )
//   }
// }

// PROP TYPES
// const Test =(props)=>{
//   console.log(props);
//   return (<div><h1>
//     ({props.bool?'bool':'not bool'})
//   </h1>
//   <h1> {props.str}</h1>
//   <h1>{props.strOrNum}</h1>
//   <div>{
//     props.arr.map(val=>{
//       return (<li key = {val}>{val}</li>)
//     })
//   }
//   </div>
//   <div>{
//     props.arrOfObj.map(val=>{
//       return (<li key = {val.name}>{val.name}</li>)
//     })
//   }
//   </div>
//   </div>)
// }
// Test.propTypes = {
//   str : PropTypes.string,
//   bool : PropTypes.bool,
//   strOrNum:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
//   arr : PropTypes.arrayOf(PropTypes.number),
//   arrOfObj:PropTypes.arrayOf(PropTypes.shape({
//     name:PropTypes.string,
//   }))
// }
// class App extends Component {
//   render(){
//     return (
//       <div className ='App'>
//         <Test str={'propstest'} bool={true} strOrNum={10} arr={[1,2,3,4]} arrOfObj ={[{name:'peter'},{name:'john'}]}
//         />
//       </div>
//     )
//   }
// }
// --------------------------------------------------------------------------------------------------------------------
// 14. FLOW TYPES

// type FuncProp = {
//   str:string
// }

// const FuncComp = (props:FuncProp)=>{
// return (
//   <div>{props.str}</div>
// )
// }

// type TestProps = {
// num?:number,
// arr:Array<number>
// }
// type TestState = {
//   message:string
// }
// class Test extends Component<TestProps,TestState> {
//   state = {
//     message :'HI'
//   }
//   static  defaultProps = {
//     str : "prrrrrrrrrrrr"
//   }
//   h1:?HTMLHeadingElement;
//   render(){
//     return (
//       <div>
//         <h1>{this.props.num}</h1>
//         <h1>{this.props.arr.map(val => val)}</h1>
//         <h1 ref={h=>this.h1=h}>{this.state.message}</h1>
//       </div>
//     )
//   }
// }

// class App extends Component<{}> {
//   render() {
//     return (
//       <div className='App'>
//         <Test 
//         // str={'techsith'}
//         arr={[1,6,7]}
//         />
//         <FuncComp str={'kkkkk'}/>
//       </div>
//     )
//   }
// }
// ----------------------------------------------------------------------------------------------------------------
// React Higher Order Components(HOC) Tutorial
// class App extends Component {
//   render(){
//     return(
//       <div className='App'>
//         <ButtonOne/>
//       </div>
//     )
//   }
// }

// ----------------------------------------------------------------------------------------------------------------
// ONLY REDUX
// What is Redux
// why redux if components are deeply nested. or we have multi page and we want to share the same state
// reducer hold funcionality to update the store
// action - it is the command to the reducer.action has type:(increment this), payload(value),
// reducer checks whether it has this type and then update this
// create current state and then copy it and then modify state and sends it back 

/* Dont use pure component anywhere. It dangerorus sometimes. Pure component do shallow comparision between two
objects if there are reference it will not render the file*/

// ----------------------------------------------------------------------------------------------------------------
// REACT WITH REDUX part 3
// store has to be global and has to be defined at index level
// first thing to inject store at global level. er have to use provider from react-redux module.provide will allow us
// to inject global store. Then we will get create store from react which will be used to create store
// create store will take reducer. We have to pass store as an attribute to provider. Hence it will be availble to the whole app.
// we have to plugin the store in componennt. We have to subscribe for anything that gets changes in store and will be
// able to dispatch action. So we have to map props to store and dispatch action to store
// Everything comes from prop after connecting to redux. so funciton handle is also a prop and attributes as well
// https://medium.com/@juinc/how-does-connect-work-in-react-redux-a25c68692335
class App extends Component {
  // state={
  //   age:21
  // }
  // onAgeUp = ()=>{
  //   this.setState({
  //     ...this.state,
  //     age:++this.state.age
  //   })
  //   return 
  // }
  // onAgeDown = () =>{
  //   this.setState({
  //     ...this.state,
  //     age:--this.state.age
  //   })  }
  render(){
    return(
      <div className='App'>
        <div>Age:{this.props.age}</div>
        <button onClick={this.props.onAgeUp}>Age Up</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
        {
          this.props.loading && <img src={logo} className='App-logo'/>
        }
        <hr/>
        <div>history</div>
        <div>
        <ul className='historyItem'>{this.props.history.map(el=>(
          <li key={el.id} onClick={()=>this.props.onDelItem(el.id)}>{el.age}</li>
        ))}
        </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  console.log(state);
  return{
    age:state.age,
    history:state.history,
    loading:state.loading
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    onAgeUp:()=>dispatch(actionCreators.ageUp(1)),
    onAgeDown:()=>dispatch(actionCreators.ageDown(1)),
    onDelItem:(id)=>dispatch({type:'DEL_ITEM', key:id})
  }
}

// ----------------------------------------------------------------------------------------------------------------
// combine multiple reducer epi - 21
// if click one button it will add value of other


// class App extends Component {
//     render(){
//       return(
//         <div className='App'>
//           <div className='col'>
//             <div><span>A:</span><span>{this.props.a}</span></div>
//             <button onClick={()=>this.props.updateA(this.props.b)}>Update A:</button>
//           </div>
//           <div className='col'>
//             <div><span>B:</span><span>{this.props.b}</span></div>
//             <button onClick={()=>this.props.updateB(this.props.a)}>Update B:</button>
//           </div>
//         </div>
//       )
//     }
//   }
  
//   const mapStateToProps=(state)=>{
//     console.log(state);
//     return{
//       a:state.rA.a,
//       b:state.rB.b
//     }
//   }
  
//   const mapDispatchToProps=(dispatch)=>{
//     return {
//       updateA:(b)=>dispatch({type:'UPDATE_A',b:b}),
//       updateB:(a)=>dispatch({type:'UPDATE_B',a:a}),
//     }
//   }
  
  // ----------------------------------------------------------------------------------------------------------------
// redux middleware - 21
// till now redux architecture can only support synchronous operation. for asynchronous support we need to add
// middleware to it. this middleware will catch the action and process it when the operaation is over
// lets us know how to that

// Redux-thunk Middleware | React Redux Series Part 7
// episode - 22
// it has inbuilt feature to wait till asynchrnous call is over. so we will call async function in synchrnous function
// to see the difference
//  npm install -g create-react-app projName - will install recent version of it
// recent babel - new pollyfills, support of fragments, not supporting multiple parent div, wrap it with empty tag,
//  has to eject the proj in earlier version, now it has SASS support .scss, an have svg as react component,
// <svg> tag was not suported earlier now it is supported
// REACT MEMO  - react v -16.6 and later
// if previous state and current state is same this can be done when shouldComponentUpdate() or pure comp but pure comp
// doesn't work id DOM is deep tree. and it only work with class comp not with functional comp. for that we have memeo
// Wrap the functional component with React.memo
// const funcomp = React.memo((props)=>{
//   console.log('fsdsdfds');
// })
//  React lazy coding and splitting
// lazy from react library, Suspense, wrap the component with suspense which aare going to load slowly. or lazy
// >16.7.0, with hooks everything is functional comp no class comp
// updating DOM is too expensive. and update as low as possible. 

export default connect(mapStateToProps, mapDispatchToProps)(App);
