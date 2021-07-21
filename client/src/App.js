import './App.scss';
import { TopBar } from "./components/top.bar/top.bar.component"
import { LandingPage } from './components/landingPage/landing.page.component'

function App() {
  return (
    <div className="App">
   
       <TopBar />
        <div className="sections">
        <LandingPage />
        </div>
      </div>
  );
}

export default App;
