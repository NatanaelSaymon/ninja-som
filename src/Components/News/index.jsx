function News() {
    return(
        <div>
            <section className="news">
                <div className="news__container">
                    <div className="news__card--audio news__card">
                        <div className="news__card-cover"></div>
                        <div className="news__card-desc">
                            <p className="news__card-text">Novidades</p>
                            <h2 className="news__card-title">
                                <span>Áudio</span>Profissional
                            </h2>
                            <a href="#" className="news__card-btn">Confira</a>
                        </div>
                    </div>
                    <div className="news__card--instruments news__card">
                        <div className="news__card-cover"></div>
                        <div className="news__card-desc">
                            <p className="news__card-text">Novidades</p>
                            <h2 className="news__card-title">
                                <span>Instrumentos</span>Musicais
                            </h2>
                            <a href="#" className="news__card-btn">Confira</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default News