import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import {Suspense} from "react";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";




const Hero = () => {


    const isSmall = useMediaQuery({maxWidth: 480});
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
                    Olá, eu sou o Igor <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient">Transformando ideias em soluções robustas, e de alto
                    impacto</p>
            </div>

            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                <Suspense fallback={<CanvasLoader/>}>
                        <PerspectiveCamera makeDefault position={[0, 0, 30]}/>
                        <HackerRoom
                            // scale={0.05}
                            // position={[0, 0, 0]}
                            // rotation={[0, -Math.PI / 2, 0]}
                            position={sizes.deskPosition}
                            rotation={[0, -Math.PI, 0]}
                            scale={sizes.deskScale}
                        />
                        <group>
                            <Target position={sizes.targetPosition}/>
                            <ReactLogo position={sizes.reactLogoPosition}/>
                            <Rings position={sizes.ringPosition}/>
                            <Cube position={sizes.cubePosition}/>
                        </group>
                        <ambientLight intensity={1}/>
                        <directionalLight intensity={0.5} position={[10, 10, 10]}/>
                    </Suspense>
                </Canvas>
            </div>
        </section>

    )
}
export default Hero
