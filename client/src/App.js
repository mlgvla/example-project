import { BrowserRouter, Routes, Route } from "react-router-dom"
import Test from "./Test"
import PageCount from "./PageCount"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/testing" element={<Test />} />
          <Route path="/" element={<PageCount />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
