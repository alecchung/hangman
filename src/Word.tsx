type WordProps = {
    guessedLetters: string[]
    wordToGuess: string
    reveal?: boolean
}

function HangWord({
    guessedLetters,
    wordToGuess,
    reveal = false,
}: WordProps) {
    return (
	<div style={{
	    display: "flex",
	    gap: ".25em",
	    fontSize: "3.5rem",
	    fontWeight: "bold",
	    fontFamily: "monospace",
	}}>
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

export {HangWord}
