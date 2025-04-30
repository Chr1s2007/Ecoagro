import { useState } from 'react';
import SignUp from './SignUp';
import Principal from './Principal';


function App() {
  const [estaRegistrado, setEstaRegistrado] = useState(false);

  return (
    <div>
      {estaRegistrado ? (
        <Principal />
      ) : (
        <SignUp onSignUp={() => setEstaRegistrado(true)} />
      )}
    </div>
  );
}

export default App;
