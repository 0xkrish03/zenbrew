import Image from "next/image";
import React from "react";

interface MenuItemProps {
  image: string;
  name: string;
  description: string;
  price: number;
}

const MenuItem: React.FC<MenuItemProps> = ({
  image,
  name,
  description,
  price,
}) => {
  return (
    <div className="flex items-center gap-4">
      {/* images */}
      <div className="relative w-[60px] h-[60px] xl:w-[72px] xl:h-[72px] rounded-full">
        <Image
          src={image}
          alt=""
          fill
          priority
          quality={100}
          className="object-cover"
        />
      </div>
      {/* text */}
      <div className="flex flex-col flex-1 gap-2">
        <div className="flex items-baseline justify-between gap-4">
          {/* name */}
          <p className="uppercase font-primary font-semibold leading-none text-[22px] text-primary">
            {" "}
            {name}
          </p>
          {/* border */}
          <div className="flex-1 border-b border-dashed border-primary"></div>
          {/* price */}
          <p className="leading-none font-primary font-semibold text-primary text-[30px]">
            {price.toFixed(2)}
          </p>
        </div>
        {/* description */}
        <p>{description}</p>
      </div>
    </div>
  );
};

export default MenuItem;
