import { useCallback, useEffect, useRef, useState } from 'react';

export default function useHover(fade) {
    const ref = useRef();
    const _ref = useRef();
    const [hovered, setHovered] = useState(false);

    const enter = useCallback(() => (!hovered ? setHovered(true) : null), [hovered]);

    const leave = useCallback(
        () =>
            hovered
                ? setTimeout(() => {
                      setHovered(false);
                  }, fade)
                : null,
        [fade, hovered]
    );

    useEffect(() => {
        if (ref.current) {
            _ref.current = ref.current;
            _ref.current.addEventListener('mouseenter', enter);
            _ref.current.addEventListener('mouseleave', leave);
        }

        return () => {
            if (_ref.current) {
                _ref.current.removeEventListener('mouseenter', enter);
                _ref.current.removeEventListener('mouseleave', leave);
            }
        };
    }, [enter, leave]);

    return [ref, hovered];
}
