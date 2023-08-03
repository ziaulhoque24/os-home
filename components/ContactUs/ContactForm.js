"use client";

export default function ContactForm() {
  return (
    <>
      <div className='md:w-1/2 flex flex-col gap-3'>
        <div>
          <h1 className='animate-text text-xl font-medium text-center'>
            Have A Question?
          </h1>
          <p className='text-center'>
            Our support team is always ready to assist with any queries.
          </p>
        </div>
        <div>
          <label className='' htmlFor='name'>
            Full Name
          </label>
          <input
            type='text'
            name='name'
            id=''
            placeholder='Jon due'
            className='w-full px-5 py-3 mt-2 rounded-lg'
          />
        </div>
        <div>
          <label className='' htmlFor='email'>
            Email
          </label>
          <input
            type='email'
            name='email'
            id=''
            placeholder='jon@gmail.com'
            className='w-full px-5 py-3 mt-2 rounded-lg'
          />
        </div>
        <div>
          <label className='' htmlFor='subject'>
            Subject
          </label>
          <input
            type='text'
            name='subject'
            id=''
            placeholder='Your subject'
            className='w-full px-5 py-3 mt-2 rounded-lg'
          />
        </div>
        <div>
          <label className='' htmlFor='subject'>
            Your message
          </label>
          <textarea
            name='subject'
            id=''
            placeholder='message body'
            className='w-full px-5 py-3 mt-2 rounded-lg'
          />
        </div>
        <div>
          <button
            type='submit'
            className='w-full bg-primary text-white font-bold text-xl rounded-lg py-2'
          >
            Send Message
          </button>
        </div>
      </div>
    </>
  );
}
