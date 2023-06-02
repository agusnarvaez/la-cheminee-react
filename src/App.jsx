import { Suspense, lazy } from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const Home = lazy(()=>import("./components/Home/Home"))

export default function App() {
  return (
    <Suspense fallback={<div className="loading">Cargando...</div>}>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

      </BrowserRouter>
    </Suspense>
  )
}


