import { useEffect } from "react";
import { useState } from "react";

export function useOnScreen(ref) {
  const [isOnScreen, setIsOnScreen] = useState(false);

  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsOnScreen(entry.isIntersecting);
    },
    {
      threshold: 0.8,
    }
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => observer.disconnect();
  });

  return isOnScreen;
}
