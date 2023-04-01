import { OrbitControls, Html, Text,Float } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import WarriorModel from './WarriorModel'
import { MeshStandardMaterial, Scene, TextureLoader } from 'three'
import { useLoader } from '@react-three/fiber'
import { Suspense, useRef } from 'react'

export default function Experience()
{

    const stone = useLoader(TextureLoader, './images/areni.jpg')
  
    return <>

        <Perf position="top-left" />
       
        <OrbitControls maxPolarAngle = {Math.PI/2} 
        maxDistance = {40} 
        minDistance = {5} 
        makeDefault = {true} 
        mouseButtons-RIGHT = {false}/>

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <Suspense
        fallback={
            <mesh>
                <boxGeometry args={[1,1,1,2,2,2]} />
                <meshBasicMaterial wireframe color='grey' />
            </mesh>
        }
        >
            <WarriorModel/>
        </Suspense>
        
        <mesh position-y={-0.15} rotation-x={-Math.PI*0.5} scale ={10}>
            <planeGeometry args={[1.2]}/>
            <meshStandardMaterial map = {stone} />
        </mesh>
        <Html
            position={[0,0.2,0]}
            wrapperClass='label'
            center
            distanceFactor={12}
            fontSize ={1}
        >
            Lucharon Con Honor
        </Html>
        <Float
            speed={2.5}
            floatIntensity={2}
            position={[-0.5,-1.6,3]}
        >
             <Text
            font='./RiverStonePersonalUse-qZaE1.otf'
            fontSize={0.5}
            color= 'white'
            position-y={2}
            masWidth= {1}
            textAlign = 'center'
            distanceFactor={8}
            >
                Soldados De Terracota
            </Text> 
        </Float>
      
    </>
}
