'use client'

import { useRef, useState } from 'react'
import type { PropsWithChildren } from 'react'
import type { Vector3 } from '@react-three/fiber'
import { Mesh } from 'three'
import { useFrame } from '@react-three/fiber'

interface IProps extends PropsWithChildren {
    position: Vector3
}

const Box: React.FC<IProps> = (props) => {

    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef<Mesh>(null)
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => ref.current && (ref.current.rotation.x += delta))

    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={() => click(!clicked)}
            onPointerOver={(event: React.PointerEvent) => (event.stopPropagation(), hover(true))}
            onPointerOut={() => hover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

export default Box