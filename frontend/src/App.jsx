import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner"; 
import "@/App.css";
import Home from "@/pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" richColors />
    </div>
  );
}

export default App;