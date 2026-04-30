import logo from './logo.svg';
import './App.css';
import ParentComponet from './components/parent';
import { useState, useMemo } from 'react';
import { CallBackEx } from './components/callBackEx';
import Header from './components/header';
import withComponent from './components/withCounter';
import Counter from './components/Counter';
import withBorder from './components/withBorder';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback';

const EnhancedCounter = withComponent(Counter)
const CounterWithBorder = withBorder(Counter)

function App() {

  console.log('rendering form')
  const[number,setNumber] = useState(0);

  const getPowerFour = (number)=>{
        console.log('power 4 of number ',number)
        return number**4
  }
  const memoizedNUmber = useMemo(()=>getPowerFour(number),[number])

  const [name,setName] = useState('');



  return (
    <div className="App">
     {/* <input type='number' value={number} placeholder='Enter the number'
     onChange={(e)=>setNumber(e.target.value)} />
     <div>Output:{memoizedNUmber}</div>

    <ParentComponet/>
     <CallBackEx/> */}

    {/* <Header title='Input Field'/>
    <input type='text' value={name} 
    onChange={(e)=>setName(e.target.value)}/> */}

    {/* <EnhancedCounter/>
    <CounterWithBorder/> */}

     <ErrorBoundary
    FallbackComponent={ErrorFallback}
    fallbackRender={ErrorFallback}
     >
      <CounterWithBorder/>
     </ErrorBoundary>

    </div>
  );
}

export default App;
