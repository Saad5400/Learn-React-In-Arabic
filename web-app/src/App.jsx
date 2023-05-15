import logo from './logo.svg';
import './App.css';
import Layout from './components/shared/Layout';
import Homepage from './components/home/Homepage';

function App() {
  return (
    <div dir='rtl'>
      <Layout>
        <Homepage />
      </Layout>
    </div>
  );
}

export default App;
