import './App.css';
import Aux from './hoc/Aux';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Aux>
        <Layout />
      </Aux>
    </div>
  );
}

export default App;
