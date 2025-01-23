'use client'

import { Canvas } from '@react-three/fiber'
import Box from '@/components/shapes/Box'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

const PostProcessingDemo: React.FC = () => {

    return (
        <Canvas>
            <ambientLight intensity={Math.PI / 2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
            <EffectComposer>
                <Bloom
                    luminanceThreshold={0.08}
                    intensity={0.7}
                    luminanceSmoothing={0.01}
                />
            </EffectComposer>
        </Canvas>
    )
}

export default PostProcessingDemo