import {socialLinks} from "../constants/index.js";

const Contact = () => {
    return (
        <section className="c-space my-20" id="socials">
            <div className="w-full text-white-600">
                <h3 className="head-text">Minhas redes</h3>
                <div className="work-container">
                    <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                        {socialLinks.map(({
                                              id,
                                              name,
                                              icon,
                                              href,
                                          }) => (
                            <div key={id} className="work-content_container group"
                            >

                                <div className="flex flex-col h-full justify-start items-center py-2">
                                    <div className="contact-content_logo">
                                        <img src={icon} alt="logo" className="size-full"/>
                                    </div>
                                    <div className="work-content_bar"/>
                                </div>
                                <div className="sm:p-5 px-2.5 py-5">
                                    <a className="font-bold text-white-800" href={href} target="_blank"
                                       rel="noreferrer">{name}</a>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact
