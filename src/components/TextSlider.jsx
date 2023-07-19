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