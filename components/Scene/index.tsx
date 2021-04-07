import React, { Suspense, FC } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, ContactShadows } from "@react-three/drei"
import Pen from "../Pen"

const Scene: FC = () => {
    return (
        <Canvas concurrent pixelRatio={[1, 1.5]} camera={{ position: [0, 0, 4.75] }}>
            <ambientLight intensity={1} color={0xffffff}/>
            <spotLight intensity={0.3} angle={0.1} penumbra={1} position={[5, 25, 20]}/>
            <group position={[0, 0.01, 100]}>
                <pointLight intensity={0.5} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
            </group>
            <group position={[0.03, 5.88, 0.11]} rotation={[1.89, 0.88, -2.05]}>
                <pointLight intensity={1} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
            </group>
            {/* <group position={[0.03, 5.88, 9.62]} rotation={[1.89, 0.88, -2.05]}>
                <pointLight intensity={1} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
            </group> */}
            <Suspense fallback={null}>
                <Pen/>
            </Suspense>
        </Canvas>
    )
}

export default Scene