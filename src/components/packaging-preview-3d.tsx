"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Decal, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { ProductKind, LogoPlacement } from "@/lib/site-data";

interface PackagingPreview3DProps {
  kind: ProductKind;
  logoPreview: string | null;
  placement: LogoPlacement;
  accent: string;
}

interface PackagingModelProps extends PackagingPreview3DProps {
  logoScale: number;
  logoX: number;
  logoY: number;
}

function PackagingModel({ kind, logoPreview, placement, accent, logoScale, logoX, logoY }: PackagingModelProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [texture, setTexture] = useState<THREE.Texture | null>(null);

  // Load the user's uploaded logo base64 string as a Three.js texture
  useEffect(() => {
    if (logoPreview) {
      const loader = new THREE.TextureLoader();
      loader.load(logoPreview, (loadedTexture) => {
        loadedTexture.colorSpace = THREE.SRGBColorSpace;
        // Make sure transparency is handled nicely
        loadedTexture.premultiplyAlpha = true;
        setTexture(loadedTexture);
      });
    } else {
      setTexture(null);
    }
  }, [logoPreview]);

  // Procedurally generate a beautiful 3D model based on the product kind
  const { geometry, position, color } = useMemo(() => {
    let geo;
    let pos: [number, number, number] = [0, 0, 0];
    let col = "#151515"; // Default dark premium color

    switch (kind) {
      case "cup":
        // Tapered cylinder for coffee cup
        geo = new THREE.CylinderGeometry(1.4, 1.1, 3.5, 64);
        pos = [0, 1.75, 0];
        col = "#111111"; // Matte black
        break;
      case "bowl":
        // Wide tapered cylinder for salad bowl
        geo = new THREE.CylinderGeometry(2, 1.5, 1.5, 64);
        pos = [0, 0.75, 0];
        col = "#D2B48C"; // Kraft paper color
        break;
      case "box":
        // Box for burger/clamshell
        geo = new THREE.BoxGeometry(3, 1.5, 3);
        pos = [0, 0.75, 0];
        col = "#D2B48C"; // Kraft paper color
        break;
      case "bag":
        // Tall box for carrier bag
        geo = new THREE.BoxGeometry(2, 3.5, 1.2);
        pos = [0, 1.75, 0];
        col = "#151515"; // Matte black
        break;
      default:
        geo = new THREE.BoxGeometry(2, 2, 2);
    }
    return { geometry: geo, position: pos, color: col };
  }, [kind]);

  // Calculate where the decal (logo) should be placed dynamically
  const { decalPosition, decalScale } = useMemo(() => {
    let y = 0;
    let z = 0;
    
    // Calculate Z offset to push the decal onto the front surface
    if (kind === 'cup') z = 1.25;
    if (kind === 'bowl') z = 1.75;
    if (kind === 'box') z = 1.5;
    if (kind === 'bag') z = 0.6;

    // Calculate Y offset based on placement selection
    if (placement === "top") y = 0.8;
    if (placement === "middle") y = 0;
    if (placement === "bottom") y = -0.8;
    
    // Adjust Y offset for shorter geometries
    if (kind === "bowl") y *= 0.4;
    if (kind === "box") y *= 0.3;
    
    // Add the base position Y so it stays relative to the object's center
    y += position[1];

    // Apply user offsets
    const finalX = logoX;
    const finalY = y + logoY;

    const baseScale = (kind === "cup" || kind === "bag") ? 1.4 : 1.8;
    const finalScale = baseScale * logoScale;

    return { 
      decalPosition: new THREE.Vector3(finalX, finalY, z),
      decalScale: new THREE.Vector3(finalScale, finalScale, finalScale)
    };
  }, [kind, placement, position, logoScale, logoX, logoY]);

  return (
    <mesh ref={meshRef} geometry={geometry} position={position} castShadow receiveShadow>
      <meshStandardMaterial 
        color={color}
        roughness={0.85} // Matte paper feel
        metalness={0.1}
      />
      {texture && (
        <Decal 
          position={decalPosition}
          rotation={[0, 0, 0]}
          scale={decalScale}
          map={texture}
        >
          <meshStandardMaterial 
            map={texture} 
            transparent 
            polygonOffset={true}
            polygonOffsetFactor={-1}
            roughness={0.5} // Make the print slightly glossier than the paper
          />
        </Decal>
      )}
    </mesh>
  );
}

