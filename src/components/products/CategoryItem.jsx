import { Checkbox } from "@/components/ui/checkbox"
import React, {useState} from "react"


export const CheckboxItem = ({ tag, count }) => {

      const [isChecked, setIsChecked] = useState(false)

      const handleChecboxChange = (checked) => {
        setIsChecked(checked)
      }

  return (
    <label 
      htmlFor={tag} 
      className={`
        w-full m-0.5 flex items-center 
        cursor-pointer group
        ${isChecked ? "text-blue-800" : ""}
        `}>

      <div className="w-full flex flex-row items-center cursor-pointer ">
        <Checkbox 
          id={tag} 
          checked={isChecked}
          onCheckedChange={handleChecboxChange}
          className="
            transition-colors
          data-[state=checked]:bg-blue-400
          data-[state=checked]:border-blue-400
          "/>

        <div 
          className={`
            flex justify-between flex-1 mt-0.5
          `}>

          <span 
            className={`
              ml-3 transition-colors font-medium
              ${isChecked ? 'text-blue-800' : 'text-gray-500 group-hover:text-blue-800'}
            `}>
              {tag}
          </span>

          <span 
            className={`
              rounded-full px-2 mr-4 font-medium
              ${isChecked ? 'bg-blue-400 text-white' : 'bg-gray-200 group-hover:bg-blue-400 group-hover:text-white'}
            `}>
              {count}
          </span>
        </div>
      </div>
    </label>
  )
}