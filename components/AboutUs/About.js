"use client";

export default function About() {
  return (
    <>
      <div className='contactBg py-10'>
        <div className='container'>
          <div className='flex flex-col items-center gap-3'>
            <h1 className='animate-text text-4xl font-bold text-center'>
              We&apos;re building the <br />
              modern web
            </h1>
            <p className='text-center md:max-w-[500px]'>
              We collaboratively administrate empowered markets through existing
              channels and new opportunities on the horizon. We can quickly
              maximize the timely deliverables for real-time presentations to
              deliver outstanding ROI.
            </p>
          </div>
        </div>
      </div>
      <div className='counterBg'>
        <div className='container py-8'>
          <div className='flex flex-col items-center gap-1 pb-8'>
            <h1 className='text-bold text-xl text-primary'>
              Innovation & Inspiration
            </h1>
            <p className='animate-text text-4xl font-bold text-center'>
              That&apos;s who we are
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5'>
            <div className='flex flex-col gap-2 items-center bg-white rounded-xl drop-shadow-lg p-5'>
              <span className='text-2xl font-bold'>2018</span>
              <span>Year we were founded</span>
            </div>
            <div className='flex flex-col gap-2 items-center bg-white rounded-xl drop-shadow-lg p-5'>
              <span className='text-2xl font-bold'>100+</span>
              <span>Monthly active users</span>
            </div>
            <div className='flex flex-col gap-2 items-center bg-white rounded-xl drop-shadow-lg p-5'>
              <span className='text-2xl font-bold'>20+</span>
              <span>Members in our remote team</span>
            </div>
            <div className='flex flex-col gap-2 items-center bg-white rounded-xl drop-shadow-lg p-5'>
              <span className='text-2xl font-bold'>3+</span>
              <span>Countries using our products</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
