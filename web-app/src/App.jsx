import './App.css';
import Layout from './components/shared/Layout';
import Homepage from './pages/Homepage';
import { useState, useLayoutEffect } from 'react';


function App(props) {

  return (
    <div dir='rtl'>
      <Layout>
        {props.children}
      </Layout>
    </div>
  );
}

export default App;
