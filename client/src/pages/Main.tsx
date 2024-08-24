import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ResultModal from '@/components/ResultModal'
import AboutSection from '@/sections/AboutSection'
import { Clipboard, CircleFadingPlus } from 'lucide-react'
import { useState } from 'react'


export default function App() {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");
  
  const handlePaste = async () => {
    try {
      if(!navigator) {
        console.log("Unavailable navigator clipboard feature.")
      }
      const clipboard = await navigator.clipboard.readText();
      setUrl(clipboard);
    } catch (error: any) {
      console.error("Error:", error)
    }
  }
  
  return (
    <>
      <ResultModal open={open} handleClose={() => setOpen(false)} />
      <Navbar />
      <section className="bg-white">
      <div className="bg-[url('/15441912_5591513.svg')] bg-cover w-full py-12 md:py-16 text-center flex justify-center items-center flex-col space-y-3 md:space-y-4">
        <h1 className="text-gray-800 font-bold text-4xl md:text-5xl font-amsterdam">URL Shortener</h1>
        <p className="text-gray-800 md:text-lg">Easy to use URL Shortener, paste your link and get shortened one.</p>

        <div className="w-full md:w-[80%] flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-2 pt-2">
          <div className="w-[90%] md:w-[27rem] relative">
             <input 
             type="url"
            className="outline-none border-none py-3 px-4 rounded-lg w-full md:py-4 text-gray-800 ring-0 focus-visible:ring-2 focus-visible:ring-gray-700" 
            placeholder="Paste your long link here." 
            onChange={(e) => setUrl(e.target.value)}
            value={url}
            />
            <button onClick={handlePaste} className="absolute right-1.5 md:right-2.5 py-2 px-3 bg-emerald-400/20 top-1 md:top-2 rounded text-emerald-400 flex flex-row items-center space-x-1">
            <Clipboard className="w-4 h-4" />
            <span className="text-[16px]">Paste</span>
            </button>
          </div>
          <button 
            onClick={() => setOpen(true)}
            className="bg-gray-800 py-3 md:py-4 rounded w-[90%] md:w-auto text-white hover:bg-gray-800/90 transition-all duration-300 md:px-6 flex flex-row items-center justify-center space-x-2"
          >
            <CircleFadingPlus />
            <span>Generate</span>
          </button>
        </div>
      </div>
      </section>
      <AboutSection />
      <Footer />
    </>
  );
}
