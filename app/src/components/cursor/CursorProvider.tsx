import { createContext, FC, useCallback, useState } from 'react';
import { isMobile } from 'react-device-detect';
import Cursor from './Cursor';

export const CursorContext = createContext({
  isHovering: false,
  setIsHovering: (value: boolean) => {},
});

const CursorProvider: FC = ({ children }) => {
  const [hovering, setHovering] = useState(false);

  const setIsHovering = useCallback((value: boolean) => {
    setHovering(value);
  }, []);

  return (
    <CursorContext.Provider
      value={{
        setIsHovering,
        isHovering: hovering,
      }}>
      {children}
      {!isMobile && <Cursor />}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
