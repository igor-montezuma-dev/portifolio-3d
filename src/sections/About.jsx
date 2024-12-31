import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import {useState} from "react";

const About = () => {

    const [hasCopied, setHasCopied] = useState(false);

    const currentHour = new Date().getHours();
    const isDayTime = currentHour >= 6 && currentHour < 18;
    const globeImageUrl = isDayTime
        ? '//unpkg.com/three-globe/example/img/earth-day.jpg'
        : '//unpkg.com/three-globe/example/img/earth-night.jpg';

    const handleCopy = () => {
        navigator.clipboard.writeText("igorminranda17@gmail.com");
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    }
    return (
        <section className="c-space my-20" id="about">
            <div className="grid
            xl:grid-cols-3
            xl:grid-rows-6
            md:grid-cols-2
            grid-cols-1
            gap-5
            h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1"
                             className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">Olá! Eu sou o Igor!</p>
                            <p className="grid-subtext">Com 3 anos de experiência, tenho focado minhas habilidades no
                                desenvilvimento de aplicações frontend e backend.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                            <img src="/assets/logo-react.png" alt="React.js Logo"
                                 className="size-24 object-contain"/>
                            <img src="/assets/angular.png" alt="Angular Logo" className="size-46 object-contain"/>
                            <img src="/assets/spring-boot-logo.png" alt="Spring Boot Logo"
                                 className="size-46 object-contain"/>
                        </div>
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">Sou espacializado no desenvolvimento de aplicações robustas,
                                utilizando tecnologias como: Angular, React.JS e Spring Boot</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0,0,0,0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl={globeImageUrl}
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{
                                    lat: -18.5122,
                                    lng: -44.5550,
                                    text: "Estou aqui!",
                                    color: "white",
                                    size: 20,
                                }]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">Aceito disafios que cruzam fronteiras</p>
                            <p className="grid-subtext">Moro no Brasil e estou disposto a encaras novos desafios
                                remotamente!</p>
                            <Button name="Entre em contato" isBeam containerClass="w-full mt-10"/>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">Minha paixão por codar</p>
                            <p className="grid-subtext">Amo resolver problemas, e crias soluções inovadoras atrés da
                                programação. Programar não é apenas minha prifissão, é minha paixão.</p>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid-4"
                             className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"/>
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Entre em contato</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'}/>
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">igorminranda17@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About
