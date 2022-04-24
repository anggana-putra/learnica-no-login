import './App.css';

import HomePage from './components/HomePage/homePage';
import QuickBar from './components/quickBar';
// import Jelajah from './components/jelajah/jelajah';
import Tournament from './components/tournament/tournament';
// import Shop from './components/shop/shop';
import Profile from './components/profile/profile';
import Setting from './components/setting/setting';
import  Error from './components/error/dikembangkan';
import SimoOne from './components/simulasiMode/simoPageOne';
import BabKimia from './components/simulasiMode/kimia/babKimia';
import BabOne from  './components/simulasiMode/kimia/babOne';
import SimulasiModeOne from './components/simulasiMode/kimia/simulasiModeOne'


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
        <Route path='/simulasiMode' element={<SimoOne/>} />
        <Route path='/' element={<HomePage/>} />
        <Route path='/jelajah' element={<Error/>} />
        <Route path='/tournament' element={<Tournament/>} />
        <Route path='/shop' element={<Error/>} />
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/setting' element={<Setting/>}/>
        <Route path='/stem-code' element={<Error/>} />
        <Route path='/stem-kimia' element={<BabKimia/>} />
        <Route path='/stem-astro' element={<Error/>} />
        <Route path='/stem-fisika' element={<Error/>} />
        <Route path='/babKimia-one' element={<BabOne/>} />
        <Route path='/simulasi-test-bab-on' element={<SimulasiModeOne/>} />
      </Routes>
  </div>
  </Router>
  </div>
  );
}

export default App;