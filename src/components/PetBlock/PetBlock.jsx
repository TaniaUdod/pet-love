import React from "react";

const PetBlock = ({ sources, defaultSrc, alt }) => {
  return (
    <>
      <picture>
        {sources.map((source, index) => (
          <source
            key={index}
            srcSet={source.srcSet}
            media={source.media}
            width={source.width}
          />
        ))}
        <img src={defaultSrc} alt={alt} />
      </picture>
    </>
  );
};

export default PetBlock;
