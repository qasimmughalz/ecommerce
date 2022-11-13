import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./components/routes/home.component";
import Navigation from "./components/routes/navigation/navigation.component";
import SignIn from "./components/routes/signin/signin.component";



const Shop = ()=>{
  return(
    <div>This is Shop</div>
  )
}





function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation/>}>
            <Route index element={<Home/>}></Route>              
            <Route path="/shop" element={<Shop/>}></Route>              
            <Route path="/signin" element={<SignIn/>}></Route>              
        </Route>
      </Routes>
    </div>
  );
}

export default App;
