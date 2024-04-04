import ContactForm from "@/components/contact-us/ContactForm";
import MenuButton from "@/components/homePage/GoToMenuButton";
import Intro from "@/components/homePage/Intro/Intro";
import SuggestionTab from "@/components/SuggestionTab";
import Tabsection from "@/components/homePage/tab-section/Tabsection";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import dynamic from "next/dynamic";
const DynamicComponentWithNoSSR = dynamic(() => import('@/components/contact-us/Map'), {
  ssr: false
})
export default function Home() {
  return (
    <div>
       <Header />
      <Intro />
      <Tabsection />
      <MenuButton />
      <SuggestionTab />
      <DynamicComponentWithNoSSR />
      <ContactForm />
      <Footer />
    </div>
  );
}
