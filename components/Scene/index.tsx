import React, { Suspense, FC } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Pen from "../Pen"

const Scene: FC = () => {
    return (
        <Canvas>
            <ambientLight intensity={0.3}/>
            <spotLight intensity={0.3} angle={0.1} penumbra={1} position={[5, 25, 20]}/>
            <Suspense fallback={null}>
                <Pen/>
            </Suspense>
        </Canvas>
    )
}

export default Scene