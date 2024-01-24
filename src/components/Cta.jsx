function Cta() {
  return (
    <section className='py-16 px-6 sm:px-16' id='OpenAL'>
      <CtaComponent />
    </section>
  )
}

export default Cta

function CtaComponent() {
  return (
    <div className='bg-gradient-to-r from-[#AE67FA] to-[#F49867] py-6 sm:py-10 px-8 sm:px-12 rounded-lg flex flex-col md:flex-row items-center gap-2 justify-between'>
      <div className='flex flex-col gap-2 flex-wrap'>
        <h4 className='text-sm font-medium'>
          Request Early Access to Get Started
        </h4>
        <h2 className='text-2xl font-bold'>
          Register today & start exploring the endless possiblities.
        </h2>
      </div>

      <div>
        <button className='py-2.5 px-8 font-medium rounded-3xl bg-black text-white shadow-xl hover:shadow-black/30 hover:scale-105 transition-all duration-300 mt-6 md:mt-0 w-[189px] '>
          Get Started
        </button>
      </div>
    </div>
  )
}
