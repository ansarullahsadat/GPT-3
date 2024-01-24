import GoogleImage from "../assets/google.png"
import SlackImage from "../assets/slack.png"
import AtlassianImage from "../assets/atlassian.png"
import DropBoxImage from "../assets/dropbox.png"
import ShopiffyImage from "../assets/shopify.png"

function Brand() {
  return (
    <section className='bg-[#040c18] pt-24 pb-12 px-6 sm:px-16'>
      <BrandComponent />
    </section>
  )
}

export default Brand

function BrandComponent() {
  return (
    <div className='flex items-center flex-wrap gap-12  justify-center'>
      <div>
        <img src={GoogleImage} alt='google' className='w-28' />
      </div>
      <div>
        <img src={SlackImage} alt='slack' className='w-28' />
      </div>
      <div>
        <img src={AtlassianImage} alt='Atlassian' className='w-28' />
      </div>
      <div>
        <img src={DropBoxImage} alt='Drop_box' className='w-28' />
      </div>
      <div>
        <img src={ShopiffyImage} alt='Shopify' className='w-28' />
      </div>
    </div>
  )
}
