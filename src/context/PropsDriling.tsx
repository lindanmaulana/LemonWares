import React, { createContext, ReactNode, useRef } from "react";
type propsDrilingContext = {
  heroBannerRef: React.MutableRefObject<null>;
  aboutRef: React.MutableRefObject<null>;
  ourServicesRef: React.MutableRefObject<null>;
  blogNewsRef: React.MutableRefObject<null>;
  contactRef: React.MutableRefObject<null>;
  accountRef: React.MutableRefObject<null>
};

const PropsDrilingContext = createContext<propsDrilingContext | null>(null);

const PropsDrilingContextProvider = ({ children }: { children: ReactNode }) => {
  const heroBannerRef = useRef(null);
  const aboutRef = useRef(null);
  const ourServicesRef = useRef(null);
  const blogNewsRef = useRef(null);
  const contactRef = useRef(null);
  const accountRef = useRef(null)

  const contextValue: propsDrilingContext = {
    heroBannerRef,
    aboutRef,
    ourServicesRef,
    blogNewsRef,
    contactRef,
    accountRef
  };

  return (
    <PropsDrilingContext.Provider value={contextValue}>
      {children}
    </PropsDrilingContext.Provider>
  );
};

export const PropsDriling = PropsDrilingContext;
export default PropsDrilingContextProvider;
