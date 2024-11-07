import { FaWhatsapp } from "react-icons/fa"
import usePropsDriling from "../../../context/usePropsDriling"
import { ImageContact } from "../../../assets/images"

const Contact = () => {
    const propsDrilingContext = usePropsDriling()
    if(!propsDrilingContext) throw new Error("Terjadi kesalahan pada route")
    const {contactRef} = propsDrilingContext

    return (
        <section ref={contactRef} className="pt-[52px] pb-[55px]">
            <div className="container relative max-w-4xl">
                <img src={ImageContact.elementSmallLeft} alt="Element Small" width={20} className="absolute bottom-0" />
                <img src={ImageContact.elementSmallRight} alt="Element Small" width={20} className="absolute -top-14 left-[270px]" />
                <img src={ImageContact.elementBigRight} alt="Element Big" width={36} className="absolute right-0 -bottom-6" />
                <div className="flex flex-col items-center justify-center gap-10 text-center">
                    <h2 className="text-6xl font-semibold text-fourth">We're here to make your website awesome.</h2>
                    <a href="" className="flex items-center gap-2 px-4 py-3 text-sm rounded-lg bg-primary text-third"><FaWhatsapp size={20} /> Get in touch with us</a>
                </div>
            </div>
        </section>
    )
}

export default Contact