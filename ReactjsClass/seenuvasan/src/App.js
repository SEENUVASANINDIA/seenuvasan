/* eslint-disable no-unused-vars */
import logo from "./logo.svg";
import "./App.css";
import Table from "./Table";
//import Login from "./Components/UI/Form";
//import home from "./pages/home";
import React, { useState } from "react";
import Header from "./Components/header/Header";
import Main from "./Components/main/Main";
import Footer from "./Components/footer/Footer";

import MainRouter from "./Router/Router";
function App() {
  return (
    <div>
      <div>
        {/* <MainRouter /> */}
        <p>hai</p>
      </div>
      <div>
      <Header/>
        {/* <Header title="My header" subtitle="subtitle2" /> */}
        <Main message="My content" />
        <Footer note="Footer Note" />
      </div>
    </div>
  );
}

export default App;

// /* eslint-disable no-unused-vars */
// import logo from "./logo.svg";
// import "./App.css";
// import Table from "./Table";
// //import Login from "./Components/UI/Form";
// //import home from "./pages/home";
// import React, { useState } from "react";

// //import CountClass from "./CountClass";
// import countClass from "./countClass";
// // import Appbar from "./navbar";
// // import router from "./router";
//  import MainRouter from "./Router/Router";
// function App() {
//   // const name = "seenu";
//   // const [count, setCount] = useState(0);

//   // const clickable = () => {
//   //   setCount(count + 2);
//   // };
//   return (
//     // //<div className="App">
//     // //  <h1>{name} how are you </h1>
//     // //  <h2> Tablehead</h2>
//     // //  <Table/>
//     // //</div>
//     // <div>
//     //   <div>
//     //     <Login />
//     //   </div>
//     //   <div>
//     //     <div>Fun Count : {count}</div>
//     //     <button onClick={() => clickable()}>Click Me !</button>

//     //     <countClass />

//     //   </div>
//     // </div>
//     <div>
//       <MainRouter />
//       <p>hai</p>
//     </div>
//   );
// }

// export default App;
