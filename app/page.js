import Image from 'next/image'

import { Hero, Gallerycarousel, Whyhmt,Contactus, Testimonials} from "../components";
export default function Home() {
  return (
    <>
    <Hero/>
    <Whyhmt/>
    <Gallerycarousel/>
    <Contactus/>
    <Testimonials/>
    </>
  )
}
