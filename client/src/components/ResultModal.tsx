import { Download, Forward, Copy, X } from 'lucide-react'
import { useState } from 'react'
import type { URLData } from '@/types'

type ResultModalProps = {
  handleClose: () => void;
  open: boolean;
  data: URLData;
}

export default function ResultModal({ handleClose, open, data }: ResultModalProps) {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = async () => {
    if (!copied && data) {
      try {
        await navigator.clipboard.writeText(data.shortened);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 3000);
      } catch (err) {
        console.error("Error copying text to clipboard: ", err);
      }
    }
  };
  
  const handleShare = async (): Promise<void> => {
    if (navigator.share && data) {
      try {
        await navigator.share({
          title: "ShortRL Share",
          text: `ShortRL Share:\n`,
          url: data.shortened,
        });
        console.log("Successfully shared");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      console.log("Web Share API not supported");
    }
  };
  
  return (
    <div className={`fixed z-40 w-full h-screen bg-black bg-opacity-40 flex justify-center items-center ${open ? 'scale-100' : 'scale-0'}`}>
      <div className={`bg-white rounded-lg w-[90%] md:w-[22rem] py-3 px-4 text-gray-800 border-t-8 border-emerald-400 transition-all duration-200 ${open ? 'scale-100' : 'scale-0'}`}>
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-xl font-bold">ShortRL Generated 🚀</h1>
          <button onClick={handleClose} className="border-none bg-none p-2 text-gray-600 hover:text-emerald-400">
          <X />
        </button>
        </div>
        <div className="flex justify-center items-center mt-5 flex-col">
          <img src={data?.qr_code} alt="QR" />
          <div className="w-full h-0 border border-gray-200 my-5 mx-20"></div>
          <input type="url" value={data?.shortened} className ="outline-none border-none py-3 px-4 rounded-lg w-full md:py-4 text-emerald-400 ring-1 ring-emerald-400" disabled />
          <div className="mt-7 mb-4 w-full space-y-4">
            <div className="grid grid-cols-2 space-x-2">
            <button onClick={handleShare} className="bg-emerald-400 py-3 px-4 text-white rounded-lg hover:bg-emerald-400/90 transition-all duration-300 flex justify-center items-center flex-row space-x-2">
            <Forward className="h-5 w-5"/>
            <span>Share</span>
            </button>
            <button className="bg-gray-800 py-3 px-4 text-white rounded-lg hover:bg-gray-800/90 transition-all duration-300 flex justify-center items-center flex-row space-x-2">
            <Download className="h-5 w-5" />
            <span>Download</span>
            </button>
            </div>
            <button onClick={handleCopy} className="bg-gray-800 py-3 px-4 w-full text-white rounded-lg hover:bg-gray-800/90 transition-all duration-300 flex justify-center items-center flex-row space-x-2">
            {copied ? (
              <span>Copied!</span>
            ) : (
            <>
              <Copy className="h-5 w-5" />
              <span>Copy URL</span>
            </>
             )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}