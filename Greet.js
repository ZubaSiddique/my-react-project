import React from 'react'

// function Greet(){
//     return <h1>Welcome Vishwas</h1>
// }
// export
 const Greet = () => { //named export , need curly braces in app.js 
 return (
    <div>
      <h1>Hello, World!</h1>
      <p>Welcome to my website.</p>
      <p>Have a great day!</p>
      <img src="https://img.freepik.com/free-vector/inspirational-quote-watercolour-background_1048-18831.jpg?" alt="Description" />

    </div>
  );
}
export default Greet   // default export , dont need curly braces in app.js