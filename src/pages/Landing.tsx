import Features from "../components/Features"
import Hero from "../components/Hero"
import OurBlog from "../components/OurBlog"

const Landing = () => {
  return (
    <div className=" min-h-screen  ">
      <Hero/>
     <Features/>
     <OurBlog/>
    </div>
  )
}

export default Landing