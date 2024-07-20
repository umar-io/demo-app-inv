import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing"
import PageNotFound from "./pages/PageNotFound";

export default function Main(){
  return(
    <main>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </main>
  )
}