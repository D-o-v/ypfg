import { MdOutlineArrowOutward } from "react-icons/md";
import budgettingImage from "../assets/budgeting.jpg"

const OurBlog = () => {
    return (

        <div className="flex flex-col justify-center w-full p-4 lg:p-7 gap-2 bg-slate-50">
            <div className='text-select my-4 lg:my-5'>

                <div className='flex justify-between items-center'>
                    <p className='font-bold text-start text-xl lg:text-2xl mb-3'>Our blog</p>
                    <button className='btn btn-primary'>View all posts</button>
                </div>
                <p className='font-bold text-start text-xl lg:text-3xl mb-3 text-balance'>Lastest blog posts</p>
                <p>Spend smarter, lower your bills, get cashback on everything you buy, and be happy.</p>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-4  lg:gap-10 lg:mb-7">


                {[...Array(3)].map((_, idx) => (
                    <div key={idx} className="card max-w-90 bg-base-100 shadow-xl">
                        <figure className="px-5 pt-5 lg:px-10 lg:pt-10">
                            <img src={budgettingImage} alt="budgetting image" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <p className="text-wrap text-start self-start font-medium">June 12,2024</p>
                            <div className="flex items-center justify-between w-full">
                            <h2 className="card-title text-wrap">Budgeting for beginners </h2>
                            <MdOutlineArrowOutward  className="text-xl"/>
                            </div>
                            <p className="text-wrap my-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, ratione provident? Dolorum, neque, cum nostrum nihil consequuntur</p>
                           
                            <div className="flex w-fit flex-wrap gap-2 text-md">
                                <div className="badge badge-neutral">Finance</div>
                                <div className="badge badge-primary">Budgeting</div>
                                <div className="badge badge-secondary">Savings</div>
                                <div className="badge badge-accent">Investing</div>
                            </div>
                        </div>
                    </div>
                ))}




                {/* {[...Array(3)].map((_, idx) => (
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
            ))} */}
            </div>
        </div>
    )
}

export default OurBlog