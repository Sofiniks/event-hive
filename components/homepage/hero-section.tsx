export const HeroSection = () => {
  return (
    <section className='h-screen mb-[90px]'>
      <div className='absolute inset-0'>
        <div className='container mx-auto h-full relative'>
          <div className="absolute inset-0 bg-[url('/images/heroSection.png')] bg-cover bg-center h-[80vh]">
            <div className='absolute inset-0 bg-black opacity-50'></div>
          </div>
        </div>
      </div>
      <div className='relative z-10 container mx-auto flex flex-col items-center justify-end h-full px-4 lg:px-8'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-6xl font-bold text-white mb-8'>
            MADE FOR THOSE WHO DO
          </h1>
        </div>
        <form className='bg-blue-700 p-6 rounded-md shadow-md w-full max-w-4xl mx-auto mb-10'>
          <div className='flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4'>
            <div className='flex flex-col w-full'>
              <label className='text-sm font-medium text-gray-300'>
                Looking for
              </label>
              <select className='mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'>
                <option>Choose event type</option>
                <option>Workshop</option>
                <option>Webinar</option>
                <option>Conference</option>
                <option>Networking</option>
                <option>Seminar</option>
              </select>
            </div>
            <div className='flex flex-col w-full'>
              <label className='text-sm font-medium text-gray-300'>
                Location
              </label>
              <select className='mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'>
                <option>Choose location</option>
                <option>New York</option>
                <option>San Francisco</option>
                <option>Los Angeles</option>
                <option>Chicago</option>
                <option>Miami</option>
              </select>
            </div>
            <div className='flex flex-col w-full'>
              <label className='text-sm font-medium text-gray-300'>When</label>
              <select className='mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'>
                <option>Choose date and time</option>
                <option>This Week</option>
                <option>This Month</option>
                <option>Next Month</option>
                <option>This Year</option>
                <option>Next Year</option>
              </select>
            </div>
            <button
              type='submit'
              className='mt-4 md:mt-0 md:ml-4 px-6 py-2 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500'
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

// export const HeroSection = () => {
//     return (
//         <section className="h-[80vh]">
//             <div className="container mx-auto relative ">
//                 <div className="bg-[url('/images/heroSection.png')] bg-cover bg-center h-[80vh]"/>
//                 <div className="absolute inset-0 z-10">
//                     <h1 className="text-white">Made for those who do</h1>
//                 </div>
//             </div>
//         </section>
//     )
// }
