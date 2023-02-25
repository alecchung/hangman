const HEAD = (
    <div
    style={{
	width: "30px",
	height: "30px",
	borderRadius: "100%",
	border: "6px solid black",
	position: "absolute",
	top: "30px",
	right: "-18px"
    }}
    />
)

const BODY = (
    <div
    style={{
	width: "6px",
	height: "71px",
	background: "black",
	position: "absolute",
	top: "70px",
	right: 0,
    }}
    />
)

const RIGHT_ARM = (
    <div
    style={{
	width: "40px",
	height: "6px",
	background: "black",
	position: "absolute",
	top: "105px",
	right: "-40px",
	rotate: "-30deg",
	transformOrigin: "left bottom",
    }}
    />
)

const LEFT_ARM = (
    <div
    style={{
	width: "40px",
	height: "6px",
	background: "black",
	position: "absolute",
	top: "105px",
	right: "5px",
	rotate: "30deg",
	transformOrigin: "right bottom",
    }}
    />
)

const RIGHT_LEG = (
    <div
    style={{
	width: "60px",
	height: "6px",
	background: "black",
	position: "absolute",
	top: "135px",
	right: "-54px",
	rotate: "60deg",
	transformOrigin: "left bottom",
    }}
    />
)

const LEFT_LEG = (
    <div
    style={{
	width: "60px",
	height: "6px",
	background: "black",
	position: "absolute",
	top: "135px",
	right: "0px",
	rotate: "-60deg",
	transformOrigin: "right bottom",
    }}
    />
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type DrawingProps = { numberOfGuesses: number }

function HangDrawing({ numberOfGuesses }: DrawingProps) {
    return (
	<div style={{ position: "relative" }}>
	    { BODY_PARTS.slice(0, numberOfGuesses) }
	    <div style={{
		height: "30px",
		width: "6px",
		background: "black",
		position: "absolute",
		top: 0,
		right: 0,
	    }} />
	    <div style={{
		height: "6px",
		width: "100px",
		background: "black",
		marginLeft: "120px",
	    }} />
	    <div style={{
		height: "220px",
		width: "6px",
		background: "black",
		marginLeft: "120px",
	    }} />
	    <div style={{
		height: "6px",
		width: "200px",
		background: "black",
		marginLeft: "20px",
	    }} />
	    </div>
    )
}

export {HangDrawing}
