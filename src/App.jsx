import { useState } from 'react';
import { Navbar, About, Experiance, Projects, ProjectDetails, Call, Contact, Footer } from './components/export';
import { Toaster } from 'react-hot-toast';
import Testimonials from './components/Testimonials/Testimonials';

const App = () => {
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <div className='container'>
      <Navbar />
      <About />
      <Testimonials />
      <Projects openModal={openModal} setOpenModal={setOpenModal} />
      <Experiance />
      <Call />
      <Contact />
      <Footer />

      <Toaster />

      {openModal.state && <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />}
    </div>
  )
}

export default App;