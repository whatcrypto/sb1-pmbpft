import React, { createContext, useContext } from 'react';

interface SeoContextType {
  setMetaTags: (tags: { title?: string; description?: string; }) => void;
}

const SeoContext = createContext<SeoContextType>({
  setMetaTags: () => {},
});

export function SeoProvider({ children }: { children: React.ReactNode }) {
  const setMetaTags = ({ title, description }: { title?: string; description?: string; }) => {
    if (title) {
      document.title = `${title} | WhatCrypto`;
    }
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = description;
        document.head.appendChild(meta);
      }
    }
  };

  return (
    <SeoContext.Provider value={{ setMetaTags }}>
      {children}
    </SeoContext.Provider>
  );
}

export const useSeo = () => useContext(SeoContext);