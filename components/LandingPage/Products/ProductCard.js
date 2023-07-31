"use client";

export default function ProductCard() {
  return (
    <>
      <div className='w-auto md:w-[350px] md:h-[500px] bg-white drop-shadow-lg rounded-lg'>
        <div className='bg-orange-300/20 flex flex-col items-center gap-5 py-10 rounded-t-lg'>
          <h1 className='text-xl font-bold'>CRM</h1>
          <div className='text-center'>
            <span>One time payment</span>
            <br />
            <span className='text-3xl font-bold'>99$</span>
          </div>
          <button className='px-2 md:px-5 py-2 bg-black rounded-2xl text-white'>
            Get Started
          </button>
        </div>
        <ul className='hidden md:block px-10 py-5 list-disc'>
          <li>100 subscribers</li>
          <li>100 subscribers</li>
          <li>100 subscribers</li>
          <li>100 subscribers</li>
          <li>100 subscribers</li>
        </ul>
      </div>
    </>
  );
}
