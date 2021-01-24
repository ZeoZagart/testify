import React from 'react';
import './App.css';
import TestView from "./TestCreator/Test";
import test from "./SampleData/SampleTest";

function App() {
  return (
      <div className={'App'}>
          <TestView
              test={test}
              onTestModified={() => {console.log(`Test modified`)}}/>
      </div>
  );
}

export default App;
