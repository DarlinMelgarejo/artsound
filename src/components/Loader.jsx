import { useEffect, useRef } from "react"

export const Loader = () => {
    const loader = useRef(null)

    const hideLoader = () => {
        setTimeout(() => {
            loader.current.classList.add("hidden")
        }, 3000);

        setTimeout(() => {
            loader.current.style.display = "none"
        }, 3500);
    }

    useEffect(() => {
        hideLoader()        
    }, [])

    return (
        <div className="loader" ref={loader}>
            <div className="loader__wrapper">
                <div className="loader__circle"></div>
                <div className="loader__circle"></div>
                <div className="loader__circle"></div>
                <div className="loader__shadow"></div>
                <div className="loader__shadow"></div>
                <div className="loader__shadow"></div>
            </div>
        </div>
    )
}