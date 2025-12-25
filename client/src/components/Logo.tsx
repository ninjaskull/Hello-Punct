import logoWhite from "@assets/1_HPC_38in_X_34in_One_way_Vision-removebg-preview-fotor-20250_1766664609446.webp";
import logoDark from "@assets/1_HPC_38in_X_34in_One_way_Vision-removebg-preview_1766664609445.webp";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export default function Logo({ variant = "light", className = "" }: LogoProps) {
  const src = variant === "light" ? logoWhite : logoDark;
  const alt = "Hello Puncture";

  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      data-testid="logo-image"
    />
  );
}
