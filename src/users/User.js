// // import React,{Fragment} from 'react';

// // const User = (props) => {
// //   // return (<div>
// //   //   <li>Name: {props.children} | Age: {props.age}</li>
// //   //   <button onClick={props.deleteUser}>delete</button>
// //   //   <input type='text' onChange={props.changeInput} value={props.children}></input>
// //   //   </div>) 
// //   return (
// //     <Fragment>  <div> Hi</div>
// //     <div>Hello</div></Fragment>
// //   )
// // }

// import React from 'react';
// import UniqueId from 'react-html-id';
// class User extends React.Component {
//   constructor(){
//     super();
//     console.log('child constructor');
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
//     console.log('child compontnt will mount'); //only run ones and executes on server rendering
//   }
//   componentDidMount(){
//     console.log('child component did mount');
//   }
//   componentWillReceiveProps() {
//     console.log('child component will recive props');
//   }
//   shouldComponentUpdate(nextProps, nextState){
//     console.log('child component should update');
//     return true;
//   }
//   componentWillUpdate(){
//     console.log('child componnet will update');
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
//     console.log('child renderrrrr');
//     if(this.state.title === 'robert') {
//       return <div></div>
//     }
//     return (
//       <div>
//         <input type = 'text' onChange={this.onChangeTitle} value = {this.state.title}></input>
//         <button onClick={this.handleAge}>Make us 10 years younger</button>
//         <br></br>
//       </div>
//     )
//   }
    
//     // <div> <User age = {this.state.}> </User></div>)
// }


// export default User;
// /* Note : props.children gives values of content of user which is not passed as props.
// React Events And Two-way Data Binding Tutorial

// */
