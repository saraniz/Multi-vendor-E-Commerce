import React from 'react'

function FollowerCard() {
  return (
    <div className='flex justify-center'><div className="flex items-center p-4 max-w-7xl">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpyiXYQlJYE6rBuS5BqGgFtNZmDvfjF5snFw&s" 
      alt="Profile"
      className="w-20 h-20 rounded-full"
    />
    <div className="ml-4">
      <h2 className="text-xl font-semibold">Kaveeee Fashion</h2>
      <p className="text-sm text-gray-500">1.3k followers</p>
    </div>
    <div className='p-8'>
    <button className="px-8 py-1 ml-auto font-semibold text-white bg-black rounded-lg hover:bg-gray-800">
      Follow
    </button></div>
  </div></div>
  )
}

export default FollowerCard