import Card from "./Card";
import { useState, useEffect } from "react";
// import { data } from "../data";
import { toast } from "react-toastify"
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  TouchSensor,
  MouseSensor,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import axios from "axios";

export default function () {
  const [searchQuery, setsearchQuery] = useState("Food");
//   const [isLoading, setIsLoading] = useState(true);
  const [itemData, setItemData] = useState([]);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const onDragEnd = (event) => {
    // console.log('onDragEnd', event)
    const { active, over } = event;
    if (active.id === over.id) {
      return;
    }
    setItemData((itemData) => {
      const dragedIndex = itemData.findIndex((item) => item.id === active.id);
      const currentIndex = itemData.findIndex((item) => item.id === over.id);
      return arrayMove(itemData, dragedIndex, currentIndex).map(
        (item, index) => ({
          ...item,
          order: index,
        })
      );
    });
  };


  const fetchImages = async () => {
    try {
      const { data } = await axios.get(
        `https://api.unsplash.com/search/photos?page=1&query=${searchQuery}&client_id=UrO6Tp7KIBg7H_n1tuCujE_JFo06R3COdYrYwsKbpBA`
      );

      setTimeout(() => {
      }, 3000);

      const returnData = data.results.map((image, index) => ({
        ...image,
        id: image.id.toString(),
        order: index,
      }));

      setItemData(returnData);
    } catch (error) {
      console.error( error)
      toast.error(`${error}`)
    }
  };

  useEffect(() => {
    fetchImages();
    setsearchQuery("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = () => {
    fetchImages();
    setsearchQuery("");
  };

  return (
    <div className=" py-[98px] px-[90px]">
      <div className=" mt-20 mb-7 flex items-center rounded-sm justify-center max-sm:ml-16">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setsearchQuery(e.target.value)}
          placeholder=" Search Image"
          className=" text-base font-normal border-none text-black bg-white h-[40px]  w-[525px] max-sm:w-[200px] max-md:w-[250px] pl-3 max-sm:pl-0 rounded-lg"
          
        />
        <button onClick={handleSearch} className=" ml-3 p-2 rounded-lg text-white hover:bg-white hover:text-black">Search</button>
        
      </div>
      <div className="flex flex-row items-center justify-between">
        <p className=" text-[36px] font-bold text-white mb-8">View Gallery</p>
      </div>
      <div className=" m-5 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 mt-3">
        <DndContext 
        sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={onDragEnd}
        >
          <SortableContext
            items={itemData}
            strategy={verticalListSortingStrategy}
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
