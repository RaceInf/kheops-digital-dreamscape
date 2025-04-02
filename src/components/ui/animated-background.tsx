
import React, { useEffect, useRef, useState } from 'react';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isEnabled, setIsEnabled] = useState<boolean>(true);
  
  useEffect(() => {
    const savedPreference = localStorage.getItem('animationEnabled');
    if (savedPreference !== null) {
      setIsEnabled(savedPreference === 'true');
    }
  }, []);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isEnabled) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles: Particle[] = [];
    const particleCount = Math.min(Math.floor(width * height * 0.00008), 100);
    const colors = ['#EDC07025', '#EB7E7825', '#F5F5F525'];
    let animationFrameId: number;
    
    // Particle class with improved animation
    class Particle {
      x: number;
      y: number;
      radius: number;
      color: string;
      speedX: number;
      speedY: number;
      pulseDirection: number;
      pulseSpeed: number;
      originalRadius: number;
      
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.originalRadius = Math.random() * 4 + 1;
        this.radius = this.originalRadius;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.pulseDirection = 1;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Pulsating effect
        this.radius += this.pulseDirection * this.pulseSpeed;
        
        if (this.radius > this.originalRadius * 1.3) {
          this.pulseDirection = -1;
        } else if (this.radius < this.originalRadius * 0.7) {
          this.pulseDirection = 1;
        }
        
        // Boundary checking with smooth transitions
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
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
    
    // Animation loop with improved performance
    const animate = () => {
      if (!isEnabled) return;
      
      animationFrameId = requestAnimationFrame(animate);
      
      // Use a semi-transparent clear to create a trail effect
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.fillRect(0, 0, width, height);
      
      // Draw and update particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // Connect particles with lines if they're close enough
      connectParticles();
    };
    
    // Connect particles with curved lines for a more organic feel
    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            // Create a gradient for a more natural connection
            const gradient = ctx.createLinearGradient(
              particles[i].x, 
              particles[i].y, 
              particles[j].x, 
              particles[j].y
            );
            
            gradient.addColorStop(0, `rgba(237, 192, 112, ${0.15 - distance/1500})`);
            gradient.addColorStop(1, `rgba(235, 126, 120, ${0.15 - distance/1500})`);
            
            ctx.beginPath();
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            
            // Optional: create curved lines for more organic feel
            const midX = (particles[i].x + particles[j].x) / 2;
            const midY = (particles[i].y + particles[j].y) / 2 - 10;
            ctx.quadraticCurveTo(midX, midY, particles[j].x, particles[j].y);
            
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
      cancelAnimationFrame(animationFrameId);
    };
  }, [isEnabled]);
  
  const toggleAnimation = () => {
    const newState = !isEnabled;
    setIsEnabled(newState);
    localStorage.setItem('animationEnabled', String(newState));
  };
  
  return (
    <>
      {isEnabled && (
        <canvas 
          ref={canvasRef} 
          className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
          aria-hidden="true"
        />
      )}
      <button 
        onClick={toggleAnimation} 
        className="fixed bottom-4 right-4 z-50 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
        aria-label={isEnabled ? "Désactiver l'animation de fond" : "Activer l'animation de fond"}
        title={isEnabled ? "Désactiver l'animation de fond" : "Activer l'animation de fond"}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {isEnabled ? (
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z M12 12v.01" />
          ) : (
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 9h.01 M12 12h.01 M12 15h.01 M17 12h.01 M7 12h.01" />
          )}
        </svg>
      </button>
    </>
  );
};

export default AnimatedBackground;
