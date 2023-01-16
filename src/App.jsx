import Header from "./components/Header";
import Form from "./components/Form";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import List from "./components/List";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
        className="toast"
      />
      <div className="container">
        <Header />
        <Form />
        <Filter />
        <List />
      </div>
      <Footer />
    </>
  );
}

export default App;
