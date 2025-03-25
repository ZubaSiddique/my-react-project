import React from 'react'; // Importing React

const Welcome = props =>{
  console.log(props)
  return <h1>Hello {props.name}</h1>
}

export default Welcome; // Exporting the component