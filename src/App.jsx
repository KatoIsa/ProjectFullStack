import { Home, HtmlBasics } from './Pages'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Basics-Html' element={<HtmlBasics />} />
      </Routes>
    </div>
  )
}

export default App
