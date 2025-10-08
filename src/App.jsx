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
    if (result >= 5000) {
      setmessage('🏆 Incredible! You’ve reached a legendary score! React Master unlocked 🚀🔥');
    } else if (result >= 2500) {
      setmessage('💫 Amazing work! You’re dominating the counter like a true pro ⚡');
    } else if (result >= 1500) {
      setmessage('🌟 Excellent! You’re showing serious dedication and skill 💪');
    } else if (result >= 1000) {
      setmessage('🔥 Great job! Your total count is looking super strong 💥');
    } else if (result >= 750) {
      setmessage('⚔️ Impressive progress! You’re pushing limits and getting better every click 🧠');
    } else if (result >= 500) {
      setmessage('👌 Nice! Your score is looking strong, but you can go even higher! 🚀');
    } else if (result >= 250) {
      setmessage('💖 Great effort! Keep it up and aim for that next milestone ⭐');
    } else if (result >= 100) {
      setmessage('❤️ Good score! You’re making steady progress — consistency wins 💪');
    } else if (result >= 50) {
      setmessage('🤩 Nice work! You’re getting the hang of it — keep clicking!');
    } else if (result >= 25) {
      setmessage('🌈 Great start! You’re warming up beautifully ⭐');
    } else if (result >= 10) {
      setmessage('👍 Your score is improving — keep pushing forward 💥');
    } else if (result > 0) {
      setmessage(`🧮 Your score is ${result}. Keep going, every tap counts! 💫`);
    } else {
      setmessage('⚡ Let’s start counting! Click + to begin your React journey 💥');
    }
  });


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
      <counterContext.Provider value={{ result, setResult, message, minus, resetbtn, plus }}>
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