import './App.scss';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Story from './pages/Story';
import { useMemo, useState } from 'react';
import Footer from './components/Footer';

const App = () => {

  const [pages, setPages] = useState([
    { id: 1, title: 'Story', active: true }, 
    { id: 2, title: 'Products', active: false }, 
    { id: 3, title: 'Collections', active: false }
  ])

  const activePage = useMemo(() => {
    return pages.find(page => page.active)
  },[pages])


  return (
    <div>
      <Header pages={pages} setPages={setPages} activePage={activePage}/>
      {activePage.title === "Story" && <Story />}

      <Footer />
    </div>
  );
}

export default App;
// <BrowserRouter>
    //   <Routes>
    //     <Route path='' element={<Header />}>
    //       <Route path='/story' element={<Story />}/>
    //       <Route path='/products' element={<h1>products</h1>}/>
    //       <Route path='/collections' element={<h1>collections</h1>}/>
    //     </Route>
    //   </Routes>
    // </BrowserRouter>