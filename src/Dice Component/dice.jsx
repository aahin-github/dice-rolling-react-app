import './dice.css';
import { useState } from 'react';
import { FaDiceFive, FaDiceFour, FaDiceOne, FaDiceSix, FaDiceThree, FaDiceTwo } from "react-icons/fa6";
import diceSound from '../asserts/dice.mp3'

const Dice = () => {
    const diceValue = ["One", "Two", "Three", "Four", "Five", "Six"];

    const [values, setValues] = useState({
        diceOne: null,
        diceTwo: null
    });
    const getDiceIcon = (value) => {
        switch (value) {
            case 0: return <FaDiceOne className='icon' />;
            case 1: return <FaDiceTwo className='icon' />;
            case 2: return <FaDiceThree className='icon' />;
            case 3: return <FaDiceFour className='icon' />;
            case 4: return <FaDiceFive className='icon' />;
            default: return <FaDiceSix className='icon' />;
        }
    };

    const handleDiceRolling = () => {

        const diceOneValue = Math.floor(Math.random() * diceValue.length);
        const diceTwoValue = Math.floor(Math.random() * diceValue.length);

        setValues({
            diceOne: diceOneValue,
            diceTwo: diceTwoValue
        });
        const sound = new Audio(diceSound);
        sound.play();
    };

    return (
        <div className="container">
            <h2>Dice Roller</h2>
            <div className="dice-wrapper">
                <div className="dice">{values.diceOne !== null ? getDiceIcon(values.diceOne) : getDiceIcon(0)}</div>
                <div className="dice">{values.diceTwo !== null ? getDiceIcon(values.diceTwo): getDiceIcon(5)}</div>
            </div>
            <button onClick={handleDiceRolling}>Roll Dice</button>
        </div>
    );
};

export default Dice;
