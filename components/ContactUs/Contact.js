"use client";

import Address from "./Address";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <>
      <div className='contactBg py-10'>
        <div className='container'>
          <div>
            <h1 className='text-3xl font-bold animate-text text-center'>
              Contact us
            </h1>
            <p className='text-center'>
              Have a question or remark? Feel free to contact us!
            </p>
          </div>
          <Address />
        </div>
      </div>
      <div className='ContactFormBg'>
        <div className='container flex flex-col md:flex-row gap-5 mt-10 py-10'>
          <ContactForm />
          <div className='md:w-1/2'>
            <h1 className='animate-text text-xl font-medium text-center'>
              Find us on Map
            </h1>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d14600.931806534794!2d90.399313!3d23.810314!3m2!1i1024!2i768!4f13.1!2m1!1sOmega%20Express!5e0!3m2!1sen!2sus!4v1691066666855!5m2!1sen!2sus'
              className='w-full aspect-video mt-5 rounded-lg'
              allowfullscreen=''
              loading='lazy'
              referrerpolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
