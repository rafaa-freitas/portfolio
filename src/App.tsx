import { Route, Routes } from 'react-router';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Layout from './layouts/Layout';
import About from './pages/About';
import Toolbox from './pages/Toolbox';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/toolbox" element={<Toolbox />} />
        </Route>
      </Routes>
      {/* <Header></Header>
      <Projects />
      <Home></Home>
      <Footer /> */}
    </>
  );
}

export default App;
