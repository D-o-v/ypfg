import Features from "../components/Features"
import Hero from "../components/Hero"
import NewsLetterSignUp from "../components/NewsLetterSignUp"
import LandinPageBlog from "../components/LandinPageBlog"
import Testimonial from "../components/Testimonial"

const Landing = () => {
  return (
    <div className=" min-h-screen  ">
      <Hero/>
     <Features/>
     <LandinPageBlog/>
     <Testimonial/>
     <NewsLetterSignUp/>
    </div>
  )
}

export default Landing