export function PackagingPreview3D(props: PackagingPreview3DProps) {
  const [logoScale, setLogoScale] = useState(1);
  const [logoX, setLogoX] = useState(0);
  const [logoY, setLogoY] = useState(0);

  // Reset adjustments if product changes
  useEffect(() => {
    setLogoScale(1);
    setLogoX(0);
    setLogoY(0);
  }, [props.kind, props.logoPreview]);

  return (
    <div className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing">
      <Canvas shadows camera={{ position: [0, 3, 7], fov: 45 }}>
        {/* Premium Studio Lighting Setup */}
        <ambientLight intensity={0.4} />
        <spotLight 
          position={[5, 8, 5]} 
          angle={0.25} 
          penumbra={1} 
          intensity={1.5} 
          castShadow 
          shadow-bias={-0.0001}
        />
        <pointLight position={[-5, 5, -5]} intensity={0.5} />
        
        {/* Soft HDRI Environment */}
        <Environment preset="city" blur={0.8} />
        
        {/* Center the model visually */}
        <group position={[0, -1.5, 0]}>
          <PackagingModel {...props} logoScale={logoScale} logoX={logoX} logoY={logoY} />
          {/* Ground shadow for realism */}
          <ContactShadows 
            position={[0, 0, 0]} 
            opacity={0.5} 
            scale={15} 
            blur={2.5} 
            far={4} 
            color="#000000"
          />
        </group>

        {/* Smooth Camera Controls */}
        <OrbitControls 
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2 + 0.1}
          minDistance={4}
          maxDistance={12}
          autoRotate={!props.logoPreview} // Auto rotate gently before they upload a logo
          autoRotateSpeed={0.5}
        />
      </Canvas>
      
      {/* 3D Hint Overlay */}
      <div className="absolute top-6 left-6 pointer-events-none bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#E7E7E7] flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[#C49A62] animate-pulse" />
        <span className="text-[10px] font-bold tracking-widest uppercase text-[#0B0B0B]">Interactive 3D</span>
      </div>

      {/* Logo Adjustment Controls */}
      {props.logoPreview && (
        <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-[#E7E7E7] shadow-lg w-56 flex flex-col gap-4 z-10 cursor-default">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#0B0B0B] border-b border-[#E7E7E7] pb-2">Logo Adjustments</h4>
          
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-[#0B0B0B] flex justify-between">
              Size <span className="text-[#C49A62]">{Math.round(logoScale * 100)}%</span>
            </label>
            <input 
              type="range" min="0.2" max="2.5" step="0.05" 
              value={logoScale} 
              onChange={(e) => setLogoScale(parseFloat(e.target.value))} 
              className="w-full h-1 bg-[#E7E7E7] rounded-lg appearance-none cursor-pointer accent-[#0B0B0B]" 
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-[#0B0B0B] flex justify-between">
              Horizontal <span className="text-[#71717A]">{logoX > 0 ? 'Right' : logoX < 0 ? 'Left' : 'Center'}</span>
            </label>
            <input 
              type="range" min="-1.5" max="1.5" step="0.05" 
              value={logoX} 
              onChange={(e) => setLogoX(parseFloat(e.target.value))} 
              className="w-full h-1 bg-[#E7E7E7] rounded-lg appearance-none cursor-pointer accent-[#0B0B0B]" 
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-[#0B0B0B] flex justify-between">
              Vertical <span className="text-[#71717A]">{logoY > 0 ? 'Up' : logoY < 0 ? 'Down' : 'Center'}</span>
            </label>
            <input 
              type="range" min="-2" max="2" step="0.05" 
              value={logoY} 
              onChange={(e) => setLogoY(parseFloat(e.target.value))} 
              className="w-full h-1 bg-[#E7E7E7] rounded-lg appearance-none cursor-pointer accent-[#0B0B0B]" 
            />
          </div>
        </div>
      )}
    </div>
  );
}