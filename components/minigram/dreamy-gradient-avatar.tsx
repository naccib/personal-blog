'use client';

import React, { useEffect, useRef } from 'react';

interface DreamyGradientAvatarProps {
  /**
   * The size of the avatar in pixels
   */
  size?: number;
  
  /**
   * Optional CSS class names to apply to the avatar
   */
  className?: string;

  /**
   * Colors to use for the gradient
   */
  colors?: string[];
}

/**
 * A component that displays a subtle, wave-like gradient animation for profile pictures
 * using the provided colors
 */
export default function DreamyGradientAvatar({ 
  size = 32, 
  className = '',
  colors = [
    '#E6F3FF', // Light blue
    '#D1E7FF', // Lighter blue
    '#B8D8FF', // Soft blue
    '#A0C9FF', // Medium blue
    '#B8D8FF', // Soft blue
    '#D1E7FF', // Lighter blue
  ]
}: DreamyGradientAvatarProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    canvas.width = size;
    canvas.height = size;
    
    // Animation variables
    let time = 0;
    const speed = 0.0005; // Slower speed for more subtle animation
    const radius = size / 2;
    
    // Animation function
    function animate() {
      time += speed;
      
      // Clear canvas
      ctx!.clearRect(0, 0, size, size);
      
      // Create a circular clipping path
      ctx!.beginPath();
      ctx!.arc(radius, radius, radius, 0, Math.PI * 2);
      ctx!.clip();
      
      // Create a larger canvas for the gradient to allow for movement
      const gradientSize = size * 1.5;
      const gradientX = radius - (gradientSize / 2) + Math.sin(time) * 5;
      const gradientY = radius - (gradientSize / 2) + Math.cos(time * 0.7) * 5;
      
      // Create linear gradient
      const gradient = ctx!.createLinearGradient(
        gradientX, gradientY,
        gradientX + gradientSize, gradientY + gradientSize
      );
      
      // Add color stops with animation
      colors.forEach((color, index) => {
        const offset = (index / (colors.length - 1) + time * 0.2) % 1;
        gradient.addColorStop(offset, color);
      });
      
      // Fill with gradient
      ctx!.fillStyle = gradient;
      ctx!.fillRect(0, 0, size, size);
      
      // Add subtle wave effect
      const waveAmplitude = 2;
      const waveFrequency = 0.05;
      
      ctx!.beginPath();
      for (let i = 0; i <= size; i++) {
        const y = radius + Math.sin(i * waveFrequency + time * 2) * waveAmplitude;
        if (i === 0) {
          ctx!.moveTo(i, y);
        } else {
          ctx!.lineTo(i, y);
        }
      }
      
      // Add a subtle overlay for depth
      ctx!.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx!.fill();
      
      // Request next frame
      requestAnimationFrame(animate);
    }
    
    // Start animation
    animate();
    
    // Cleanup
    return () => {
      // Animation will stop when component unmounts
    };
  }, [size, colors]);
  
  return (
    <canvas 
      ref={canvasRef}
      className={`rounded-full ${className}`}
      style={{ width: size, height: size }}
    />
  );
}