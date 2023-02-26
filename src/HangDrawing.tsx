const HEAD = (
    <div
	key='head'
    style={{
	width: "30px",
	height: "30px",
	borderRadius: "100%",
	border: "6px solid black",
	position: "absolute",
	top: "30px",
	right: "2px"
    }}
    />
)

const BODY = (
    <div
	key='body'
    style={{
	width: "6px",
	height: "71px",
	background: "black",
	position: "absolute",
	top: "70px",
	right: 20,
    }}
    />
)

const RIGHT_ARM = (
    <div
	key='right_arm'
    style={{
	width: "40px",
	height: "6px",
	background: "black",
	position: "absolute",
	top: "105px",
	right: "-20px",
	rotate: "-30deg",
	transformOrigin: "left bottom",
    }}
    />
)

const LEFT_ARM = (
    <div
	key='left_arm'
    style={{
	width: "40px",
	height: "6px",
	background: "black",
	position: "absolute",
	top: "105px",
	right: "25px",
	rotate: "30deg",
	transformOrigin: "right bottom",
    }}
    />
)

const RIGHT_LEG = (
    <div
	key='right_leg'
    style={{
	width: "60px",
	height: "6px",
	background: "black",
	position: "absolute",
	top: "135px",
	right: "-34px",
	rotate: "60deg",
	transformOrigin: "left bottom",
    }}
    />
)

const LEFT_LEG = (
    <div
	key='left_leg'
    style={{
	width: "60px",
	height: "6px",
	background: "black",
	position: "absolute",
	top: "135px",
	right: "20px",
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
		right: 20,
	    }} />
	    <div style={{
		height: "6px",
		width: "100px",
		background: "black",
		marginLeft: "80px",
	    }} />
	    <div style={{
		height: "220px",
		width: "6px",
		background: "black",
		marginLeft: "80px",
	    }} />
	    <div style={{
		height: "6px",
		width: "200px",
		background: "black",
		marginLeft: "0px",
	    }} />
	    </div>
    )
}

export {HangDrawing}
