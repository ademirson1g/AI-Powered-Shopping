import React, { useState } from "react";
import LoadingIndicator from "./LoadingIndicator";

const LazyLoad = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <div className="relative">
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center mt-10">
          <LoadingIndicator />
        </div>
      )}
      <img
        className={`${isLoaded ? "" : "hidden"} w-full h-48 object-cover`}
        src={src}
        alt={alt}
        onLoad={handleImageLoaded}
      />
    </div>
  );
};

export default LazyLoad;
