import { useState } from "react";
import axios from "axios";

const initialData = {
    name: "",
    text: "",
    vote: ""
}

const apiUrl = import.meta.env.VITE_API_URL;

function FormReview({ id, newReviews }) {
    const [formData, setFormData] = useState(initialData);

    function handleInput(e) {
        const { name, value } = e.target;
        setFormData((prevInput) => ({
            ...prevInput,
            [name]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        axios
            //http://localhost:3000/books/:id/reviews
            .post(`${apiUrl}/movies/${id}/reviews`, formData)
            .then((res) => {
                setFormData(initialData);
                newReviews(id);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <form onSubmit={handleSubmit} className="border p-3">
            <div className="d-flex flex-column py-2">
                <label htmlFor="name" className="form-label">
                    Nome
                </label>
                <input
                    type="text"
                    name="name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleInput}
                />
            </div>
            <div className="d-flex flex-column py-2">
                <label htmlFor="text" className="form-label">
                    Commento
                </label>
                <input
                    type="text"
                    name="text"
                    className="form-input"
                    value={formData.text}
                    onChange={handleInput}
                />
            </div>
            <div className="d-flex flex-column py-2">
                <label htmlFor="vote" className="form-label">
                    Voto
                </label>
                <input
                    min={1}
                    max={5}
                    step={1}
                    type="number"
                    name="vote"
                    className="form-input"
                    value={formData.vote}
                    onChange={handleInput}
                />
            </div>
            <button type="submit" className="btn btn-primary my-3">
                Aggiungi recensione
            </button>
        </form>
    );
}

export default FormReview;