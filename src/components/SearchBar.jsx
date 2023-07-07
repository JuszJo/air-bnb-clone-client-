import searchIcon from "../assets/search.svg"
import settingsIcon from "../assets/settings.svg"

export default function SearchBar() {
    return (
        <>
            <section>
                <div>
                    <div>
                        <img width={16} src={searchIcon} alt="search" />
                    </div>
                    <div>
                        <img width={16} src={settingsIcon} alt="settings" />
                    </div>
                </div>
            </section>
        </>
    )
}