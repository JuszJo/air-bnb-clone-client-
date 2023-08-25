// import searchIcon from "../assets/search.svg"
// import settingsIcon from "../assets/settings.svg"
import searchIcon from "../assets/search2.png"

const inputStyle = {
    width: "100%",
    height: "2.75rem",
    borderRadius: "2.5rem",
    border: "1px solid var(--pink)",
    paddingLeft: "1rem",
    fontSize: "0.9rem",
}

const imageStyle = {
    position: "absolute",
    right: "8px",
    top: "50%",
    transform: "translateY(-50%)",
}

export default function SearchBar() {
    return (
        <>
            <div style={{position: "relative"}} className="search-container" >
                <input style={inputStyle} type="text" id="search" placeholder="Start Your Search" />
                <img style={imageStyle} src={searchIcon} alt="search"/>
            </div>
        </>
    )
}

// export default function SearchBar() {
//     return (
//         <>
//             <section className="pd-tb">
//                 <div id="search-bar" className="container" >
//                     <div id="search-bar-div" className="flex justify-between align-center">
//                         <div className="flex align-center">
//                             <div>
//                                 <img width={16} src={searchIcon} alt="search" />
//                             </div>
//                             <div id="search-text-div" style={{paddingBottom: "1px", lineHeight: 1}}>
//                                 <div>
//                                     <h4 className="small-heading">Anywhere</h4>
//                                 </div>
//                                 <div style={{marginTop: "0.25rem"}}>
//                                     <p id="sub-search-text">Any week &bull; Add guests</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div>
//                             <div id="circle">
//                                 <img id="settings-logo" width={16} src={settingsIcon} alt="settings" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }