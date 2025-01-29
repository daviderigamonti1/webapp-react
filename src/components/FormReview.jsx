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
        <section className="border p-3">
            <h3 className="mb-3">Aggiungi recensione</h3>
            <form onSubmit={handleSubmit} className="border p-2">
                <div className="d-flex flex-column py-2">
                    <label htmlFor="name" className="form-label">
                        Nome
                    </label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleInput}
                        required
                    />
                </div>
                <div className="d-flex flex-column py-2">
                    <label htmlFor="text" className="form-label">
                        Commento
                    </label>
                    <input
                        type="text"
                        name="text"
                        className="form-control"
                        value={formData.text}
                        onChange={handleInput}
                        required
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
                        className="form-control"
                        value={formData.vote}
                        onChange={handleInput}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary my-3">
                    Aggiungi recensione
                </button>
            </form>
        </section>
    );
}

export default FormReview;