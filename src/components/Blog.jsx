import Blog01 from "../assets/Rectangle_22-4.png"
import Blog02 from "../assets/Rectangle_22.png"
import Blog03 from "../assets/Rectangle_22-2.png"
import Blog04 from "../assets/Rectangle_22-1.png"
import Blog05 from "../assets/Rectangle_22-3.png"

function Blog() {
  return (
    <section className='py-12 px-6 sm:px-16' id='Lib'>
      <BlogTitle />
      <BlogComponets />
    </section>
  )
}

export default Blog

function BlogTitle() {
  return (
    <h2 className='gradientColor text-4xl font-medium lg:w-1/2 mb-20'>
      A lot is happening, We are blogging about it.
    </h2>
  )
}

function BlogComponets() {
  return (
    <div className='flex flex-col-reverse lg:flex-row gap-8'>
      <div>
        <BigComponent />
      </div>

      <div className='grid grid-cols-2 gap-8'>
        <SmallComponent BlogImage={Blog02} />
        <SmallComponent BlogImage={Blog03} />
        <SmallComponent BlogImage={Blog04} />
        <SmallComponent BlogImage={Blog05} />
      </div>
    </div>
  )
}

function BigComponent() {
  return (
    <div>
      <div>
        <img
          src={Blog01}
          alt='blog'
          className='w-full  lg:h-[277px]  object-cover'
        />
      </div>
      <div className='bg-[#042C54] py-8 px-6 text-white flex flex-col gap-4  h-[300px] lg:h-[418px]'>
        <span className='text-xs '>Sep 26, 2021</span>
        <h3 className='text-2xl font-medium'>
          GPT-3 and Open AI is the future. Let us exlore how it is?
        </h3>
        <p className='text-sm mt-auto'>Read Full Article</p>
      </div>
    </div>
  )
}

function SmallComponent({ BlogImage }) {
  return (
    <div>
      <div>
        <img
          src={BlogImage}
          alt='blog'
          className='w-full h-[8rem]  object-cover'
        />
      </div>
      <div className='bg-[#042C54]  text-white flex flex-col lg:h-[204px]  py-6 px-3'>
        <span className='text-xs  mb-2'>Sep 26, 2021</span>
        <h3 className='text-xl font-medium'>
          GPT-3 and Open AI is the future. Let us exlore how it is?
        </h3>
        <p className='text-sm mt-auto'>Read Full Article</p>
      </div>
    </div>
  )
}
