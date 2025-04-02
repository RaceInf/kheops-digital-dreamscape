
import React, { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles: Particle[] = [];
    
    // Reduce particle count on mobile for better performance
    const particleCount = isMobile 
      ? Math.min(Math.floor(width * height * 0.00004), 30) 
      : Math.min(Math.floor(width * height * 0.00008), 100);
    
    const colors = ['#EDC07015', '#EB7E7815', '#F5F5F515']; // Using KHEOPS colors with transparency
    
    // Particle class
    class Particle {
      x: number;
      y: number;
      radius: number;
      color: string;
      speedX: number;
      speedY: number;
      
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.radius = Math.random() * (isMobile ? 2 : 3) + 1; // Smaller particles on mobile
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speedX = Math.random() * 0.4 - 0.2; // Slightly slower on mobile
        this.speedY = Math.random() * 0.4 - 0.2;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Boundary checking
        if (this.x < 0 || this.x > width) this.speedX *= -1;
        if (this.y < 0 || this.y > height) this.speedY *= -1;
      }
      
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }
    
    // Initialize canvas and particles
    const init = () => {
      canvas.width = width;
      canvas.height = height;
      
      // Create particles
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, width, height);
      
      // Draw and update particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // Connect particles with lines if they're close enough
      // Reduce connection distance on mobile for better performance
      if (!isMobile || particles.length < 40) {
        connectParticles();
      }
    };
    
    // Connect particles with lines if they're close
    const connectParticles = () => {
      const maxDistance = isMobile ? 80 : 100;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(237, 192, 112, ${0.1 - distance/(isMobile ? 800 : 1000)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };
    
    // Handle window resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      init();
    };
    
    window.addEventListener('resize', handleResize);
    init();
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export default AnimatedBackground;
