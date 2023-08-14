import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BrowseVideo from './pages/browseVideo/browseVideo';
import VideoPage from './pages/videoPage/videoPage';
import Login from './pages/login/login';
import Register from './pages/register/register';
import User from './pages/user/user';
import InvalidCredential from './pages/login/invalidCredential';
import SearchPage from './pages/search/search';
import RegisterSuccess from './pages/register/registerSuccess'

function App() {
  return (
      <Router>
        <Routes>
          <Route path ="" element={<BrowseVideo/>} />
          <Route path ="/login" element={<Login/>} />
          <Route path ="/register" element={<Register/>} />
          <Route path ="/registerSuccess" element={<RegisterSuccess/>} />
          <Route path="/invalidCredential" element={<InvalidCredential/>} />
          <Route path="video">
            <Route path=':videoId' element={<VideoPage/>}/>
          </Route>
          <Route path="user">
            <Route path=':username' element={<User/>}/>
          </Route>
          <Route path="search" element={<SearchPage/>}>
            <Route path=':searchParam' element={<SearchPage/>}/>
          </Route>
        </Routes>
      </Router>
  );
}

export default App;
