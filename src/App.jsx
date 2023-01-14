import Header from "./components/Header";
import Form from "./components/Form";
import Filter from "./components/Filter";
import List from "./components/List";
import TableMuı from "./components/TableMuı";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Form />
        <Filter />
        {/* <List /> */}
        <TableMuı />
        <Footer />
      </div>
    </>
  );
}

export default App;
