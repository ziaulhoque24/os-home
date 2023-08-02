"use client";

export default function FeatureProductCard() {
  return (
    <>
      <div
        className='bg-white featureProductContainer rounded-xl drop-shadow-xl min-h-[110px]'
        data-ribbon='Sales - 21'
      >
        <div className='flex gap-2 px-5 py-5'>
          <div>
            <div className='w-10 h-10 rounded-lg bg-[#1B7F08] flex justify-center items-center text-white'>
              C
            </div>
          </div>
          <div>
            <h1 className='font-semibold'>CRM OS</h1>
            <p>
              Contact, Company, Opportunity, Quote, Task all in one CRM software
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
