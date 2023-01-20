// Import data

// Import components
import './App.css';
import './Components/SearchBar';
import './Components/Directory';
import './Components/Gallery';
import './Components/SideBar';
import SearchBar from './Components/SearchBar';
import Directory from './Components/Directory';
import Gallery from './Components/Gallery';
import SideBar from './Components/SideBar';


function App(){
  let animal1 = 'dog'
  return (
<div>
  <h1>Craiglist</h1>
  <div className='App'>
  <SearchBar/>
  <Directory/>
  <Gallery/>
  <SideBar message = {'Hello World'} pet = {animal1}/>
  </div>
</div>



  )
}

export default App;
