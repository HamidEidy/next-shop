import ContactForm from "@/components/contact-us/ContactForm";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import dynamic from "next/dynamic";
const DynamicComponentWithNoSSR = dynamic(() => import('@/components/contact-us/Map'), {
    ssr: false
  })
const contactUs = () =>{
    return(
        <>
        <Header />
        <DynamicComponentWithNoSSR />
        <ContactForm />
        <Footer />
        </>
      
    )
}
export default contactUs;