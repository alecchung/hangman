import styles from './Keyboard.module.css'

const KEYS = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "",
    "X",
    "Y",
    "Z",
    "Ä",
    "Ö",
    "Ü",
    "",
    "ẞ",
]

type KeyboardProps = {
    disabled?: boolean
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
}

function Keyboard({
    activeLetters,
    inactiveLetters,
    addGuessedLetter,
    disabled = false,
}: KeyboardProps) {
    return (
        <div className='keyboard'>
            {KEYS.map(key => {
                const isActive = activeLetters.includes(key)
                const isInactive = inactiveLetters.includes(key)
                return (
                    <button
                        onClick={() => addGuessedLetter(key)}
                        className={
                            `${styles.btn} ${isActive ? styles.active : ""} 
                            ${isInactive ? styles.inactive : ""}`
                        }
                        disabled={isInactive || isActive || disabled}
                        key={key}
                    >{key}</button>
                )
            })}
        </div>
    )
}

export { Keyboard }
