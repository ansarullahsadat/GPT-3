import FeatureImage from "../assets/Feature_Image.png"

function Posibility() {
  return (
    <section className=' py-12 px-6 sm:px-16  '>
      <PosibilityComponents />
    </section>
  )
}

export default Posibility

function PosibilityComponents() {
  return (
    <div className='grid lg:grid-cols-2 items-center gap-16'>
      <div>
        <img
          src={FeatureImage}
          alt='Feature image'
          className='h-[24rem] lg:h-[40rem] object-cover'
        />
      </div>

      <div>
        <p className='text-[#71E5FF] mb-6 text-xs md:text-base'>
          Request Early Access to Get Started
        </p>
        <h2 className='gradientColor text-4xl font-medium mb-8'>
          The possibilities are beyond your imagination
        </h2>
        <p className='text-sm md:text-base leading-relaxed text-[#81AFDD]'>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>

        <p className=' text-xs md:text-base text-[#FF8A71] mt-8'>
          Request Early Access to Get Started
        </p>
      </div>
    </div>
  )
}
