import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.js'
import { TextureLoader } from 'three'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas
        camera={ {
            fov: 90,
            near: 0.1,
            far: 200,
            position: [ 0, 3, 6 ]
        } }
    >
   
        <Experience />
    </Canvas>
)