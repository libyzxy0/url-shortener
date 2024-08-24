import { AlignJustify } from 'lucide-react'
import Logo from '@/assets/shortrl_logo.svg'

export default function Navbar() {
  return (
    <nav className="bg-white w-full flex flex-row justify-between items-center px-6 h-16 sticky top-0 border-b border-gray-300 z-30">
      <div className="flex flex-row items-center space-x-2">
       <img src={Logo} alt="Logo" className="h-10 w-10" />
       <h1 className="text-3xl font-bold text-gray-800"><i className="font-amsterdam text-emerald-400">Short</i><i className="font-amsterdam text-gray-800">RL</i></h1>
      </div>
      <div>
        <button className="border-none bg-none p-2 text-gray-800">
          <AlignJustify />
        </button>
      </div>
    </nav>
  )
}