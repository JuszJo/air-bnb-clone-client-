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
    translate: "0 -50%"
}

// export function TogglerButton() {
//     return (
//         <>
//             <div style={buttonStyle}>
//                 <div style={circleStyle}>

//                 </div>
//             </div>
//         </>
//     )
// }

export default function TextSlider({heading, destinations}) {
    return (
        <>
            <div>
                <div>
                    <h2 className="sub-heading">{heading}</h2>
                </div>
                <div style={{overflow: "scroll"}}>
                    <div id="text-slider-dest-div" className="flex align-center gap-5" style={{whiteSpace: "nowrap", marginTop: "0.5rem"}}>
                        {
                            destinations.map(text => <h4 key={text} className="small-heading">{text}</h4>)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}