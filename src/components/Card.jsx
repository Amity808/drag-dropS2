import React from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

const Card = ({ item }) => {
    const { attributes,
      listeners,
      setNodeRef,
      transform,
      transition
    } = useSortable({ id: item.id })

    const style = {
      transition,
      transform: CSS.Transform.toString(transform)
    }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
        <div>
            <img src={item.image} width={200} height={200} />
        </div>
        <div className=' text-white'>
            <p>{item.name}</p>
            <div>
                <p>Shot by</p>
                <p>From tap</p>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Card
