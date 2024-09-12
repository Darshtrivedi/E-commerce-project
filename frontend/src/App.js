import React from 'react'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'

import Home from './Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Login from './components/Login'
import Signup from './components/Signup'
import ProductDetail from './components/Product-page'

import 'bootstrap/dist/js/bootstrap.bundle.min';





function App() {
  return (
    <div className='main-page'>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              
              
              <Route path="/products/:product_id" element={<ProductDetail/>} />
             
              {/* <Route path="*" element={alert("Page not found")} /> */}
              {/* Add other routes here */}
          </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App;


// New app

// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

// import AppHeader from './components/header';
// import AppHero from './components/hero';
// import AppAbout from './components/about';
// import AppServices from './components/services';
// import AppWorks from './components/works';
// import AppTeams from './components/teams';
// import AppTestimonials from './components/testimonials';
// import AppPricing from './components/pricing';
// import AppBlog from './components/blog';
// import AppContact from './components/contact';
// import AppFooter from './components/footer';

// export default function App() {
//   return (
//     <div className="App">
//       <header id='header'>
//         <AppHeader />
//       </header>
//       <main>
//         <AppHero />
//         <AppAbout />
//         <AppServices />
//         <AppWorks />
//         <AppTeams />
//         <AppTestimonials />
//         <AppPricing />
//         <AppBlog />
//         <AppContact />
//       </main>
//       <footer id="footer">
//         <AppFooter />
//       </footer>
//     </div>
//   );
// }

