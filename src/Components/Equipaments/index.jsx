function Equipaments() {

    const Equipaments = [
        {
            name: "Guitarras",
            url: "https://images.unsplash.com/photo-1550291652-6ea9114a47b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
        },
        {
            name: "Microfones",
            url: "https://images.unsplash.com/photo-1617977469931-5fc2a0cd2d41?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
        },
        {
            name: "Mesa de Som",
            url: "https://blog.brlogic.com/pt/wp-content/uploads/sites/6/2018/02/tudo_sobre_streaming_de_audio1-990x557.jpg"
        },
        {
            name: "Teclado",
            url: "https://images.unsplash.com/photo-1546636212-f7ff67ac1fca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Violão",
            url: "https://images.unsplash.com/photo-1606502825777-504f99c64162?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Bateria",
            url: "https://images.unsplash.com/photo-1504653601220-f1a8ece25e4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
    ]
    return(
        <div>
            <section className="equipaments">
                <div className="equipaments__container container">
                    { Equipaments.map((equipament) => {
                        return(
                            <div className="equipament">
                                <div className="equipament__frame">
                                    <img src={equipament.url} className="equipament__img" alt="" />
                                </div>
                                <h2 className="equipament__title">{equipament.name}</h2>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default Equipaments