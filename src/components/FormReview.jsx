import { useState } from "react";

const initialData = {
    name: "",
    text: "",
    vote: ""
}

function FormReview({ onAddReview }) {
    const [input, setInput] = useState(initialData);

    function handleInput(e) {
        const { name, value } = e.target;
        setInput((prevInput) => ({
            ...prevInput,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newItem = {
            id: Date.now(),
            name: input.name,
            text: input.text,
            vote: input.vote,
        };

        onAddReview(newItem);
        setInput(initialData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name" className="form-label">
                    Inserisci nome
                </label>
                <input
                    type="text"
                    name="name"
                    value={input.name}
                    className="form-input"
                    onChange={handleInput}
                />
            </div>
            <div>
                <label htmlFor="text" className="form-label">
                    Inserisci commento
                </label>
                <input
                    type="text"
                    name="text"
                    value={input.text}
                    className="form-input"
                    onChange={handleInput}
                />
            </div>
            <div>
                <label htmlFor="vote" className="form-label">
                    Inserisci voto
                </label>
                <input
                    type="number"
                    name="vote"
                    value={input.vote}
                    onChange={handleInput}
                    className="form-input"
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Aggiungi recensione
            </button>
        </form>
    );
}

export default FormReview;