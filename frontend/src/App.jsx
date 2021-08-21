import React, {useEffect} from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Form } from './components/Form';

export const App = () => {
  useEffect(() => {
  }, []);
  return (
    <div>
      <Header />
      <Sidebar />
      <Form />
    </div>
  );
};

