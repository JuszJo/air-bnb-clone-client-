export default function Skeleton({listing}) {

    return (
        <>
            {
                !listing ?        
                    <div className="skeleton">
                        <div className="skeleton-image skeleton-element skeleton-animate"></div>
                        <div className="flex justify-between">
                            <div className="skeleton-text skeleton-element skeleton-animate"></div>
                            <div className="skeleton-text-2 skeleton-element skeleton-animate"></div>
                        </div>
                        <div className="skeleton-text-3 skeleton-element skeleton-animate"></div>
                        <div className="skeleton-text-4 skeleton-element skeleton-animate"></div>
                    </div>
                    :
                    <div className="skeleton">
                        <div className="skeleton-image skeleton-element skeleton-animate"></div>
                        <div className="flex justify-between">
                            <div className="skeleton-text skeleton-element skeleton-animate"></div>
                            <div className="skeleton-text-2 skeleton-element skeleton-animate"></div>
                        </div>
                        <div className="skeleton-text-3 skeleton-element skeleton-animate"></div>
                        <div className="skeleton-text-4 skeleton-element skeleton-animate"></div>
                        <div className="skeleton-textarea skeleton-element skeleton-animate"></div>
                    </div>
            }
        </>
    )
}