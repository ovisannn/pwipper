import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BrowseVideo from './pages/browseVideo';
import VideoPage from './pages/videoPage';
import Login from './pages/login';
import Register from './pages/register';
import User from './pages/user';

function App() {
  return (
      <Router>
        <Routes>
          <Route path ="" element={<BrowseVideo/>} />
          <Route path ="/login" element={<Login/>} />
          <Route path ="/register" element={<Register/>} />
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
