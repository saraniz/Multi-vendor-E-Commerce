import React from 'react'

function NextButton() {

  function hello(){
    console.log('Helloo');
  }
  return (
    <div className='flex justify-center'>
  <div className='p-8'>
    <button
      onClick={hello}
      className="px-12 py-3 text-lg font-semibold text-white rounded-lg bg-slate-800 hover:bg-gray-600"
    >
      Next
    </button>
  </div>
</div>

  )
}

export default NextButton