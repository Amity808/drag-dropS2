import Card from "./Card";
import { useState } from "react";
import { data } from "../data";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  horizontalListSortingStrategy,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import SearchBar from "./Search";

export default function ({ searchQuery }) {
  // console.log(data)
  const [itemData, setItemData] = useState(data);

  const onDragEnd = (event) => {
    // console.log('onDragEnd', event)
    const { active, over } = event;
    if (active.id === over.id) {
      return;
    }
    setItemData((itemData) => {
      const dragedIndex = itemData.findIndex((item) => item.id === active.id);
      const currentIndex = itemData.findIndex((item) => item.id === over.id);
      return arrayMove(itemData, dragedIndex, currentIndex);
    });
  };

  const itemNames = itemData.map((item) => item.name);

//   if(searchQuery != "" && !itemNames.toLocaleString().includes(
//     searchQuery.toLocaleLowerCase().trim())) {
//         return null;
//     }

if (searchQuery !== "") {
    const lowerCaseSearchQuery = searchQuery.toLocaleLowerCase().trim();
    console.log('Lowercase Search Query:', lowerCaseSearchQuery); // Debugging statement
    const matchingItems = itemNames.filter((itemName) =>
      itemName.toLocaleLowerCase().includes(lowerCaseSearchQuery)
    );
  
    console.log('Matching Items:', matchingItems); // Debugging statement
  
    if (matchingItems.length === 0) {
      return null; // No matching items found
    }
    
    return matchingItems; // Return the matching items
  } 



  return (
    <div className=" py-[98px] px-[90px]">
      <div className="flex flex-row items-center justify-between">
        <p className=" text-[36px] font-bold text-white mb-8">View Gallery</p>
      </div>
      <div className=" m-5 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 mt-3">
        <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
          <SortableContext
            items={itemData}
            strategy={horizontalListSortingStrategy}
          >
            {itemData.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}
