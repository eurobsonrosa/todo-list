import Button from '../components/Button';
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const teste = () => {
    return alert("Ok!")
  }
  return (
    <div className="App">
     <Button name="warning" icon="pencil" onclick={teste}/>
    </div>
  );
}

export default App;
