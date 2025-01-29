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
    //const [isFormValidated, setIsFormValidated] = useState(false);
    const [isFormValid, setIsFormValid] = useState(true);

    function handleInput(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value, });
    }

    function validateForm() {
        if (!formData.text || !formData.name) return false;
        if (isNaN(formData.vote) || formData.vote < 1 || formData.vote > 10)
            return false;
        return true;
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!validateForm()) {
            setIsFormValid(false);
            return;
        }
        //setIsFormValidated(true);
        //if (!e.target.checkValidity()) {
        //   return;
        //}
        axios
            .post(`${apiUrl}/movies/${id}/reviews`, formData)
            .then((res) => {
                setIsFormValid(true);
                setFormData(initialData);
                //setIsFormValidated(false);
                newReviews(id);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <section className="border p-3">
            <h3 className="mb-3 card-header">Aggiungi recensione</h3>
            <div className="card-body">
                {!isFormValid && (
                    < div className="alert alert-danger mb-3">
                        The data in the form is not valid
                    </div>
                )}
                <form
                    onSubmit={handleSubmit}
                //className={`border p-2 needs-validation ${isFormValidated ? "was-validated" : ""}`}
                //noValidate
                >
                    <div className="d-flex flex-column py-2 form-group">
                        <label htmlFor="name" className="form-label">
                            Nome
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            value={formData.name}
                            onChange={handleInput}
                        //required
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">Please choose a username.</div>
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
                        //required
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">Please write a comment.</div>
                    </div>
                    <div className="d-flex flex-column py-2">
                        <label htmlFor="vote" className="form-label">
                            Voto
                        </label>
                        <input
                            min="1"
                            max="5"
                            step="1"
                            type="number"
                            name="vote"
                            className="form-control"
                            value={formData.vote}
                            onChange={handleInput}
                        //required
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">Please choose a vote.</div>
                    </div>
                    <button type="submit" className="btn btn-primary my-3">
                        Aggiungi recensione
                    </button>
                </form>
            </div>
        </section >
    );
}

export default FormReview;