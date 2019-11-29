import React, { useState, createContext, useContext } from 'react';
import { useProjects } from '../hooks';

export const SelectedProjectsContext = createContext();
export const SelectedProjectsProvider = ({ children }) => {
  const { selectedProjects, setSelectedProjects } = useState('INBOX');

  return (
    <SelectedProjectsContext.Provider value={{ selectedProjects, setSelectedProjects }}>
      {children}
    </SelectedProjectsContext.Provider>
  );
};

export const useSelectedProjectsValue = () => useContext(SelectedProjectsContext);