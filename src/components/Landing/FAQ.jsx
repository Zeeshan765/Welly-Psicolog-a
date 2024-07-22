import React from 'react'

const FAQ = () => {
  return (
    <section className='px-4 md:px-8 lg:px-16 xl:px-25 '>
      <div class='relative w-full bg-transparent px-6 pt-10 pb-8 mt-8 shadow-xl  sm:mx-auto  sm:rounded-lg sm:px-10  mb-5'>
        <div class=' px-5'>
          <div class='flex flex-col'>
            <h2 class='mt-5  text-3xl text-teal-900 font-bold tracking-tight md:text-5xl'>
              FAQ
            </h2>
            <p class='mt-3 text-lg text-neutral-500 md:text-xl'>
              Frequenty asked questions
            </p>
          </div>
          <div class=' mt-8 grid  '>
            <div class='p-5 bg-white mt-2'>
              <details class='group'>
                <summary class=' group-open:animate-fadeIn mt-3 text-neutral-600 flex cursor-pointer list-none items-center justify-between font-medium'>
                  <span> How does the billing work?</span>
                  <span class='transition group-open:rotate-180'>
                    <svg
                      fill='none'
                      height='24'
                      shape-rendering='geometricPrecision'
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='1.5'
                      viewBox='0 0 24 24'
                      width='24'
                    >
                      <path d='M6 9l6 6 6-6'></path>
                    </svg>
                  </span>
                </summary>
                <p class='group-open:animate-fadeIn mt-3 text-neutral-600'>
                  Springerdata offers a variety of billing options, including
                  monthly and annual subscription plans, as well as
                  pay-as-you-go pricing for certain services. Payment is
                  typically made through a credit card or other secure online
                  payment method.
                </p>
              </details>
            </div>
            <div class='group p-5 bg-white mt-2'>
              <details class='group-open:animate-fadeIn  text-neutral-600'>
                <summary class=' group-open:animate-fadeIn mt-3 text-neutral-600 flex cursor-pointer list-none items-center justify-between font-medium'>
                  <span> How does the billing work?</span>
                  <span class='transition group-open:rotate-180'>
                    <svg
                      fill='none'
                      height='24'
                      shape-rendering='geometricPrecision'
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='1.5'
                      viewBox='0 0 24 24'
                      width='24'
                    >
                      <path d='M6 9l6 6 6-6'></path>
                    </svg>
                  </span>
                </summary>
                <p class='group-open:animate-fadeIn mt-3 text-neutral-600'>
                  Springerdata offers a variety of billing options, including
                  monthly and annual subscription plans, as well as
                  pay-as-you-go pricing for certain services. Payment is
                  typically made through a credit card or other secure online
                  payment method.
                </p>
              </details>
            </div>
            <div class='p-5 bg-white mt-2'>
              <details class='group'>
                <summary class=' group-open:animate-fadeIn mt-3 text-neutral-600 flex cursor-pointer list-none items-center justify-between font-medium'>
                  <span> How does the billing work?</span>
                  <span class='transition group-open:rotate-180'>
                    <svg
                      fill='none'
                      height='24'
                      shape-rendering='geometricPrecision'
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='1.5'
                      viewBox='0 0 24 24'
                      width='24'
                    >
                      <path d='M6 9l6 6 6-6'></path>
                    </svg>
                  </span>
                </summary>
                <p class='group-open:animate-fadeIn mt-3 text-neutral-600'>
                  Springerdata offers a variety of billing options, including
                  monthly and annual subscription plans, as well as
                  pay-as-you-go pricing for certain services. Payment is
                  typically made through a credit card or other secure online
                  payment method.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