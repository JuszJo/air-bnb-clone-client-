import { getFirstCharUpper } from "../utils/utils"

export default function CurrentUserIcon({user}) {
    return (
        <>
            <div className="circle-style">
                <span className="icon-name">{getFirstCharUpper(user)}</span>
            </div>
        </>
    )
}