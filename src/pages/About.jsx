function About() {
    return (
        <div className="container">
            <div className="text-center mb-5">
                <h1 className="display-4 font-weight-bold">Chi Siamo</h1>
                <p className="lead text-muted mb-4">Siamo un team di appassionati di cinema che vuole offrire agli utenti un'esperienza unica per scoprire e apprezzare i film. La nostra piattaforma è pensata per tutti coloro che vogliono esplorare il mondo del cinema in modo semplice e interattivo.</p>
                <p className="text-muted">Ci impegniamo a fornire recensioni di qualità, suggerimenti personalizzati e una community attiva di cinefili per scambiare opinioni e scoperte cinematografiche.</p>
            </div>
            <div className="row mb-5">
                <div className="col-md-6 mb-4">
                    <div className="card shadow-sm border-light rounded">
                        <div className="card-body">
                            <h2 className="text-primary text-center">La Nostra Missione</h2>
                            <p className="text-muted text-center">La nostra missione è rendere il cinema più accessibile a tutti, offrendo una piattaforma dove gli utenti possono facilmente trovare film, leggere recensioni e condividere le loro opinioni.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="card shadow-sm border-light rounded">
                        <div className="card-body">
                            <h2 className="text-primary text-center">Il Nostro Obiettivo</h2>
                            <p className="text-muted text-center">Il nostro obiettivo è creare una community globale di cinefili che possano condividere la loro passione per i film, esplorando nuovi titoli e scoprendo nuove pellicole da vedere.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sezione Valori */}
            <div className="row text-center mb-5">
                <div className="col-md-4 mb-4">
                    <div className="card shadow-sm border-light rounded">
                        <div className="card-body">
                            <h3 className="text-primary">Passione per il Cinema</h3>
                            <p className="text-muted">Ogni film racconta una storia unica. Condividiamo la nostra passione per il grande schermo, sempre alla ricerca di nuove esperienze cinematografiche.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card shadow-sm border-light rounded">
                        <div className="card-body">
                            <h3 className="text-primary">Comunità di Cinefili</h3>
                            <p className="text-muted">Costruiamo una comunità di appassionati, dove ogni utente può partecipare con le proprie recensioni, scoprire nuovi film e confrontarsi con altri cinefili.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card shadow-sm border-light rounded">
                        <div className="card-body">
                            <h3 className="text-primary">Innovazione Cinematografica</h3>
                            <p className="text-muted">Siamo sempre alla ricerca di innovazioni nel mondo del cinema e delle tecnologie applicate, per offrire un'esperienza utente migliore e più coinvolgente.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sezione Finale con Invito */}
            <div className="text-center mt-5">
                <h2 className="display-5 text-primary">Unisciti alla Nostra Community Cinematografica!</h2>
                <p className="lead text-muted">Se sei un appassionato di film, entra a far parte della nostra piattaforma! Condividi recensioni, esplora nuovi film e scopri titoli che potrebbero diventare i tuoi preferiti!</p>
            </div>
        </div>
    );
}

export default About;