"use client";

import Image from "next/image";

export default function HRM() {
  return (
    <>
      <div>
        <section className='px-2 py-16 bg-white md:px-0'>
          <div className='container items-center max-w-6xl px-8 mx-auto xl:px-5'>
            <div className='flex flex-wrap items-center sm:-mx-3'>
              <div className='w-full md:w-1/2 md:px-3'>
                <div className='w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0'>
                  <h1 className='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl'>
                    <span className='block xl:inline'>
                      Revolutionize & Simplify.
                    </span>
                    <span className='block text-blue-600 xl:inline'>
                      Your HR Solutions.
                    </span>
                  </h1>
                  <p className='mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl'>
                    Embrace digital transformation with our powerful HR tool.
                    Stay ahead of the curve and gain a competitive edge.
                  </p>
                  <div className='relative flex flex-col sm:flex-row sm:space-x-4'>
                    <a
                      href='/admin/dashboard'
                      className='flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-blue-600 rounded-md sm:mb-0 hover:bg-blue-700 sm:w-auto'
                    >
                      Try Demo Now
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-5 h-5 ml-1'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <line x1='5' y1='12' x2='19' y2='12'></line>
                        <polyline points='12 5 19 12 12 19'></polyline>
                      </svg>
                    </a>
                    <a
                      href='/admin/dashboard'
                      className='flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600'
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2'>
                <div className='w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl'>
                  <Image
                    src={"https://i.ibb.co/cNfg9Y7/MOKEUPHRMOS.png"}
                    alt='best hrm os'
                    width={588}
                    height={374}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24'>
          <div className='box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16'>
            <div className='box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10'>
              <Image
                src='https://i.ibb.co/k8VmY84/Humaaans-3-Characters.png'
                className='p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 '
                alt='team'
                width={400}
                height={301}
              />
            </div>

            <div className='box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none'>
              <h2 className='m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl'>
                Embrace digital transformation
              </h2>
              <p className='pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg'>
                Stay ahead of the curve and gain a competitive edge with our
                innovative HR technologies.
              </p>
              <ul className='p-0 m-0 leading-6 border-0 border-gray-300'>
                <li className='box-border relative py-1 pl-0 text-left text-gray-500 border-solid'>
                  <span className='inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-indigo-500 rounded-full'>
                    <span className='text-sm font-bold'>✓</span>
                  </span>{" "}
                  Optimize Your HR Performance
                </li>
                <li className='box-border relative py-1 pl-0 text-left text-gray-500 border-solid'>
                  <span className='inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-indigo-500 rounded-full'>
                    <span className='text-sm font-bold'>✓</span>
                  </span>{" "}
                  Simplify Your HR Processes
                </li>
                <li className='box-border relative py-1 pl-0 text-left text-gray-500 border-solid'>
                  <span className='inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-indigo-500 rounded-full'>
                    <span className='text-sm font-bold'>✓</span>
                  </span>{" "}
                  Empower Your HR Operations
                </li>
              </ul>
            </div>
          </div>
          <div className='box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16'>
            <div className='box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32'>
              <h2 className='m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl'>
                Automated Systems
              </h2>
              <p className='pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg'>
                Get More Done in Less Time with Our Intuitive, Automated System
              </p>
              <ul className='p-0 m-0 leading-6 border-0 border-gray-300'>
                <li className='box-border relative py-1 pl-0 text-left text-gray-500 border-solid'>
                  <span className='inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-indigo-500 rounded-full'>
                    <span className='text-sm font-bold'>✓</span>
                  </span>{" "}
                  Automated Payroll Processing and Payslip Generation.
                </li>
                <li className='box-border relative py-1 pl-0 text-left text-gray-500 border-solid'>
                  <span className='inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-indigo-500 rounded-full'>
                    <span className='text-sm font-bold'>✓</span>
                  </span>{" "}
                  Holiday Management and Leave Management.
                </li>
                <li className='box-border relative py-1 pl-0 text-left text-gray-500 border-solid'>
                  <span className='inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-indigo-500 rounded-full'>
                    <span className='text-sm font-bold'>✓</span>
                  </span>{" "}
                  Automated Attendance Management and Time Tracking.
                </li>
              </ul>
            </div>

            <div className='box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2'>
              <Image
                src='https://i.ibb.co/7CHnkNS/undraw-Chat-bot-re-e2gj.png'
                className='pl-4 sm:pr-10 xl:pl-10 lg:pr-32'
                alt='ai'
                width={1109}
                height={635}
              />
            </div>
          </div>
        </section>

        <section className='py-20 bg-gray-50'>
          <div className='container items-center max-w-6xl px-4 px-10 mx-auto sm:px-20 md:px-32 lg:px-16'>
            <div className='flex flex-wrap items-center -mx-3'>
              <div className='order-1 w-full px-3 lg:w-1/2 lg:order-0'>
                <div className='w-full lg:max-w-md'>
                  <h2 className='mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading'>
                    Reduce Your Workload and Improve Your Efficiency
                  </h2>
                  <p className='mb-4 font-medium tracking-tight text-gray-400 xl:mb-6'>
                    User-Friendly HR Solutions for All Your Needs, Designed to
                    Make Your Life Easier
                  </p>
                  <ul>
                    <li className='flex items-center py-2 space-x-4 xl:py-3'>
                      <svg
                        className='w-8 h-8 text-pink-500'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
                        ></path>
                      </svg>
                      <span className='font-medium text-gray-500'>
                        Intrigrated Accounting System with Payroll Management
                      </span>
                    </li>
                    <li className='flex items-center py-2 space-x-4 xl:py-3'>
                      <svg
                        className='w-8 h-8 text-indigo-500'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
                        ></path>
                      </svg>
                      <span className='font-medium text-gray-500'>
                        Automated Leave Management and Holiday Management.
                      </span>
                    </li>
                    <li className='flex items-center py-2 space-x-4 xl:py-3'>
                      <svg
                        className='w-8 h-8 text-green-500'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                        ></path>
                      </svg>
                      <span className='font-medium text-gray-500'>
                        Role Based Access Control and User Management.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0'>
                <Image
                  className='mx-auto sm:max-w-sm lg:max-w-full'
                  src='https://i.ibb.co/7Rkm1T8/undraw-Join-re-w1lh.png'
                  alt='feature'
                  width={752}
                  height={692}
                />
              </div>
            </div>
          </div>
        </section>

        <section className='flex items-center justify-center py-20 bg-white min-w-screen'>
          <div className='px-16 bg-white'>
            <div className='container flex flex-col items-start mx-auto lg:items-center'>
              <p className='relative flex items-start justify-start w-full text-lg font-bold tracking-wider text-purple-500 uppercase lg:justify-center lg:items-center'>
                Verify for yourself instead of simply accepting our statement.
              </p>

              <h2 className='relative flex items-start justify-start w-full max-w-3xl text-4xl font-bold lg:justify-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  className='absolute right-0 hidden w-12 h-12 -mt-2 -mr-16 text-gray-200 lg:inline-block'
                  viewBox='0 0 975.036 975.036'
                >
                  <path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
                </svg>
                Explore the perspectives of others.
              </h2>
              <div className='block w-full h-0.5 max-w-lg mt-6 bg-purple-100 rounded-full'></div>

              <div className='items-center justify-center w-full mt-12 mb-4 lg:flex'>
                <div className='flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/3 lg:mb-0'>
                  <div className='flex items-center justify-center'>
                    <div className='w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full'>
                      <Image
                        src='https://images.freeimages.com/images/large-previews/962/avatar-man-with-mustages-1632966.jpg'
                        alt='feature'
                        className='object-cover w-full h-full'
                        width={1200}
                        height={1200}
                      />
                    </div>
                    <div className='flex flex-col items-start justify-center'>
                      <h4 className='font-bold text-gray-800'>Karan Kumar</h4>
                      <p className='text-gray-600'>From Bahrain</p>
                    </div>
                  </div>
                  <blockquote className='mt-8 text-lg text-gray-500'>
                    &quot;All the necessary features are available. Very easy to
                    navigate and use. Loved it! Very fast customer support.
                    Impressive.&quot;
                  </blockquote>
                </div>
                <div className='flex flex-col items-start justify-start w-full h-auto px-0 mx-0 mb-12 border-l border-r border-transparent lg:w-1/3 lg:mb-0 lg:px-8 lg:mx-8 lg:border-gray-200'>
                  <div className='flex items-center justify-center'>
                    <div className='w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full'>
                      <Image
                        src='https://images.freeimages.com/images/large-previews/023/geek-avatar-1632962.jpg'
                        alt='feature2'
                        className='object-cover w-full h-full'
                        width={1200}
                        height={1200}
                      />
                    </div>
                    <div className='flex flex-col items-start justify-center'>
                      <h4 className='font-bold text-gray-800'>Abu Wahid</h4>
                      <p className='text-gray-600'>From Albania</p>
                    </div>
                  </div>
                  <blockquote className='mt-8 text-lg text-gray-500'>
                    &quot;All the must needed features are available. Very fast
                    and lightweight but good design. I needed some customization
                    and they delivered it very well and fast at a reasonable
                    price. Thanks to the team and their outstanding fast
                    support.&quot;
                  </blockquote>
                </div>
                <div className='flex flex-col items-start justify-start w-full h-auto lg:w-1/3'>
                  <div className='flex items-center justify-center'>
                    <div className='w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full'>
                      <Image
                        src='https://images.freeimages.com/images/large-previews/7e8/man-avatar-1632965.jpg'
                        className='object-cover w-full h-full'
                        alt='img'
                        width={1200}
                        height={1200}
                      />
                    </div>
                    <div className='flex flex-col items-start justify-center'>
                      <h4 className='font-bold text-gray-800'>Dsuza</h4>
                      <p className='text-gray-600'>From Belarus</p>
                    </div>
                  </div>
                  <blockquote className='mt-8 text-lg text-gray-500'>
                    &quot;All the needed functionalities for my work was
                    available in this software. Good design and easy to
                    use.&quot;
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='box-border py-8 leading-7 text-gray-900 bg-white border-0 border-gray-200 border-solid sm:py-12 md:py-16 lg:py-24'>
          <div className='box-border max-w-6xl px-4 pb-12 mx-auto border-solid sm:px-6 md:px-6 lg:px-4'>
            <div className='flex flex-col items-center leading-7 text-center text-gray-900'>
              <h2 className='box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl'>
                Our Other Products
              </h2>
              <p className='box-border mt-4 text-2xl leading-normal text-gray-900 border-solid'>
                We're also working on some other products. Check them out!
              </p>
            </div>
            <div className='grid max-w-md mx-auto mt-6 overflow-hidden leading-7 text-gray-900 border border-b-4 border-gray-300 border-blue-600 rounded-xl md:max-w-lg lg:max-w-none sm:mt-10 lg:grid-cols-3'>
              <div className='box-border px-4 py-8 mb-6 text-center bg-white border-solid lg:mb-0 sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10'>
                <h3 className='m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl'>
                  POS OS
                </h3>
                <p className='mt-3 text-base leading-7 text-gray-900 border-0 border-solid'>
                  POS OS is a point of sale software for shops, restaurants, and
                  other businesses.
                </p>
                <div className='flex items-center justify-center mt-6 leading-7 text-gray-900 border-0 border-solid sm:mt-8'>
                  <p className='box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-gray-200'>
                    $12
                  </p>
                  <p className='box-border my-0 ml-4 mr-0 text-xs text-left border-0 border-gray-200'></p>
                </div>

                <a
                  href='https://codecanyon.net/item/pos-os-pos-invoice-inventory-accounting-staff-and-shop-management-software/41344532?s_rank=3
								'
                  target='_blank'
                  className='inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-b-2 border-blue-600 rounded-md cursor-pointer hover:bg-blue-600 hover:border-blue-600 hover:text-white sm:text-base sm:mt-8 md:text-lg'
                >
                  Buy Now
                </a>
              </div>
              <div className='box-border px-4 py-8 mb-6 text-center bg-gray-100 border border-gray-300 border-solid lg:mb-0 sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10'>
                <h3 className='m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl'>
                  ERP OS
                </h3>
                <p className='mt-3 leading-7 text-gray-900 border-0 border-solid'>
                  ERP OS is a complete ERP software for businesses.
                </p>
                <div className='flex items-center justify-center mt-6 leading-7 text-gray-900 border-0 border-solid sm:mt-8'>
                  <p className='box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-gray-200'>
                    $19
                  </p>
                </div>
                <a
                  href='https://codecanyon.net/item/erp-os-best-erp-software-for-store-inventory-and-invoice-management/39644625?s_rank=4'
                  target='_blank'
                  className='inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-white no-underline bg-blue-600 border-b-4 border-blue-700 rounded cursor-pointer hover:text-white sm:text-base sm:mt-8 md:text-lg'
                >
                  Buy Now
                </a>
              </div>
              <div className='box-border px-4 py-8 text-center bg-white border-solid sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10'>
                <h3 className='m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl'>
                  INVOICE OS
                </h3>
                <p className='mt-3 leading-7 text-gray-900 border-0 border-solid'>
                  Invoice OS is a simple invoicing software for small businesses
                  and freelancers.
                </p>
                <div className='flex items-center justify-center mt-6 leading-7 text-gray-900 border-0 border-solid sm:mt-8'>
                  <p className='box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-gray-200'>
                    $12
                  </p>
                </div>
                <a
                  href='https://codecanyon.net/item/invoice-os-invoice-management-software-with-email-accounting-inventory-store-functionality/42021434?s_rank=1'
                  target='_blank'
                  className='inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-b-2 border-blue-600 rounded cursor-pointer hover:bg-blue-600 hover:border-blue-600 hover:text-white sm:text-base sm:mt-8 md:text-lg'
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
