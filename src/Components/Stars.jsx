import { Points, PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { random } from "maath";
import { useState, useRef } from "react";

const Stars = () => {
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 15 })
  );

  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta * 0.01;
    ref.current.rotation.y -= delta * 0.01;
  });

  return (
    <group rotation={[0, 0, 0]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="white"
          size={0.025}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export default Stars;
