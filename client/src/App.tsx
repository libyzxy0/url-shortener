import { Routes, Route } from "react-router-dom";
import Main from "@/pages/Main";
import { Toaster } from 'react-hot-toast'

export default function App() {
  return (
    <>
    <Toaster 
    position="top-right"
    reverseOrder={false} />
    <Routes>
      <Route index element={<Main />} />
    </Routes>
    </>
  );
}