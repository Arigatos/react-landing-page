import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'assets/scss/main.scss';
import Landing from 'views/landing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
