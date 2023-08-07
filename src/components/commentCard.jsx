import React from 'react'

const commentCard = ( {comment} ) => {
  const today = new Date(comment.date);
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

  const formattedToday = dd + '/' + mm + '/' + yyyy;

  return (
    <div className='flex flex-col m-5 p-3 h-auto rounded-lg bg-[#26282D] text-white divide-y divide-[#464646]'>
      <div className="flex flex-row justify-between font-bold my-1">
        <div>
          <p>{comment.username}</p>
        </div>
        <div>
          <p>{formattedToday}</p>
        </div>
      </div>
      <div className='my-1'>
        <p>{comment.comment}</p>
      </div>
    </div>
  )
}

export default commentCard