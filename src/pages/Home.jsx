import Carousel from "../components/Carousel"
import MidBanner from "../components/MidBanner"
import Features from "../components/Features"

export const Home = () => {
  return (
    <div className="overflow-x-hidden">
    <Carousel/>
    <MidBanner/>
    <Features/>
    
    </div>
  )
}
