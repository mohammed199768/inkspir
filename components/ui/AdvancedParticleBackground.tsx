// © Mohammad Aldomi — Project Source Code

"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface StarLayerProps {
    count: number;
    radius: number;
    speed: number;
    color: string;
    size: number;
    zOffset: number;
}

function StarLayer({ count, radius, speed, color, size, zOffset }: StarLayerProps) {
    const ref = useRef<THREE.Points>(null!);
    const tweenRef = useRef({ twinkle: 0, scrollY: 0 });

    const positions = useMemo(() => {
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const r = Math.random() * radius + 2;
            const theta = 2 * Math.PI * Math.random();
            const phi = Math.acos(2 * Math.random() - 1);

            positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = r * Math.cos(phi) + zOffset;
        }
        return positions;
    }, [count, radius, zOffset]);

    useEffect(() => {
        // GSAP twinkle animation
        gsap.to(tweenRef.current, {
            twinkle: 1,
            duration: 2 + Math.random() * 2,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
        });

        // GSAP scroll-based parallax
        gsap.to(tweenRef.current, {
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
                onUpdate: (self) => {
                    tweenRef.current.scrollY = self.progress;
                },
            },
        });
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            // Slow rotation based on speed
            ref.current.rotation.x += delta * speed * 0.05;
            ref.current.rotation.y += delta * speed * 0.03;

            // Apply scroll parallax
            ref.current.position.y = tweenRef.current.scrollY * speed * 2;

            // Twinkle effect by pulsing opacity
            const material = ref.current.material as THREE.PointsMaterial;
            material.opacity = 0.4 + tweenRef.current.twinkle * 0.6;
        }
    });

    return (
        <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color={color}
                size={size}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                opacity={0.8}
            />
        </Points>
    );
}

function SpaceScene() {
    const { camera } = useThree();

    useEffect(() => {
        camera.position.set(0, 0, 12);

        // GSAP camera animation
        gsap.to(camera.position, {
            z: 10,
            duration: 8,
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1,
        });

        // Gentle camera rotation
        gsap.to(camera.rotation, {
            z: 0.1,
            duration: 15,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
        });
    }, [camera]);

    return (
        <>
            {/* Background stars - furthest, slowest */}
            <StarLayer
                count={1500}
                radius={15}
                speed={0.1}
                color="#4a5568"
                size={0.02}
                zOffset={-5}
            />

            {/* Mid-layer stars - medium distance and speed */}
            <StarLayer
                count={1000}
                radius={12}
                speed={0.2}
                color="#8b5cf6"
                size={0.025}
                zOffset={0}
            />

            {/* Foreground stars - closest, fastest, brightest */}
            <StarLayer
                count={500}
                radius={10}
                speed={0.3}
                color="#e0e7ff"
                size={0.04}
                zOffset={3}
            />
        </>
    );
}

export default function AdvancedParticleBackground() {
    return (
        <div className="fixed inset-0 z-0 bg-gradient-to-b from-[#0a0118] via-[#1a0b2e] to-[#0f0520]">
            <Canvas
                camera={{ position: [0, 0, 12], fov: 60 }}
                gl={{
                    antialias: false,
                    alpha: true,
                    powerPreference: "high-performance",
                }}
                onCreated={({ gl }) => {
                    gl.setClearColor(0x0a0118, 0);
                }}
            >
                <fog attach="fog" args={['#0a0118', 8, 25]} />
                <SpaceScene />
            </Canvas>
        </div>
    );
}
