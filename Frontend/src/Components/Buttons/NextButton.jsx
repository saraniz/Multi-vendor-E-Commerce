import React from 'react'

function NextButton() {

  function hello(){
    console.log('Helloo');
  }
  return (
    <div className='flex justify-center'><div className='p-8'>
    <button onClick={hello} className="px-8 py-1 ml-auto font-semibold text-white bg-slate-800 rounded-lg hover:bg-gray-600">
      Next
    </button></div></div>
  )
}

export default NextButton