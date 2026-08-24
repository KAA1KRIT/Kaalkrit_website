import { useCallback, useEffect, useRef, useState } from "react";

type UseCarouselAutoplayOptions = {
  enabled: boolean;
  delay: number;
  reducedMotion: boolean;
  onAdvance: () => void;
};

export function useCarouselAutoplay({
  enabled,
  delay,
  reducedMotion,
  onAdvance,
}: UseCarouselAutoplayOptions) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(true);
  const [scheduleVersion, setScheduleVersion] = useState(0);
  const interactionTimer = useRef<number | undefined>(undefined);

  const clearInteractionTimer = useCallback(() => {
    if (interactionTimer.current !== undefined) {
      window.clearTimeout(interactionTimer.current);
      interactionTimer.current = undefined;
    }
  }, []);

  const restartAutoplay = useCallback(() => {
    setScheduleVersion((version) => version + 1);
  }, []);

  const beginInteraction = useCallback(() => {
    clearInteractionTimer();
    setIsInteracting(true);
  }, [clearInteractionTimer]);

  const endInteraction = useCallback(
    (graceDelay = 0) => {
      clearInteractionTimer();

      if (graceDelay <= 0) {
        setIsInteracting(false);
        restartAutoplay();
        return;
      }

      interactionTimer.current = window.setTimeout(() => {
        interactionTimer.current = undefined;
        setIsInteracting(false);
        restartAutoplay();
      }, graceDelay);
    },
    [clearInteractionTimer, restartAutoplay],
  );

  useEffect(() => {
    const updateVisibility = () => setIsPageVisible(!document.hidden);
    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    return () =>
      document.removeEventListener("visibilitychange", updateVisibility);
  }, []);

  useEffect(
    () => () => {
      clearInteractionTimer();
    },
    [clearInteractionTimer],
  );

  const shouldAutoplay =
    enabled &&
    !reducedMotion &&
    !isHovered &&
    !isFocused &&
    !isInteracting &&
    isPageVisible;

  useEffect(() => {
    if (!shouldAutoplay) return;

    const timer = window.setTimeout(() => {
      onAdvance();
      restartAutoplay();
    }, delay);

    return () => window.clearTimeout(timer);
  }, [delay, onAdvance, restartAutoplay, scheduleVersion, shouldAutoplay]);

  return {
    beginInteraction,
    endInteraction,
    setIsFocused,
    setIsHovered,
    shouldAutoplay,
    restartAutoplay,
  };
}
