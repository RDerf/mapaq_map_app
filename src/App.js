import './App.css'
import MyMap from './components/MyMap'
import TopPanel from './components/TopPanel'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mapbox-gl/dist/mapbox-gl.css'
import './App.css'



function App() {

  return(
    <div>
    <TopPanel/> 
    <MyMap />
    </div>
  ) 
}


export default App

