import ContactForm from "@/components/contact-us/ContactForm";
import Footer from "@/components/layouts/Footer";
import dynamic from "next/dynamic";
const DynamicComponentWithNoSSR = dynamic(() => import('@/components/contact-us/Map'), {
    ssr: false
  })
  const MyHeader = dynamic(() => import('@/components/layouts/Header'), {
    ssr: false
  })
const contactUs = () =>{
    return(
        <>
        <MyHeader />
        <DynamicComponentWithNoSSR />
        <ContactForm />
        <Footer />
        </>
      
    )
}
export default contactUs;