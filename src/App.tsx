import { useState, useEffect, useCallback } from 'react'
import { HangDrawing } from "./HangDrawing"
import { WordToGuess } from './WordToGuess'
import { Keyboard } from "./Keyboard"
import words from './wordList.json'
import './App.css'

function getWord() {
	return words[Math.floor(Math.random() * words.length)]
}

function App() {
	const [wordToGuess, setWordToGuess] = useState(getWord)
	const [guessedLetters, setGuessedLetters] = useState<string[]>([])

	const incorrectLetters = guessedLetters.filter(
		letter => !wordToGuess.includes(letter)
	)

	let isLoser = incorrectLetters.length >= 6
	let isWinner = wordToGuess
		.split("")
		.every(letter => guessedLetters.includes(letter))

	const addGuessedLetter = useCallback(
		(letter: string) => {
			if (guessedLetters.includes(letter) || isLoser || isWinner) return

			setGuessedLetters(currentLetter => [...currentLetter, letter])
		},
		[guessedLetters, isWinner, isLoser]
	)

	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			const key = e.key == 'ß' ? 'ẞ' : e.key.toUpperCase()
			if (!key.match(/^[a-zA-ZäöüßÄÖÜẞ]+$/)) return

			e.preventDefault()
			addGuessedLetter(key)
		}

		document.addEventListener("keypress", handler)

		return () => {
			document.removeEventListener("keypress", handler)
		}
	}, [guessedLetters])

	function restart() {
		setGuessedLetters([])
		setWordToGuess(getWord())
	}

	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			e.preventDefault()

			switch (true) {
				case e.key === "F5": ;
				case e.key === "r" && e.ctrlKey:
					location.reload();
					return;

				case e.key === "Enter":
				case e.key === "Escape":
					restart();

				default:
					return;
			}
		}

		document.addEventListener("keypress", handler)

		return () => {
			document.removeEventListener("keypress", handler)
		}
	}, [])

	return (
		<div className='app'>
			<div className="header">
				<a>Galgenmännchen <span>: Finde das Wort, rette den Mann.</span></a>
			</div>
			<HangDrawing numberOfGuesses={incorrectLetters.length} />
			<WordToGuess
				reveal={isLoser}
				guessedLetters={guessedLetters}
				wordToGuess={wordToGuess}
			/>
			<div className='keyboard-container'>
				<Keyboard
					disabled={isWinner || isLoser}
					activeLetters={guessedLetters.filter(letter =>
						wordToGuess.includes(letter)
					)}
					inactiveLetters={incorrectLetters}
					addGuessedLetter={addGuessedLetter}
				/>
			</div>

			<div onClick={restart} className={isLoser || isWinner ? 'popup' : 'no-popup'}>
				<div className="popup__msg">
					<h2>
						{isWinner ? 'Toll, Sie haben gewonnen!' : 'Pech gehabt, oder?'}
					</h2>
					<h3>
						{isWinner ? 'Lust auf noch eine Runde?' : 'Versuche es noch einmal.'}
					</h3>
					<button>Neustarten</button>
				</div>
			</div>

		</div>
	)
}

export default App
