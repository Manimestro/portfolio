
import About from './About';
import Contact from './Uses';
import Layout from './Layout';
import {Route , Routes, BrowserRouter} from 'react-router-dom'
import Projects from './Projects';
import Work from './Work';
import Uses from './Uses';
export const userTheme = localStorage.getItem("theme");
export const systemTheme = window.matchMedia("(prefers-color-scheme : dark )").matches; 


function App() {

 console.log(localStorage,)
  return (
    <div className='dark:bg-black bg-gray-100'>
     <BrowserRouter>
     <Routes>
      <Route  path='/' element={<Layout/>} >
            <Route index element={<About/>}/>
            <Route path='projects' element={<Projects/>}/>
            <Route path='work' element={<Work/>}/>
            <Route path="uses" element={<Uses/>}/>
      </Route>
     </Routes>
     </BrowserRouter> 
    
    </div>
  )
}

export default App
