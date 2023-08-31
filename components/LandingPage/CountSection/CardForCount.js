"use client";

export default function CardForCount({ count, label ,color}) {
  return (
    <>
      <div className='flex flex-col gap-2 items-center rounded-xl drop-shadow-lg p-5 hover:scale-105 duration-500'>
        <span
          className='text-8xl font-semibold'
          style={{ color: color || "black" }}
        >
          {count}
        </span>
        <span className='text-2xl text-center font-semibold'>{label}</span>
      </div>
    </>
  );
}
