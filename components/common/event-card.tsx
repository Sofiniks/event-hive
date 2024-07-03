'use client'

interface EventCardProps {
  id: string
  title: string
  date: string
  location: string
  imageUrl: string
  isFree?: boolean
}

export const EventCard = ({
  id,
  title,
  date,
  location,
  imageUrl,
  isFree,
}: EventCardProps) => {
  return (
    <div key={id} className='relative bg-white shadow-md rounded-lg p-5'>
      <img
        src={imageUrl}
        alt={title}
        className='w-full h-[240px] object-cover mb-4 rounded-t-lg'
      />
      {isFree && (
        <span className='absolute top-7 left-7 bg-white text-primary text-xs font-semibold px-2 py-1 rounded-md shadow-md'>
          FREE
        </span>
      )}
      <div>
        <h3 className='text-lg font-semibold mb-4'>{title}</h3>
        <p className='text-xs text-primary mb-4'>{date}</p>
        <p className='text-xs text-light-grey'>{location}</p>
      </div>
    </div>
  )
}
