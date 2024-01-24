import Logo from "../assets/GPT-3.png"

function Footer() {
  return (
    <section className='bg-[#031B34] pb-12 pt-20 px-6 md:px-16'>
      <FooterTitle />
      <FooterComponent />
    </section>
  )
}

export default Footer

function FooterTitle() {
  return (
    <div className='flex items-center flex-col gap-12 '>
      <h2 className='gradientColor text-4xl font-medium'>
        Do you want to step in to the future before others
      </h2>
      <button className='border py-2.5 px-4 text-white shadow-xl hover:shadow-[#ae67fa]/30 hover:scale-105 hover:border-[#ae67fa] hover:text-[#f49867] transition-all duration-300 '>
        Request Early Access
      </button>
    </div>
  )
}

function FooterComponent() {
  return (
    <div className='text-white'>
      <div className='flex items-start justify-between gap-12 flex-wrap mt-32 '>
        <div className='flex flex-col gap-3'>
          <img src={Logo} alt='logo' className='w-24' />
          <p className='text-sm'>
            Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
          </p>
        </div>

        <FooterSmallComponents
          title='Links'
          text01='Overons'
          text02='Social Media'
          text03='Counters'
          text04='Contact'
        />

        <FooterSmallComponents
          title='Company'
          text01='Terms&Condations'
          text02='Privacy policy'
          text03='Contact'
        />

        <FooterSmallComponents
          title='Get in touch'
          text01='Crechterwoord K12 182 DK Alknjkcb'
          text02='085-132567'
          text03='info@payme.net'
        />
      </div>

      <p className='text-center text-sm mt-20 '>
        © 2021 GPT-3. All rights reserved.
      </p>
    </div>
  )
}

function FooterSmallComponents({ title, text01, text02, text03, text04 }) {
  return (
    <div className='flex flex-col gap-5 text-sm'>
      <h4 className='font-medium mb-6'>{title}</h4>
      <p>{text01}</p>
      <p>{text02}</p>
      <p>{text03}</p>
      <p>{text04}</p>
    </div>
  )
}
