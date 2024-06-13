import Features from "../components/Features"
import Hero from "../components/Hero"
import OurBlog from "../components/OurBlog"
import Testimonial from "../components/Testimonial"

const Landing = () => {
  return (
    <div className=" min-h-screen  ">
      <Hero/>
     <Features/>
     <OurBlog/>
     <Testimonial/>
    </div>
  )
}

export default Landing