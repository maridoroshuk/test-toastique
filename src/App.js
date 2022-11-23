import './App.css';
import { useState } from 'react';


import { toast, ToastList } from 'toastique-toast'

function App() {
  const [toasts, setToasts] = useState([])

  const handleShowTopRightToast = () => {
    toast.addToast('info', {
      heading: "Wow",
      content: "I'm an info toast!",
      position: "top-right"
    })
    setToasts(toast.getToasts())
  }

  const handleShowBottomLeftToast = () => {
    toast.addToast('success', {
      heading: "Wow",
      content: "I'm an success toast!",
      position: "bottom-left"
    })
    setToasts(toast.getToasts())
  }

  return (
    <div className='App'>
      <button type='button' onClick={handleShowTopRightToast}>Show top-rigth toasts</button>
      <button type='button' onClick={handleShowBottomLeftToast}>Show bottom-left toasts</button>
      {toasts.length > 0 && <ToastList toast={toast} toastList={toasts} />}
    </div>
  );
}

export default App;
