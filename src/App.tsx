import { Route, Routes } from 'react-router';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Layout from './layouts/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
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
