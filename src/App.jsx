import React from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Create from './Components/Create';
import Home from './Components/Home';
import Update from './Components/Update';
import Delete from './Components/Delete';


function App() {


  return (
    <div>
      <BrowserRouter>
       <div  className='container min-h-screen mx-auto p-4'>
         <h1 className='animated-gradient-slow bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center font-bold text-4xl m-5 p-4 rounded-xl'>CRUD OPERATION</h1>

         <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/create' element={<Create/>}></Route>
          <Route path='/update/:id' element={<Update/>}></Route>
          <Route path='/delete/:id' element={<Delete/>}></Route>
         </Routes>

       </div>  
      </BrowserRouter>
    </div>
  )
}

export default App
