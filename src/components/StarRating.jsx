import { IoStarSharp, IoStarOutline } from "react-icons/io5";

function StarRating({ vote }) {
    const maxRating = 5;
    const stars = [];

    for (let i = 1; i <= maxRating; i++) {
        if (i <= vote) {
            stars.push(<IoStarSharp key={i} />)
        } else {
            stars.push(<IoStarOutline key={i} />)
        }
    }
    return (
        <div className="star-rating">
            {stars}
        </div>
    )
}

export default StarRating;