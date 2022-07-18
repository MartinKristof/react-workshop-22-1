import React from 'react';
import styles from './App.module.css';
import { Components } from './examples/components/Components';

const App = () => (
  <div className={styles.app}>
    <header className={styles.appHeader}>
      <section>
        <h1>React workshop 1</h1>
        <Components />
      </section>
    </header>
  </div>
);

export default App;
