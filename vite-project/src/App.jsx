/* eslint-disable no-unused-vars */
import { Routes, Route } from 'react-router-dom'
import BotSpecsPage from './pages/BotSpecsPage'
import NotFoundPage from './pages/NotFoundPage'
import BotPage from './pages/BotsPage'

// TODO: import Routes and Route

const App = () => {

  // TODO: Render Routes with a Route for:
  // - BotPage when the URL matches "/"
  // - BotSpecsPage when the URL matches "/robots/:id"
  // - NotFoundPage when the URL doesn't match either of the above URLs

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<BotPage />} />
        <Route path='/robots/:id' element={<BotSpecsPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      {/* <BotPage /> */}
    </div>
  );
}

export default App;
