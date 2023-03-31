import { useAnimations, useGLTF } from '@react-three/drei'
import { useEffect } from 'react'

export default function FoxModel()
{
    const fox = useGLTF('./static/Fox.glb')
    const animations = useAnimations(fox.animations, fox.scene)

    useEffect(() =>
    {
        const action = animations.actions.Run
        action.play()

        window.setTimeout(()=>{
          animations.actions.Walk.play()
          animations.actions.Walk.crossFadeFrom()
        }, 3000)
    }, [])

    return <primitive
        object={ fox.scene }
        scale={ 0.04 }
        position={ [ - 2, 0, 2 ] }
        rotation-y={ 0.3 }
        
    />
}
