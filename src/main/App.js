import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Table from '../components/Table';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import Form from '../components/Form';
import Button from '../components/Button';

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Form>
            <Button name="primary" icon="plus"/>
        </Form>
      <Table/>
      <Footer/>
    </div>
  );
}

export default App;
