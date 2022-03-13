import logo from './assets/images/syndio-logo.svg';
import NavBar from './components/NavBar';
import Tabs from './components/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <div>
      <NavBar />
      <Tabs>
        <div label="Gender">
          Gender
        </div>
        <div label="Race">
          Race
        </div>
      </Tabs>
    </div>
  );
}

export default App;
