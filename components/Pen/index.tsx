/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

type GLTFResult = GLTF & {
    nodes: {
        body: THREE.Mesh
        button: THREE.Mesh
        tip: THREE.Mesh
        grafitti: THREE.Mesh
        clipping: THREE.Mesh
    }
    materials: {
        plastic: THREE.MeshStandardMaterial
        metal: THREE.MeshStandardMaterial
        grafitti: THREE.MeshStandardMaterial
    }
}

type ActionName = 'bodyAction' | 'buttonAction' | 'tipAction' | 'grafittiAction' | 'clippingAction'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export default function Model(props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>()
    const { nodes, materials, animations } = useGLTF('/pen-draco.glb') as GLTFResult
    console.log(materials)
    const { actions } = useAnimations(animations, group)
    return (
        <group ref={group} {...props} dispose={null}>
            <mesh
                name="body"
                geometry={nodes.body.geometry}
                material={materials.plastic}
                rotation={[0, 0, -Math.PI / 4]}
                scale={[-0.21, -0.21, -0.21]}
                material-color="#ffffff"
            />
            <mesh
                name="button"
                geometry={nodes.button.geometry}
                material={materials.metal}
                rotation={[0, 0, -Math.PI / 4]}
                scale={[-0.21, -0.21, -0.21]}
                material-color="#ffffff"
            />
            <mesh
                name="tip"
                geometry={nodes.tip.geometry}
                material={materials.metal}
                rotation={[0, 0, -Math.PI / 4]}
                scale={[-0.21, -0.21, -0.21]}
                material-color="#ffffff"
            />
            <mesh
                name="grafitti"
                geometry={nodes.grafitti.geometry}
                material={materials.grafitti}
                rotation={[0, 0, -Math.PI / 4]}
                scale={[-0.21, -0.21, -0.21]}
                material-color="#ffffff"
            />
            <mesh
                name="clipping"
                geometry={nodes.clipping.geometry}
                material={materials.metal}
                rotation={[0, 0, -Math.PI / 4]}
                scale={[-0.21, -0.21, -0.21]}
                material-color="#ffffff"
            />
        </group>
    )
}

useGLTF.preload('/pen-draco.glb')