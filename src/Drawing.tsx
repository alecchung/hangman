const HEAD = (
    <div
    style={{
	width: "40px",
	height: "40px",
	borderRadius: "100%",
	border: "8px solid black",
	position: "absolute",
	top: "49px",
	right: "-25px"
    }}
    />
)

const BODY = (
    <div
    style={{
	width: "8px",
	height: "80px",
	background: "black",
	position: "absolute",
	top: "100px",
	right: 0,
    }}
    />
)

const RIGHT_ARM = (
    <div
    style={{
	width: "60px",
	height: "8px",
	background: "black",
	position: "absolute",
	top: "150px",
	right: "-60px",
	rotate: "-30deg",
	transformOrigin: "left bottom",
    }}
    />
)

const LEFT_ARM = (
    <div
    style={{
	width: "60px",
	height: "8px",
	background: "black",
	position: "absolute",
	top: "150px",
	right: "8px",
	rotate: "30deg",
	transformOrigin: "right bottom",
    }}
    />
)

const RIGHT_LEG = (
    <div
    style={{
	width: "80px",
	height: "8px",
	background: "black",
	position: "absolute",
	top: "172px",
	right: "-72px",
	rotate: "60deg",
	transformOrigin: "left bottom",
    }}
    />
)

const LEFT_LEG = (
    <div
    style={{
	width: "80px",
	height: "8px",
	background: "black",
	position: "absolute",
	top: "172px",
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
		height: "50px",
		width: "8px",
		background: "black",
		position: "absolute",
		top: 0,
		right: 0,
	    }} />
	    <div style={{
		height: "8px",
		width: "150px",
		background: "black",
		marginLeft: "120px",
	    }} />
	    <div style={{
		height: "300px",
		width: "8px",
		background: "black",
		marginLeft: "120px",
	    }} />
	    <div style={{
		height: "8px",
		width: "250px",
		background: "black",
	    }} />
	    </div>
    )
}

export {HangDrawing}
