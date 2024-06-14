import Features from "../components/Features"
import Hero from "../components/Hero"
import NewsLetterSignUp from "../components/NewsLetterSignUp"
import OurBlog from "../components/OurBlog"
import Testimonial from "../components/Testimonial"

const Landing = () => {
  return (
    <div className=" min-h-screen  ">
      <Hero/>
     <Features/>
     <OurBlog/>
     <Testimonial/>
     <NewsLetterSignUp/>
    </div>
  )
}

export default Landing