
import { useGLTF } from "@react-three/drei";
import { Group } from "three";

export default function WarriorModel(){
    const warrior = useGLTF("/static/Warrior.glb");
    const warrior2 = useGLTF("/static/Warrior_c.glb");
    //console.log(nodes, materials)
    return (
      <group>

        <primitive
        object={ warrior.scene }
        scale={ 3 }
        position={ [ 1, -0.1, 1 ] }
        />
        <primitive
        object={ warrior2.scene }
        scale={ 3 }
        position={ [ -1, -0.1, 2 ] }
        />
      </group>
      
    

    );
}

useGLTF.preload("/static/Warrior.glb");