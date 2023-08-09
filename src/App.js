import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BrowseVideo from './pages/browseVideo/browseVideo';
import VideoPage from './pages/videoPage/videoPage';
import Login from './pages/login/login';
import Register from './pages/register/register';
import User from './pages/user/user';
import InvalidCredential from './pages/login/invalidCredential';

function App() {
  return (
      <Router>
        <Routes>
          <Route path ="" element={<BrowseVideo/>} />
          <Route path ="/login" element={<Login/>} />
          <Route path ="/register" element={<Register/>} />
          <Route path="/invalidCredential" element={<InvalidCredential/>} />
          <Route path="video">
            <Route path=':id' element={<VideoPage/>}/>
          </Route>
          <Route path="user">
            <Route path=':username' element={<User/>}/>
          </Route>
        </Routes>
      </Router>
  );
}

export default App;
