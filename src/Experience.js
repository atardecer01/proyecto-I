import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import WarriorModel from './WarriorModel'
import { MeshStandardMaterial, Scene, TextureLoader } from 'three'
import { useLoader } from '@react-three/fiber'

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

        <WarriorModel>
            <MeshStandardMaterial/>
        </WarriorModel>
           
        <mesh position-y={-0.15} rotation-x={-Math.PI*0.5} scale ={10}>
            <planeGeometry args={[1.2]}/>
            <meshStandardMaterial map = {stone} />
        </mesh>
    </>
}