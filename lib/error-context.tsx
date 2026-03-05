'use client';

import React, { createContext, useContext, useCallback, useState, ReactNode } from 'react';

interface ErrorHandlerContextType {
  onError: (error: Error | any) => void;
}

const ErrorHandlerContext = createContext<ErrorHandlerContextType | null>(null);

export const useErrorHandler = () => {
  const context = useContext(ErrorHandlerContext);
  const [_, setError] = useState();

  const triggerError = useCallback((error: Error | any) => {
    if (context) {
      context.onError(error);
    } else {
      setError(() => { throw error instanceof Error ? error : new Error(String(error)); });
    }
  }, [context]);

  return { onError: triggerError };
};

export const ErrorHandlerProvider = ({ children, onError }: { children: ReactNode; onError: (error: Error | any) => void }) => {
  return (
    <ErrorHandlerContext.Provider value={{ onError }}>
      {children}
    </ErrorHandlerContext.Provider>
  );
};
