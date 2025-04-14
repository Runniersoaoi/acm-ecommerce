import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react";

export const ViewOptions = () => {

  const [selectedOrder, setSelectedOrder] = useState('Últimos productos');
  
  const [selectedView, setSelectedView] = useState('gridView');

  return (
    <div className="m-2 w-4/5 px-4 bg-white rounded-md flex items-center justify-between">
      <div className="flex items-center">
        <Select value={selectedOrder} onValueChange={setSelectedOrder}>
          <SelectTrigger className="w-[200px] text-gray-700">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Últimos productos">Últimos productos</SelectItem>
            <SelectItem value="Mejor vendidos">Mejor vendidos</SelectItem>
          </SelectContent>
        </Select>

        <span className="m-4">Mostrando 10 de 52 productos</span>
      </div>
      
      <div className="flex gap-2">
        <div onClick={() => setSelectedView('gridView')}
          className={`hover:bg-blue-800 hover:text-white cursor-pointer rounded-md transition-colors
            ${selectedView === 'gridView' 
              ? 'bg-blue-800 text-white' 
              : 'bg-white text-gray-700'}
            `}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 mx-2.5 m-1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
          </svg>
        </div>

        <div onClick={() => setSelectedView('listView')}
            className={`hover:bg-blue-800 hover:text-white cursor-pointer rounded-md transition-colors
            ${selectedView === 'listView' 
              ? 'bg-blue-800 text-white' 
              : 'bg-white text-black'}
            `}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 mx-2.5 my-1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}