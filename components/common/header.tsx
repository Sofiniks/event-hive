import Link from 'next/link'

export const Header = () => {
  return (
    <header className='mb-7'>
      <div className='container mx-auto py-4'>
        <div className='flex justify-between items-center '>
          <div className='text-2xl font-bold text-purple-600'>Event Hive</div>
          <div>
            <Link href='/login' className='mr-4 text-gray-700'>
              Login
            </Link>
            <Link
              href='/signup'
              className='px-4 py-2 bg-purple-600 text-white rounded'
            >
              Signup
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
