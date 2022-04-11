import './App.css';

import HomePage from './components/HomePage/homePage';
import QuickBar from './components/quickBar';
// import Jelajah from './components/jelajah/jelajah';
// import Tournament from './components/tournament/tournament';
// import Shop from './components/shop/shop';
import Profile from './components/profile/profile';
import Setting from './components/setting/setting';

import  Error from './components/error/dikembangkan';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SafeArea from './components/safeArea/safeArea';


function App() {
  return (
  <div>
<SafeArea />
<Router>
<QuickBar/>
  <div className="warper">
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/jelajah' element={<Error/>} />
        <Route path='/tournament' element={<Error/>} />
        <Route path='/shop' element={<Error/>} />
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/setting' element={<Setting/>}/>
      </Routes>
  </div>
  </Router>
  </div>
  );
}

export default App;