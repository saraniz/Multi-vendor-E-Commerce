import React from 'react'

function NextButton() {

  function hello(){
    console.log('Helloo');
  }
  return (
    <div className='flex justify-center'>
  <div className='p-10'>
    <button
      onClick={hello}
      className="px-12 py-3 text-lg font-semibold text-white rounded-xl bg-slate-800 hover:bg-gray-600"
    >
      View More
    </button>
  </div>
</div>

  )
}

export default NextButton