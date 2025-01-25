'use client'

import { Canvas } from '@react-three/fiber'
import { useControls } from 'leva'

const PostProcessingDemo: React.FC = () => {

    // docs: https://github.com/pmndrs/leva/blob/main/docs/getting-started.md
    const color = useControls({
        value: 'darkred',
    })

    return (
        <Canvas>
            <color attach="background" args={[color.value]} />
        </Canvas>
    )
}

export default PostProcessingDemo