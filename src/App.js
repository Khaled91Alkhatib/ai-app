import React, { useEffect } from "react";
import alanBtn from '@alan-ai/alan-sdk-web';

function App() {
  useEffect(() => {
    alanBtn({
      key: "ea0ad6213a1e3077c0ee9e3212f2793d2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command }) => {
        if (command === 'testCommand') {
          alert('This code is excuted');
        }
      }
    });
  }, []);

  return (
    <div>
      <h1>AI News Application</h1>
    </div>
  );
}

export default App;
