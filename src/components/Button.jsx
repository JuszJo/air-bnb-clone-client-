let primaryButtonStyle = {
    backgroundColor: "var(--pink)",
    border: "none",
    padding: "6px 14px",
    fontSize: "16px",
    color: "white",
    borderRadius: "4px"
}

let secondaryButtonStyle = {
    backgroundColor: "transparent",
    border: "1px solid var(--pink)",
    padding: "6px 14px",
    fontSize: "16px",
    color: "black",
    borderRadius: "4px",
    marginLeft: "6px"
}

export default function Button({text, primary, style}) {
    if(style) {
        primaryButtonStyle = {
            ...primaryButtonStyle,
            ...style
        }

        secondaryButtonStyle = {
            ...primaryButtonStyle,
            ...style
        }
    }

    return (
        <>
            <button style={primary ? primaryButtonStyle : secondaryButtonStyle}>{text}</button>
        </>
    )
}