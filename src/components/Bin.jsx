import axios from "axios";
import { ImBin } from "react-icons/im";

const apiUrl = import.meta.env.VITE_API_URL;

function Bin({ reviewId, deleteReview }) {

    return (
        <button onClick={() => deleteReview(reviewId)} className="btn bin">
            <ImBin />
        </button>
    )
}

export default Bin;