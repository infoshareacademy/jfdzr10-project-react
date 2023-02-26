
import './App.css';
import Header from "./components/header/header";
import Content from "./components/content/content";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header title="tytuł"></Header>
      </header>
      <Content content="list"></Content>
    </div>
  );
}

export default App;
