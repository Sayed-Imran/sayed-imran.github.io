'use client';

import { useRef, useMemo, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';

interface BackgroundLogosProps {
    scrollY: number;
}

export default function BackgroundLogos({ scrollY }: BackgroundLogosProps) {
    // Create smooth motion values for scroll
    const scrollMotionValue = useMotionValue(scrollY);
    const smoothScrollY = useSpring(scrollMotionValue, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Update motion value when scrollY changes
    useEffect(() => {
        scrollMotionValue.set(scrollY);
    }, [scrollY, scrollMotionValue]);

    // Base URL for GitHub raw content
    const baseUrl = 'https://raw.githubusercontent.com/sayed-imran/sayed-imran.github.io/master/public/logos';

    const logos = useMemo(() => [
        // Priority logos - visible on first page load
        {
            src: `${baseUrl}/google-cloud-icon-2048x1646-7admxejz.png`,
            alt: 'Google Cloud',
            scale: 280,
            position: { x: -25, y: -15 },
            rotation: 0,
            priority: true
        },
        {
            src: `${baseUrl}/Kubernetes_logo_without_workmark.svg.png`,
            alt: 'Kubernetes',
            scale: 280,
            position: { x: 25, y: -15 },
            rotation: 0,
            priority: true
        },
        {
            src: `${baseUrl}/Amazon_Web_Services_Logo.svg.png`,
            alt: 'AWS',
            scale: 280,
            position: { x: 0, y: 20 },
            rotation: 0,
            priority: true
        },
        // Secondary logos - make some secondary logos visible early too
        {
            src: `${baseUrl}/docker-mark-blue.png`,
            alt: 'Docker',
            scale: 260,
            position: { x: 25, y: -55 },
            rotation: -15,
            priority: true // Make Docker visible early
        },
        {
            src: `${baseUrl}/azure.png`,
            alt: 'Azure',
            scale: 240,
            position: { x: -60, y: -30 },
            rotation: 20,
            priority: true // Make Azure visible early
        },
        {
            src: `${baseUrl}/istio-logo-icon-342x512-gh5boo0w.png`,
            alt: 'Istio',
            scale: 220,
            position: { x: 60, y: -20 },
            rotation: -25
        },
        {
            src: `${baseUrl}/Linux.png`,
            alt: 'Linux',
            scale: 250,
            position: { x: -20, y: 60 },
            rotation: 10
        },
        {
            src: `${baseUrl}/Jenkins_logo.svg.png`,
            alt: 'Jenkins',
            scale: 200,
            position: { x: 55, y: -45 },
            rotation: -20
        },
        {
            src: `${baseUrl}/github-logo.png`,
            alt: 'GitHub',
            scale: 180,
            position: { x: -55, y: -60 },
            rotation: 25
        }
    ], [baseUrl]);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {logos.map((logo, index) => {
                // Create smooth transforms for each logo - use more gradual scroll effect
                const logoY = useTransform(smoothScrollY, [0, 500, 1500], [0, -50 - index * 10, -150 - index * 25]);
                const logoX = useTransform(smoothScrollY, [0, 800, 1600], [0, (index % 2 === 0 ? 10 : -10), (index % 2 === 0 ? 25 : -25)]);
                const logoRotate = useTransform(smoothScrollY, [0, 1000, 2000], [logo.rotation, logo.rotation + (index % 2 === 0 ? 5 : -5), logo.rotation + (index % 2 === 0 ? 15 : -15)]);

                // All logos need to be visible, but priority logos are more prominent
                const logoOpacity = useTransform(
                    smoothScrollY,
                    [0, 300, 600, 1000],
                    logo.priority ? [0.6, 0.7, 0.5, 0.3] : [0.3, 0.4, 0.25, 0.2]
                );

                return (
                    <motion.div
                        key={index}
                        className="absolute transition-opacity duration-700 ease-out"
                        style={{
                            left: `${50 + logo.position.x}%`,
                            top: `${50 + logo.position.y}%`,
                            width: `${logo.scale}px`,
                            height: `${logo.scale}px`,
                            opacity: logoOpacity,
                            y: logoY,
                            x: logoX,
                        }}
                        initial={{
                            opacity: 0,
                            scale: 0,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{
                            duration: logo.priority ? 1.5 : 2.5,
                            delay: logo.priority ? index * 0.1 : index * 0.2 + 0.5,
                            ease: [0.25, 0.46, 0.45, 0.94] // Custom cubic bezier for smooth entry
                        }}
                        whileHover={{
                            scale: 1.05,
                            transition: {
                                duration: 0.6,
                                ease: "easeOut"
                            }
                        }}
                    >
                        <motion.div
                            style={{
                                rotate: logoRotate,
                            }}
                            animate={{
                                y: [0, -15, 0],
                                x: [0, 8, 0],
                                scale: [1, 1.05, 1],
                            }}
                            transition={{
                                y: {
                                    duration: 6 + index * 0.8,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.5
                                },
                                x: {
                                    duration: 4 + index * 0.6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.3
                                },
                                scale: {
                                    duration: 8 + index * 0.7,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.2
                                }
                            }}
                        >
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={logo.scale}
                                height={logo.scale}
                                className="object-contain transition-all duration-500 ease-out"
                                loading={logo.priority ? "eager" : "lazy"}
                                priority={logo.priority}
                                unoptimized={true} // Add this to bypass Next.js image optimization for external URLs
                            />
                        </motion.div>
                    </motion.div>
                );
            })}

            {/* Additional floating particles */}
            {/* Generate particles with deterministic positions for SSR compatibility */}
            {Array.from({ length: 15 }).map((_, index) => {
                // Use deterministic positions based on index
                const particleY = useTransform(smoothScrollY, [0, 1000], [0, -150 - index * 5]);
                const particleOpacity = useTransform(smoothScrollY, [0, 200, 800], [0.3, 0.5, 0.2]);

                // Deterministic positions based on index
                const positions = [
                    { left: "62.837780784507125%", top: "27.260318554792494%" },
                    { left: "21.048918450749188%", top: "91.97630561793609%" },
                    { left: "20.18998719507853%", top: "39.91038742849805%" },
                    { left: "33.20097302853955%", top: "91.01639236372549%" },
                    { left: "16.14941789970442%", top: "74.5919712213482%" },
                    { left: "40.13379316568155%", top: "20.917611032268436%" },
                    { left: "97.29735093743349%", top: "0.8512651869696963%" },
                    { left: "62.393396817110656%", top: "87.48874549374116%" },
                    { left: "64.99575329673128%", top: "0.6813437450747029%" },
                    { left: "35.53104584329895%", top: "33.37259799436413%" },
                    { left: "24.763469494983337%", top: "85.11606650480806%" },
                    { left: "2.520163881178006%", top: "32.470042994231754%" },
                    { left: "73.59267447645857%", top: "85.74531099963451%" },
                    { left: "98.96348855491527%", top: "32.67727814386794%" },
                    { left: "9.541782417623235%", top: "13.120849613831997%" }
                ];

                // Get position for this particle or use fallbacks if we run out
                const position = positions[index % positions.length];

                return (
                    <motion.div
                        key={`particle-${index}`}
                        className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                        style={{
                            left: position.left,
                            top: position.top,
                            opacity: 0.3,
                            transform: "none",
                            y: particleY,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 12 + (index % 6),
                            repeat: Infinity,
                            delay: index,
                            ease: "easeInOut"
                        }}
                    />
                );
            })}
        </div>
    );
}
