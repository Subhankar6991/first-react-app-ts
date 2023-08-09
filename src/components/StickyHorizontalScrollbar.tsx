import React, { useRef, useEffect, useState } from 'react';

const StickyHorizontalScrollbar = () => {
  const containerRef = useRef(null);
  const scrollbarRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const container = containerRef.current as unknown as HTMLElement;
    const scrollbar = scrollbarRef.current as unknown as HTMLElement;

    const handleScroll = () => {
      setScrollWidth(container.scrollWidth - container.clientWidth);
    };

    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const items = Array.from({ length: 20 }, (_, index) => `Item ${index + 1}`);

  return (
    <div className="container" ref={containerRef}>
      <div className="content">
        {items.map((item) => (
          <div key={item} className="item">
            {item}
          </div>
        ))}
      </div>
      <div className="scrollbar" ref={scrollbarRef} style={{ width: `${(containerRef.scrollLeft / scrollWidth) * 100}%` }}></div>
    </div>
  );
};

export default StickyHorizontalScrollbar;
