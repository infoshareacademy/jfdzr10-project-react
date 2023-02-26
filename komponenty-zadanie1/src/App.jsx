 import './App.css'
 import Header from './components/header'
 import Content from './components/content'
 import Footer from './components/footer'
 import List from './components/list'

function App() {

  return (
    <div className="App">

      <Header text="persons:"></Header>

      <Content><List /></Content>

      <Footer text='Copyright 2023. Wszystkie prawa zastrzeżone.'></Footer>

    </div>
  )
}

export default App
