import React from "react";
import { Img } from "react-image";
import placeholder from "./product-placeholder.png";

const Placeholder = () => <img src={placeholder} alt="product img loder" />;

const Image: React.FC<{
  url?: string | [string];
  alt?: string;
  unloader?: string;
  loader?: string;
  className?: string;
  style?: any;
}> = ({ url, alt = "placeholder", unloader, loader, className, style }) => {
  return (
    <Img
      draggable={false}
      style={style}
      src={url as string}
      alt={alt}
      loader={<Placeholder />}
      unloader={<Placeholder />}
      className={className}
    />
  );
};

export default Image;
