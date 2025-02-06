import { useState } from "react";
import { Skeleton } from "antd";

const Image = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  const { ...imgProps } = props;
  const [isLoad, setIsLoad] = useState(false);

  const handleImageLoad = () => {
    setIsLoad(true);
  };

  const handleImageError = () => {
    setIsLoad(true);
  };

  return (
    <>
      {!isLoad && <Skeleton.Node active style={{ width: 680, height: 730 }} />}
      <img
        {...imgProps}
        alt="Loading..."
        onError={handleImageError}
        onLoad={handleImageLoad}
        style={{ display: isLoad ? "block" : "none" }}
      />
    </>
  );
};

export default Image;
