import logo from './logo.svg';
import './App.css';

import OrdersApp from './OrdersApp';
import AllRoutes from './routes/routes'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <AllRoutes/>
      </div>
    </Router>
  );
}

export default App;
