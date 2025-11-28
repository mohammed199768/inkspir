"use client";

import { useEffect, useRef } from "react";
import { Renderer, Camera, Transform, Plane, Program, Mesh, Texture, Vec2, Vec4, Flowmap, Geometry } from "ogl";

export default function LiquidBackground() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const renderer = new Renderer({ dpr: 2, alpha: true });
        const gl = renderer.gl;
        containerRef.current.appendChild(gl.canvas);

        // Variable inputs to control flowmap
        let aspect = 1;
        const mouse = new Vec2(-1);
        const velocity = new Vec2();
        let velocityNeedsUpdate = false;

        function resize() {
            if (!containerRef.current) return;
            const width = containerRef.current.offsetWidth;
            const height = containerRef.current.offsetHeight;

            renderer.setSize(width, height);
            aspect = width / height;

            // Update uniforms if program exists
            if (mesh) {
                mesh.program.uniforms.res.value = new Vec4(width, height, 1, 1);
            }
        }

        const flowmap = new Flowmap(gl, {
            falloff: 0.3,
            dissipation: 0.92,
            alpha: 0.5
        });

        // Triangle that includes -1 to 1 range for 'position', and 0 to 1 range for 'uv'.
        const geometry = new Geometry(gl, {
            position: {
                size: 2,
                data: new Float32Array([-1, -1, 3, -1, -1, 3])
            },
            uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) }
        });

        const texture = new Texture(gl, {
            minFilter: gl.LINEAR,
            magFilter: gl.LINEAR
        });

        const img = new Image();
        img.onload = () => (texture.image = img);
        img.crossOrigin = "Anonymous";
        // Using a nice abstract dark background that fits the theme
        img.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop";

        const vertex = `
            attribute vec2 uv;
            attribute vec2 position;
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = vec4(position, 0, 1);
            }
        `;

        const fragment = `
            precision highp float;
            precision highp int;
            uniform sampler2D tWater;
            uniform sampler2D tFlow;
            uniform float uTime;
            varying vec2 vUv;
            uniform vec4 res;

            void main() {
                vec3 flow = texture2D(tFlow, vUv).rgb;
                vec2 uv = .5 * gl_FragCoord.xy / res.xy;
                
                // Distort UVs based on flow
                vec2 myUV = (uv - vec2(0.5)) * res.zw + vec2(0.5);
                myUV -= flow.xy * (0.15 * 1.2);

                vec2 myUV2 = (uv - vec2(0.5)) * res.zw + vec2(0.5);
                myUV2 -= flow.xy * (0.125 * 1.2);

                vec2 myUV3 = (uv - vec2(0.5)) * res.zw + vec2(0.5);
                myUV3 -= flow.xy * (0.10 * 1.4);

                vec3 tex = texture2D(tWater, myUV).rgb;
                vec3 tex2 = texture2D(tWater, myUV2).rgb;
                vec3 tex3 = texture2D(tWater, myUV3).rgb;

                gl_FragColor = vec4(tex.r, tex2.g, tex3.b, 1.0);
            }
        `;

        const program = new Program(gl, {
            vertex,
            fragment,
            uniforms: {
                uTime: { value: 0 },
                tWater: { value: texture },
                res: {
                    value: new Vec4(window.innerWidth, window.innerHeight, 1, 1)
                },
                tFlow: flowmap.uniform
            }
        });

        const mesh = new Mesh(gl, { geometry, program });

        window.addEventListener("resize", resize, false);
        resize();

        const isTouchCapable = "ontouchstart" in window;
        if (isTouchCapable) {
            window.addEventListener("touchstart", updateMouse, false);
            window.addEventListener("touchmove", updateMouse, { passive: false });
        } else {
            window.addEventListener("mousemove", updateMouse, false);
        }

        let lastTime: number;
        const lastMouse = new Vec2();

        function updateMouse(e: any) {
            if (e.changedTouches && e.changedTouches.length) {
                e.x = e.changedTouches[0].pageX;
                e.y = e.changedTouches[0].pageY;
            }
            if (e.x === undefined) {
                e.x = e.pageX;
                e.y = e.pageY;
            }

            // Get mouse value in 0 to 1 range, with y flipped
            mouse.set(e.x / gl.renderer.width, 1.0 - e.y / gl.renderer.height);

            if (!lastTime) {
                lastTime = performance.now();
                lastMouse.set(e.x, e.y);
            }

            const deltaX = e.x - lastMouse.x;
            const deltaY = e.y - lastMouse.y;

            lastMouse.set(e.x, e.y);

            const time = performance.now();
            const delta = Math.max(10.4, time - lastTime);
            lastTime = time;

            velocity.x = deltaX / delta;
            velocity.y = deltaY / delta;
            velocityNeedsUpdate = true;
        }

        let animationId: number;
        function update(t: number) {
            animationId = requestAnimationFrame(update);

            if (!velocityNeedsUpdate) {
                mouse.set(-1);
                velocity.set(0);
            }
            velocityNeedsUpdate = false;

            flowmap.aspect = aspect;
            flowmap.mouse.copy(mouse);

            flowmap.velocity.lerp(velocity, velocity.len() ? 0.15 : 0.1);
            flowmap.update();

            program.uniforms.uTime.value = t * 0.01;
            renderer.render({ scene: mesh });
        }

        animationId = requestAnimationFrame(update);

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", updateMouse);
            window.removeEventListener("touchstart", updateMouse);
            window.removeEventListener("touchmove", updateMouse);
            cancelAnimationFrame(animationId);
            if (containerRef.current && containerRef.current.contains(gl.canvas)) {
                containerRef.current.removeChild(gl.canvas);
            }
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 w-full h-full -z-10 opacity-60" />
    );
}
