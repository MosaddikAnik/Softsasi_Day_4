import './App.css'
import Footer from './Component/Footer';
import Header from './Component/Header';
import Menu from './Component/Menu';
import Sidebar from './Component/Sidebar';

function Dashboard() {

  return (
    <>
     <div className=''>
      <Header />
     <div className='flex'>
       <Sidebar/>
      <Menu/>
     </div>
      <Footer/>
     </div>
    </>
  )
}

export default Dashboard;
