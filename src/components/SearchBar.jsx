import searchIcon from "../assets/search.svg"
import settingsIcon from "../assets/settings.svg"

export default function SearchBar() {
    return (
        <>
            <section className="pd-tb">
                <div id="search-bar" className="container" >
                    <div id="search-bar-div" className="flex justify-between align-center">
                        <div className="flex align-center">
                            <div>
                                <img width={16} src={searchIcon} alt="search" />
                            </div>
                            <div id="search-text-div">
                                <div>
                                    <h4 className="small-heading">Anywhere</h4>
                                </div>
                                <div>
                                    <p id="sub-search-text">Any week &bull; Add guests</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div id="circle">
                                <img id="settings-logo" width={16} src={settingsIcon} alt="settings" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}