'use client'

import { Canvas } from '@react-three/fiber'
import Box from '@/components/shapes/Box'
import { EffectComposer, Outline, Selection, Select } from '@react-three/postprocessing'

const PostProcessingDemo: React.FC = () => {

    return (
        <Canvas>
            {/* drei selection "Maximum update depth exceeded" error */}
            <Selection>
                <EffectComposer multisampling={8} autoClear={false}>
                    <Outline blur edgeStrength={100} width={1000} />
                </EffectComposer>
                <Select enabled>
                    <Box position={[0, 0, 0]} />
                </Select>
            </Selection>
        </Canvas>
    )
}

export default PostProcessingDemo