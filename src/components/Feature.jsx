import BlueImage from "../assets/blur-01.png"

function Feature() {
  return (
    <section className=' pb-12 pt-32 px-6 sm:px-16' id='Case'>
      <FeatureComponent />
    </section>
  )
}

export default Feature

function FeatureComponent() {
  return (
    <div className='grid gap-16 lg:grid-cols-2 relative '>
      <div className='-top-20 -left-[24%] absolute opacity-50 rounded-full overflow-hidden '>
        <img src={BlueImage} alt='bg' className=' h-[60rem]' />
      </div>
      <div className='flex flex-col gap-8 z-10'>
        <h2 className='lg:w-2/3 gradientColor font-medium text-4xl '>
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h2>
        <p className='text-[#f49867] text-sm'>
          Request Early Access to Get Started
        </p>
      </div>

      <div className='flex flex-col gap-10 items-start'>
        <Components
          title='Improving end distrusts instantly'
          text='From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
        />

        <Components
          title='Become the tended active'
          text='Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'
        />

        <Components
          title='Message or am nothing'
          text='Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'
        />

        <Components
          title='Really boy law county'
          text='Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.'
        />
      </div>
    </div>
  )
}

function Components({ text, title }) {
  return (
    <div className='flex items-start flex-col md:flex-row w-full justify-between gap-6 '>
      <div>
        <div className='w-12 h-1 bg-gradient-to-r mt-2 from-[#AE67FA] to-[#F49867]'></div>
        <h2 className='text-white text-lg w-[182px]'>{title}</h2>
      </div>
      <p className='text-[#81afdd] sm:w-[334px]'>{text}</p>
    </div>
  )
}
