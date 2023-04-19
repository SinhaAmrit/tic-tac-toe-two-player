import React, { useState } from 'react'
import './Playground.css'
const Playground = () => {
    const [turn, setTurn] = useState('X');
    const [cells, setCells] = useState(Array(9).fill(''));
    const [winner, setWinner] = useState(null);
    const checkForWinner = (squares) => {
        let combos = {
            across: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8]
            ],
            down: [
                [0, 1, 2],
                [1, 4, 7],
                [2, 5, 8]
            ],
            diagonal: [
                [0, 4, 8],
                [2, 4, 6]
            ]
        };
        for (let combo in combos) {
            combos[combo].forEach((pattern) => {
                if (squares[pattern[0]] === '' || squares[pattern[1]] === '' || squares[pattern[2]] === '') { }
                else if (squares[pattern[0]] === squares[pattern[1]] && squares[pattern[1]] === squares[pattern[2]]) {
                    setWinner(squares[pattern[0]] + " is the winner!");
                }
                else if (!squares.includes('')) {
                    setWinner("It's a DRAW!");
                }
            });
        }
    };
    const handleclick = (num) => {
        if (cells[num] !== '' || winner !== null) return;
        let squares = [...cells];
        if (turn === 'X') {
            squares[num] = 'X';
            setTurn('O');
        }
        else {
            squares[num] = 'O';
            setTurn('X');
        }
        checkForWinner(squares);
        setCells(squares);
    }
    const handleRestart = () => {
        setWinner(null);
        setCells(Array(9).fill(''));
    }
    const Cell = ({ num }) => (<td onClick={() => handleclick(num)}>{cells[num]}</td>);
    return (
        <div className='container'>
            <table className='border-none'>
                <tbody>
                    <tr>
                        <Cell num={0} />
                        <Cell num={1} />
                        <Cell num={2} />
                    </tr>
                    <tr>
                        <Cell num={3} />
                        <Cell num={4} />
                        <Cell num={5} />
                    </tr>
                    <tr>
                        <Cell num={6} />
                        <Cell num={7} />
                        <Cell num={8} />
                    </tr>
                </tbody>
                <p>
                    {!winner && (
                        <>
                            {turn}'s turn!
                        </>
                    )}
                </p>
            </table>
            {winner && (
                <>
                    <p>{winner}</p>
                    <button className='button' onClick={() => handleRestart()}>Play Again</button>
                </>
            )}
        </div>
    )
}

export default Playground