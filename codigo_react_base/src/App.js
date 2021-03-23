import Sidebar from './components/Sidebar';
import MainConent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <MainConent />
        <Footer />
      </div>
    </div>
  );
}

export default App;
