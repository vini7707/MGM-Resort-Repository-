import './App.css';
import ValueCount from './stateChange/ValueCount';
// import ApicallFun from './component/ApicallFun';
// import Apicall from './component/Apicall';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MGM React Application</h1>
        {/* <Apicall/> */}
        {/* <ApicallFun/> */}
        <ValueCount/>
      </header>
    </div>
  );
}

export default App;
