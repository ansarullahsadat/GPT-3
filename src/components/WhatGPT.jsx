function WhatGPT() {
  return (
    <section className='py-12 px-6  md:px-16 h-full' id='WhatGPT'>
      <div className='bg-gradient-to-r from-[#042c54] via-[#042c54] to-[#1a4372] py-20 px-4 md:px-12'>
        <WhatGPTMain />
        <WhatGPTHeader />
        <WhatGPTComponentsConatiner />
      </div>
    </section>
  )
}

export default WhatGPT

function WhatGPTMain() {
  return (
    <div className='flex   gap-2 flex-wrap justify-between '>
      <div className='relative'>
        <GradientColor />
        <h2 className='text-white text-2xl font-medium '>What is GPT-3</h2>
      </div>

      <p className='text-[#81afdd] md:w-2/3 leading-relaxed'>
        We so opinion friends me message as delight. Whole front do of plate
        heard oh ought. His defective nor convinced residence own. Connection
        has put impossible own apartments boisterous. At jointure ladyship an
        insisted so humanity he. Friendly bachelor entrance to on by.
      </p>
    </div>
  )
}

function WhatGPTHeader() {
  return (
    <div className='flex items-start gap-4 flex-wrap justify-between my-14'>
      <h2 className='md:w-2/3 gradientColor font-medium text-4xl md:text-5xl '>
        The possibilities are beyond your imagination
      </h2>
      <p className='text-[#f49867]'>Explore The Library</p>
    </div>
  )
}

function GradientColor() {
  return (
    <div className='w-12 h-1 bg-gradient-to-r from-[#AE67FA] to-[#F49867] absolute -top-2'></div>
  )
}

function WhatGPTComponentsConatiner() {
  return (
    <div className='flex  justify-between gap-16 sm:gap-4 flex-wrap'>
      <WhatGPTComponents
        title='Chatbots'
        text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. '
      />

      <WhatGPTComponents
        title='Knowledgebase'
        text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
      />

      <WhatGPTComponents
        title='Education'
        text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
      />
    </div>
  )
}

function WhatGPTComponents({ title, text }) {
  return (
    <div className='w-[334px] flex flex-col gap-8 '>
      <div className='relative'>
        <GradientColor />
        <h1 className='text-white mt-2'>{title}</h1>
      </div>

      <p className='text-[#81afdd]'>{text}</p>
    </div>
  )
}
