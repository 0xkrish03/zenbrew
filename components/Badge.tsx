import Image from "next/image";
import React from "react";

interface BadgeProps {
  containerStyle: string;
}

const Badge: React.FC<BadgeProps> = ({ containerStyle }) => {
  return (
    <div className={`relative ${containerStyle}`}>
      <Image src="/assets/badge.svg" fill alt="" className="object-contain" />
    </div>
  );
};

export default Badge;
