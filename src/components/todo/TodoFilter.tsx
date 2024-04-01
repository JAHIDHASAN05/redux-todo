import React, { useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { useAppDispatch } from '@/redux/hooks';
import { handler } from 'tailwindcss-animate';
import { todoFilterByPriotrity } from '@/redux/feature/todoSlice';

const TodoFilter = () => {
    const [position, setPosition] = useState("High")
    
    const dispatch= useAppDispatch()
    const handlerPriority=(selectedValue)=>{
      console.log(selectedValue, "filter valu setitin");
     dispatch(todoFilterByPriotrity(selectedValue))
    }
    return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Filter</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Filter By Priyority</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position}  onValueChange={setPosition}  >
            <DropdownMenuRadioItem onClick={()=>handlerPriority('High')} value="High">High</DropdownMenuRadioItem>
            <DropdownMenuRadioItem onClick={()=>handlerPriority('Medium')} value="Medium">Medium </DropdownMenuRadioItem>
            <DropdownMenuRadioItem onClick={()=>handlerPriority('Low')} value="Low">Low</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
};

export default TodoFilter;