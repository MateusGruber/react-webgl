import React, { Suspense, FC } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, ContactShadows } from "@react-three/drei"
import Pen from "../Pen"

const Scene: FC = () => {
    return (
        <Canvas concurrent pixelRatio={[1, 1.5]} camera={{ position: [0, 0, 3.75] }}>
            <ambientLight intensity={0.3}/>
            <spotLight intensity={0.3} angle={0.1} penumbra={1} position={[5, 25, 20]}/>
            <Suspense fallback={null}>
                <Pen/>
                {/* <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={2} far={1} /> */}
            </Suspense>
        </Canvas>
    )
}

export default Scene