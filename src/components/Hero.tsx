import finacialFreedomPicture from '../assets/landingPagePicture1.jpg'

const Hero = () => {
  return (
    <div className=" flex flex-col lg:flex-row align-center items-center justify-center w-full gap-4 p-4 lg:p-10 lg:gap-10">
        <div className="h-fit  w-full lg:w-[50%] rounded-xl items-center justify-center flex-col align-center">
          <div className='text-select '>
          <p className='font-bold  text-start text-4xl lg:text-5xl mb-3 text-balance lg:text-pretty '>Helping you achieve the financial future you deserve</p>
          <p className='mb-4'>Want to get better with money and you do not know where to start? Click on the link below.</p>
          </div>
          <div className='flex gap-2'>
            <button className="btn btn-white">Get Started</button>
            <button className="btn btn-primary">See Demo</button>
          </div>
        </div>

        <div className="lg:h-[25rem] h-[15rem] w-full lg:w-[50%]">
          <img src={finacialFreedomPicture} alt="Finacial Freedom Picture"  className='rounded-xl h-full w-full shadow-2xl' />
        </div>

      </div>
  )
}

export default Hero