
import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import Courses from './components/Courses'
import Home from './components/Home'
import Programms from './components/Programms'
import Profile from './components/Profile'
import './App.css'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <Header />
      <div className="app-body">
        <Switch>
        <Route exact path="/" component={Home} />
          <Route exact path="/courses" component={Courses} />
          <Route exact path="/programms" component={Programms} />  
           <Route exact path="/profile" component={Profile}/>
        </Switch>
      </div>
    </div>
  </div>
)

export default App
