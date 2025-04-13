import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react";

export const ViewOptions = () => {

  const [selectedOrder, setSelectedOrder] = useState("Últimos productos");

  return (
    <div className="m-2 w-4/5 px-4 border-1 flex items-center justify-between">

      <Select value={selectedOrder} onValueChange={setSelectedOrder}>
        <SelectTrigger className="w-[200px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Últimos productos">Últimos productos</SelectItem>
          <SelectItem value="Mejor vendidos">Mejor vendidos</SelectItem>
        </SelectContent>
      </Select>

      <span>Mostrando 10 de 20 productos</span>
      {/* Añadir buttons */}
    </div>
  );
}