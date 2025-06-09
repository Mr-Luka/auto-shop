import React, { useRef, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';

const TiltCard = ({ children, options, className }) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    const node = tiltRef.current;
    VanillaTilt.init(node, options);

    return () => node.vanillaTilt?.destroy();
  }, [options]);

  return (
    <div ref={tiltRef} className={className}>
      {children}
    </div>
  );
};

export default TiltCard;