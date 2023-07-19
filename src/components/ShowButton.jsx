const showMoreButtonStyle = {
    border: "2px solid #717171",
    borderRadius: "7px",
    backgroundColor: "transparent",
    padding: "0.7rem 1.3rem",
    fontSize: "16px",
    fontWeight: "500",
}

export default function ShowButton() {
    return (
        <>
            <button style={showMoreButtonStyle}>Show more</button>
        </>
    )
}