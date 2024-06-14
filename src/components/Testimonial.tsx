import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import avatar from '../assets/avatar.jpg'

const Testimonial = () => {
    return (
        <div className="flex flex-col justify-center w-full p-4 lg:p-7 gap-2 bg-slate-50">
            <p className='font-bold text-start text-xl lg:text-3xl mb-3 text-balance'>Don’t just take our word for it</p>
            <p>Hear from some of our amazing customers who are building faster.</p>

            <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-4  lg:gap-10 lg:mb-7 mt-10 carousel px-2 pt-10  ">
                {[...Array(16)].map((_, idx) => (
                    <div
                        key={idx}
                        className="carousel-item lg:w-1/5 group flex flex-col justify-start items-start gap-2 w-fit my-7 h-fit duration-500 relative rounded-lg px-4 py-10 bg-gray-900 hover:-translate-y-2 hover:shadow-xl shadow-gray-800"
                    >
                        <img src={avatar} alt="budgetting image" className="rounded-full absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -top-10 left-10 w-[100px] h-[100px] bg-gray-800" />
                        <div className="flex flex-col gap-2 mt-3 text-pretty">
                            <FaQuoteLeft className="text-white text-3xl self-start " />
                            <p className="text-gray-200 line-clamp-3 text-wrap">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis
                                magna quis lectus fermentum, quis scelerisque orci pellentesque. Duis id
                                porta justo. Sed ac enim id justo tincidunt hendrerit id ac lectus.
                                Pellentesque maximus posuere tortor vitae consequat.
                            </p>
                            <FaQuoteRight className="flex text-white text-3xl self-end" />
                        </div>

                        <p className="text-lg mb-2 text-gray-100">Jane Doe</p>
                    </div>

                ))}


            </div>
        </div>
    )
}

export default Testimonial