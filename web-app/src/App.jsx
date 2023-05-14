import logo from './logo.svg';
import './App.css';
import Layout from './components/shared/Layout';

function Sample() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="text-center hero-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            رياكت بالعربي react<br />
            رياكت بالعربي react<br />
            رياكت بالعربي react<br />
            رياكت بالعربي react<br />
            رياكت بالعربي react<br />
            رياكت بالعربي react<br />
            رياكت بالعربي react<br />
            رياكت بالعربي react<br />
            رياكت بالعربي react<br />
            رياكت بالعربي react<br />
            رياكت بالعربي react<br />
            رياكت بالعربي react<br />
            رياكت بالعربي react<br />
            رياكت بالعربي react<br />
            رياكت بالعربي react<br />
            رياكت بالعربي react<br />
            رياكت بالعربي react<br />
            رياكت بالعربي react<br />
            رياكت بالعربي react<br />
            رياكت بالعربي react<br />
            رياكت بالعربي react<br />

          </h1>
          <p className="mb-5">
            تعلم رياكت باللغة العربية
          </p>
          <button className="btn btn-primary">تعلم الآن</button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div dir='rtl'>
      <Layout>
        <Sample />
      </Layout>
    </div>
  );
}

export default App;
