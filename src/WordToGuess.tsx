type WordProps = {
    guessedLetters: string[]
    wordToGuess: string
    reveal?: boolean
}

function WordToGuess({
    guessedLetters,
    wordToGuess,
    reveal = false,
}: WordProps) {
    return (
	<div className="word-to-guess">
	    { wordToGuess.split("").map((letter, index) => (
		<span style={{
		    borderBottom: ".1em solid black"
		}} key={ index }>
		<span style={{
		    visibility: guessedLetters.includes(letter) || reveal
			? "visible"
			: "hidden",
		    color:
		    !guessedLetters.includes(letter) && reveal ? "read" : "black",
		}}>
		    { letter }
		</span>
		    </span>
	    )) }
	    </div>
    )
}

export {WordToGuess}
