import './App.css';
import { useState } from 'react';


import { toast, ToastList } from 'toastique-toast'

function App() {
  const [toasts, setToasts] = useState([])
  const [properties, setProperties] = useState({});

  const handleShowToast = () => {
    setToasts(toast.getToasts('info', {
      heading: "Wow",
      content: "I'm an info toast!"
    }))

    setProperties({
      position: "top-right",
      autoCloseTime: 3000
    })
  }

  return (
    <div className='App'>
      <button type='button' onClick={handleShowToast}>Show</button>
      {toasts.length > 0 && <ToastList toast={toast} toastList={toasts} properties={properties}/>}
    </div>
  );
}

export default App;
