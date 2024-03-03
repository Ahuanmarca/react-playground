// import React from "react";
import useToggle from '../../hooks/use-toggle';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Home from '../../pages/Home';
import KeyboardInput from '../../pages/KeyboardInput';
import MousePosition from '../../pages/MousePosition';
import SortableTable from '../../pages/SortableTable';
import ClickCounter from '../../pages/ClickCounter';
import DriftingTimers from '../../pages/DriftingTimers';
import LoginForm from '../../pages/LoginForm';
import LanguageSelector from '../../pages/LanguageSelector';
import LoginModal from '../../components/LoginModal';
import GameList from '../GameList';

import AudioPlayer from '../../pages/ReactHooks/StaleValues/AudioPlayer';
import FetchingOnEvent from '../../pages/ReactHooks/DataFetching/FetchingOnEvent';
import FetchingOnMount from '../../pages/ReactHooks/DataFetching/FetchingOnMount';
import ProgrammingJokes from '../../pages/ReactHooks/DataFetching/ProgrammingJokes';
import BookSearch from '../../pages/ReactHooks/DataFetching/BookSearch';

function App() {
  const [showLoginModal, toggleShowLoginModal] = useToggle(false);

  return (
    <>
      <Navbar showLoginModal={toggleShowLoginModal} />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div className="mt-3" style={{ paddingLeft: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/keyboardinput" element={<KeyboardInput />} />
            <Route path="/showmouseposition" element={<MousePosition />} />
            <Route path="/sortabletable" element={<SortableTable />} />
            <Route path="/clickcounter" element={<ClickCounter />} />
            <Route path="/driftingtimers" element={<DriftingTimers />} />
            <Route path="/loginform" element={<LoginForm />} />
            <Route path="/languageselector" element={<LanguageSelector />} />
            <Route path="/gamelist" element={<GameList />} />
            <Route path="/fetchingonevent" element={<FetchingOnEvent />} />
            <Route path="/fetchingonmount" element={<FetchingOnMount />} />
            <Route path="/programmingjokes" element={<ProgrammingJokes />} />
            <Route path="/booksearch" element={<BookSearch />} />
            <Route path="/audioplayer" element={<AudioPlayer />} />
          </Routes>
        </div>
      </div>
      {showLoginModal && <LoginModal handleDismiss={toggleShowLoginModal} />}
    </>
  );
}

export default App;
