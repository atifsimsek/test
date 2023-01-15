import Header from "./components/Header";
import Form from "./components/Form";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import List from "./components/List";
import EditModal from "./components/EditModal";

function App() {
  return (
    <>
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
