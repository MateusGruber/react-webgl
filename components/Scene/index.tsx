import React, { Suspense, useRef, FC, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei'
import Pen from "../Pen"

const Scene: FC = () => {
    const ref = useRef();

    return (
         <Canvas shadows>
            <Suspense fallback={null}>
                    <Pen />
            </Suspense>
        </Canvas>
    )
}

export default Scene