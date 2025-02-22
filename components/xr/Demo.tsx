'use client'

import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { XR, createXRStore } from '@react-three/xr'

const store = createXRStore()

const PostProcessingDemo: React.FC = () => {

    const [red, setRed] = useState(false)

    return (
        <>
            <button onClick={() => store.enterAR()}>Enter AR</button>
            <Canvas>
                <XR store={store}>
                    <mesh pointerEventsType={{ deny: 'grab' }} onClick={() => setRed(!red)} position={[0, 1, -1]}>
                        <boxGeometry />
                        <meshBasicMaterial color={red ? 'red' : 'blue'} />
                    </mesh>
                </XR>
            </Canvas>
        </>
    )
}

export default PostProcessingDemo