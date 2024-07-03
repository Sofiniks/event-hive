'use client'
import { EventCard } from '../common/event-card'

const events = [
  {
    id: '1',
    title:
      'BestSeller Book Bootcamp - write, Market & Publish Your Book - Lucknow',
    date: 'Saturday, March 18, 9:30PM',
    location: 'ONLINE EVENT - Attend anywhere',
    imageUrl: '/images/event1.png',
    isFree: true,
  },
  {
    id: '2',
    title:
      'BestSeller Book Bootcamp - write, Market & Publish Your Book - Lucknow',
    date: 'Saturday, March 18, 9:30PM',
    location: 'ONLINE EVENT - Attend anywhere',
    imageUrl: '/images/event1.png',
    isFree: false,
  },
  {
    id: '3',
    title:
      'BestSeller Book Bootcamp - write, Market & Publish Your Book - Lucknow',
    date: 'Saturday, March 18, 9:30PM',
    location: 'ONLINE EVENT - Attend anywhere',
    imageUrl: '/images/event1.png',
    isFree: true,
  },
  {
    id: '4',
    title:
      'BestSeller Book Bootcamp - write, Market & Publish Your Book - Lucknow',
    date: 'Saturday, March 18, 9:30PM',
    location: 'ONLINE EVENT - Attend anywhere',
    imageUrl: '/images/event1.png',
    isFree: true,
  },
  {
    id: '5',
    title:
      'BestSeller Book Bootcamp - write, Market & Publish Your Book - Lucknow',
    date: 'Saturday, March 18, 9:30PM',
    location: 'ONLINE EVENT - Attend anywhere',
    imageUrl: '/images/event1.png',
  },
  {
    id: '6',
    title:
      'BestSeller Book Bootcamp - write, Market & Publish Your Book - Lucknow',
    date: 'Saturday, March 18, 9:30PM',
    location: 'ONLINE EVENT - Attend anywhere',
    imageUrl: '/images/event1.png',
    isFree: true,
  },
]

export const EventsSection = () => {
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value)
  }

  return (
    <section className='mb-[80px]'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center mb-8'>
          <h2 className='text-3xl font-bold text-gray-900'>
            Upcoming <span className='text-primary'>Events</span>
          </h2>
          <div className='flex space-x-4'>
            <select
              className='bg-white text-gray-900 border border-gray-300 py-2 px-4 rounded-md'
              onChange={handleFilterChange}
            >
              <option>Weekdays</option>
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
              <option>Saturday</option>
              <option>Sunday</option>
            </select>
            <select
              className='bg-white text-gray-900 border border-gray-300 py-2 px-4 rounded-md'
              onChange={handleFilterChange}
            >
              <option>Event type</option>
              <option>Workshop</option>
              <option>Seminar</option>
              <option>Conference</option>
              <option>Meetup</option>
            </select>
            <select
              className='bg-white text-gray-900 border border-gray-300 py-2 px-4 rounded-md'
              onChange={handleFilterChange}
            >
              <option>Any category</option>
              <option>Business</option>
              <option>Technology</option>
              <option>Health</option>
              <option>Education</option>
              <option>Entertainment</option>
            </select>
          </div>
        </div>

        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {events.map(event => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
        <div className='text-center mt-8'>
          <button className='bg-primary text-white py-2 px-6 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500'>
            Load more...
          </button>
        </div>
      </div>
    </section>
  )
}
