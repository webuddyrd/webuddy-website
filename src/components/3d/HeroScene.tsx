import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const Geometery = () => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        const t = state.clock.getElapsedTime();
        // Subtle rotation
        meshRef.current.rotation.x = Math.cos(t / 4) / 8;
        meshRef.current.rotation.y = Math.sin(t / 4) / 8;
        meshRef.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20;

        // Mouse interaction tilt
        const { x, y } = state.mouse;
        meshRef.current.rotation.x += y * 0.1;
        meshRef.current.rotation.y += x * 0.1;
    });

    return (
        <mesh ref={meshRef} scale={1.8}>
            <icosahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
                color="#3b82f6"
                roughness={0.4}
                metalness={0.6}
            />
        </mesh>
    );
};

export const HeroScene = () => {
    return (
        <div className="absolute inset-0 h-full w-full overflow-hidden bg-webuddy-dark">
            <Canvas
                style={{ height: '100%', width: '100%' }}
                camera={{ position: [0, 0, 5], fov: 75 }}
            >
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#60a5fa" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#8b5cf6" />

                <Geometery />

                <Environment preset="city" />
            </Canvas>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-webuddy-dark/30 to-webuddy-dark pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none" />
        </div>
    );
};
