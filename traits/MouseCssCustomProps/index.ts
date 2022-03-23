import { useCallback, useEffect, useRef } from 'react';

export default function useMouseCssCustomProps(initialActive?: boolean): // eslint-disable-next-line no-unused-vars
[mouseCssCustomProps: boolean, setMouseCssCustomProps: (active?: boolean) => void] {
  const mouseCssCustomProps = useRef<boolean>(!!initialActive);

  const mouseMoveHandler = useCallback((e?: MouseEvent) => {
    if (!e) {
      return;
    }

    document.documentElement.style.setProperty('--mouse-x', `${e.clientX}`);
    document.documentElement.style.setProperty('--mouse-y', `${e.clientY}`);
  }, []);

  const activateMouseMoveHandler = useCallback(() => {
    window.addEventListener('mousemove', mouseMoveHandler);
    mouseMoveHandler();
  }, [mouseMoveHandler]);

  const deactivateMouseMoveHandler = useCallback(() => {
    window.removeEventListener('mousemove', mouseMoveHandler);
    document.documentElement.style.removeProperty('--mouse-x');
    document.documentElement.style.removeProperty('--mouse-y');
  }, [mouseMoveHandler]);

  const updateMouseMoveHandler = useCallback(
    (active: boolean) => {
      if (active) {
        activateMouseMoveHandler();
      } else {
        deactivateMouseMoveHandler();
      }
    },
    [activateMouseMoveHandler, deactivateMouseMoveHandler],
  );

  const setMouseCssCustomProps = useCallback(
    (active?: boolean) => {
      const oldActive = mouseCssCustomProps.current;
      if (!!active === oldActive) {
        return;
      }

      mouseCssCustomProps.current = !!active;
      updateMouseMoveHandler(!!active);
    },
    [updateMouseMoveHandler],
  );

  useEffect(() => {
    updateMouseMoveHandler(mouseCssCustomProps.current);

    return () => {
      updateMouseMoveHandler(false);
    };
  }, [updateMouseMoveHandler]);

  return [mouseCssCustomProps.current, setMouseCssCustomProps];
}
