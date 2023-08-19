const togglerStyle = {
    border: "1px solid var(--light-grey)",
    borderRadius: "10px",
    padding: "0.75rem"
}

const buttonStyle = {
    width: "50px",
    height: "30px",
    borderRadius: "20px",
    backgroundColor: "#B0B0B0",
    position: "relative",
}

const circleStyle = {
    width: "27px",
    height: "27px",
    borderRadius: "50%",
    backgroundColor: "white",
    position: "absolute",
    top: "50%",
    left: "1px",
}

export function TogglerButton() {
    function handleClick(e) {
        e.currentTarget.classList.toggle("translate-r")

        const parentElement = e.currentTarget.parentElement

        let parentBGColor = parentElement.style.backgroundColor

        parentBGColor = parentBGColor == "rgb(100, 100, 100)" ? "rgb(176, 176, 176)" : "rgb(100, 100, 100)"

        parentElement.style.backgroundColor = parentBGColor
    }

    return (
        <>
            <div style={buttonStyle}>
                <div style={circleStyle} onClick={handleClick} className="translate">

                </div>
            </div>
        </>
    )
}

export default function Toggler({heading, paragraph}) {
    return (
        <>
            <section className="container pd-tb">
                <div style={togglerStyle} className="toggler-container">
                    <div style={{padding: "0 0.75rem"}} className="flex justify-between align-center">
                        <div>
                            <div>
                                <h4 className="small-heading">{heading}</h4>
                            </div>
                            <div>
                                <p className="paragraph">{paragraph}</p>
                            </div>
                        </div>
                        <div>
                            <TogglerButton />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}