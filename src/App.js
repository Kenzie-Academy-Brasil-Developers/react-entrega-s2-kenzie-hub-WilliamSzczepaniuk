import logo from './logo.svg';
import './App.css';
import Routes from './routes';
import GlobalStyle from './styles/global'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
/>
        <ToastContainer />
      <GlobalStyle/>
      <Routes/>
    </>
  );
}

export default App;
