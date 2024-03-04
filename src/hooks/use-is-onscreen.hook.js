import React from 'react';

function useIsOnscreen(wrapperRef) {
  const [isOnScreen, setIsOnScreen] = React.useState(false);
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsOnScreen(() => entry.isIntersecting);
    });
    observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, [wrapperRef]);
  return isOnScreen;
}

export default useIsOnscreen;