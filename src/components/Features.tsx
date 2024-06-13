import finacialFreedomPicture from '../assets/landingPagePicture2.jpg';
import { GoArrowRight } from "react-icons/go";
import { IoChatbubblesOutline } from "react-icons/io5";

const Features = () => {
    return (
        <div className="flex flex-col justify-center w-full p-4 lg:p-7 gap-2">
            <div className='text-select my-4 lg:my-5'>
                <p className='font-bold text-start text-xl lg:text-2xl mb-3'>Features</p>
                <p className='font-bold text-start text-xl lg:text-3xl mb-3 text-balance'>Make the best money decisions and feel good while doing it.</p>
                <p>Spend smarter, lower your bills, get cashback on everything you buy, and be happy.</p>
            </div>

            <div className="flex flex-col-reverse lg:flex-row-reverse align-center items-center justify-center w-full gap-4 lg:gap-10">
                <div className="h-fit w-full lg:w-[50%] rounded-xl items-center justify-center flex-col align-center">
                    {[...Array(3)].map((_, idx) => (
                        <div key={idx} className='flex gap-2 justify-center p-2'>
                            <IoChatbubblesOutline className='text-2xl' />
                            <div className='m-0 p-0'>
                                <p className='font-medium text-start text-md lg:text-lg mb-1 text-balance'>Make the best money decisions and feel good while doing it.</p>
                                <p>Spend smarter, lower your bills, get cashback on everything you buy, and be happy.</p>
                                <div className='flex items-center gap-3'>
                                    <span>Learn More</span>
                                    <GoArrowRight />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="lg:h-[25rem] h-[15rem] w-full lg:w-[50%]">
                    <img src={finacialFreedomPicture} alt="Financial Freedom Picture" className='rounded-xl h-full w-full shadow-2xl' />
                </div>
            </div>
        </div>
    );
}

export default Features;
