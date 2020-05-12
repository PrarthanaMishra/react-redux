// import React from 'react';
// import User from './User';
// import UniqueId from 'react-html-id';
// class Users extends React.Component {
//   constructor(){
//     super();
//     console.log('constructor');
//     UniqueId.enableUniqueIds(this);
//     this.state = {
//       users : [
//         {
//           name : 'Mark',
//           age : 26,
//           id:this.nextUniqueId()
//         },
//         {
//           name : 'Dolly',
//           age : 34,
//           id:this.nextUniqueId()
//         },
//         {
//           name : 'Mark',
//           age : 23,
//           id:this.nextUniqueId()
//         },
//         {
//           name : 'Listen',
//           age : 65,
//           id:this.nextUniqueId()
//         },
//         {
//           name : 'Lata',
//           age : 99,
//           id:this.nextUniqueId()
//         }
//       ],
//       title : 'UsersList'
//     }
//     console.log(this.state);
//   }
//   componentWillMount(){
//     console.log('compontnt will mount'); //only run ones and executes on server rendering
//   }
//   componentDidMount(){
//     console.log('component did mount');
//   }
//   componentWillReceiveProps() {
//     console.log('component will recive props');
//   }
//   shouldComponentUpdate(nextProps, nextState){
//     console.log('component should update');
//     return true;
//   }
//   componentWillUpdate(){
//     console.log('componnet will update');
//   }
//   componentWillUnmount() {
//     console.log('child unmount');
//   }
//   handleAge = () => {
//     let newState = this.state.users.map(user => {
//       user.age-=10;
//       return user;
//     })
//     this.setState(newState);
//   }
//   onChangeTitle = (e) => {
//     let title= e.target.value
//     this.setState({title:title})
//   }
//   deleteUser = (index) => {
//     let copyState = {...this.state}
//     copyState.users.splice(index,1);
//     this.setState(copyState);
//   }
//   changeInput = (id,e) => {
//     const  index = this.state.users.findIndex(user=> user.id===id);
//     const copyState = {...this.state};
//     copyState.users[index].name= e.target.value;
//     this.setState({
//       copyState
//     })
//   }
//   unmount = () => {
//     this.setState({
//       title:'robert'
//     })
//   }
//   render () {
//     console.log('renderrrrr');
//     if(this.state.title === 'robert') {
//       return <div></div>
//     }
//     return (
//       <div>
//         <input type = 'text' onChange={this.onChangeTitle} value = {this.state.title}></input>
//         <button onClick={this.handleAge}>Make us 10 years younger</button>
//         <br></br>
//         <h3> {this.state.title} </h3>
//         <button onClick={this.unmount}>Unmount child</button>
//         <User></User>
//         {/* <ul>
//         {
//           this.state.users.map((user,index) => {
//           return <User key = {index} age = {user.age} deleteUser = {this.deleteUser.bind(this,index)} changeInput = {this.changeInput.bind(this,user.id)}>{user.name}</User>
//         })
//       }
//       </ul> */}
//       </div>
//     )
//   }
    
//     // <div> <User age = {this.state.}> </User></div>)
// }

// export default Users;
// /*
// <User key = {index}
// NOTE : error in console 
//  Each child in a list should have a unique "key" prop.
// That means each list need to have key in the prop(Warning)
// Fragment is used for sending multiple div without enclosing in single div
// we cannot call things anywhere we have to call it at certain hooks or at appropriate place
// component did mount runs after running child's all lifecycle and then it runs ones
// component will receive props runs in child but not in users because users doen't have props
// cwrp we can change props and or states. no change of props in this method
// */

