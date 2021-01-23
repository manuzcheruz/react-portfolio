import './App.css';
import Aux from './hoc/Aux';
import Layout from './components/Layout/Layout';

function App() {
  // setInterval(() => {
  //   const year = new Date().getFullYear()
  // }, 1000000)
  return (
    <div className="App">
      <Aux>
        <Layout />
      </Aux>
    </div>
  );
}

export default App;
