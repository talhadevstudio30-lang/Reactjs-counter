import { useEffect, useState } from 'react';
import { counterContext } from './Context/Context';
import Secondpage from './Components/Secondpage';
import Finalpage from './Components/Finalpage';
import { highscore } from './Context/Context';
import Counter from './Components/Counter';


function App() {

  const [result, setResult] = useState(0);

  const plus = () => {
    setResult((result) => result + 1);

    if (result >= highscorevalue) {
      sethighscorevalue((para) => para + 1);
    }
    else {

    }

  };

  const resetbtn = () => {
    if (confirm(`your counted value is ${result} and you sure to reset you value`)) {
      setResult(0);
    }
    else {

    }


  }

  useEffect(() => {
    if (result >= 1000) {
      setmessage('Great job! Your total count is looking strong 💪')
    } else if (result >= 500) {
      setmessage('Your score is looking strong 👌 , but you still need to improve it.')
    } else if (result >= 100) {
      setmessage('your score is looking good ❤️')
    } else if (result >= 50) {
      setmessage('your score is looking nice 🤩')
    } else if (result >= 25) {
      setmessage('your score is looking great ⭐')
    } else if (result >= 10) {
      setmessage('your score is looking better 👍')
    }
    else {
      setmessage(`you score is ${result} please increase your score.`)
    }
  })

  const [message, setmessage] = useState('hello');

  const reset = () => {
    if (confirm(`your highest score is ${highscorevalue} and your new score is ${result} and are you sure to reset your all the data`)) {
      setResult(0);
      sethighscorevalue(0);
    }
    else {
      console.log('The user has canceled the reset informations')
    }
  }

  const minus = () => {
    setResult((result) => (result > 0 ? result - 1 : 0));
  };

  const [highscorevalue, sethighscorevalue] = useState(0);


  return (

    <>
      <counterContext.Provider value={{ result, setResult, message, minus, resetbtn , plus }}>
        <div>
          <Counter />
        </div>
        <div id='Total'>
          <Secondpage />
        </div>
      </counterContext.Provider>
      <highscore.Provider value={{ highscorevalue, reset }}>
        <div className='scroll-smooth' id='Score'>
          <Finalpage />
        </div>
      </highscore.Provider>


    </>

  );
}

export default App;