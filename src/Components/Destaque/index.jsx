import Produtos from '../../Produtos.json'

function Destaque() {
    
    return(
        <div>
            <section className="produtos-destaque">
                <div className="produtos-destaque__container container">
                    <h2 className="produtos-destaque__title">Instrumentos <span>Destaque</span></h2>
                    <p className="produtos-destaque__subtitle">
                        it is a long established fact taht a reader will be destracted by the readable
                    </p>

                    <div className="produtos-destaque__cards">
                        {Produtos.products.map((produto, index) => {
                            return(
                                <article key={index} className="produtos-destaque__cards-card">
                                    <figure className="produtos-destaque__cards-card-frame">
                                        <img 
                                            src={produto.photo} 
                                            alt={produto.productName} 
                                            className="produtos-destaque__cards-card-img" 
                                        />
                                    </figure>
                                    <div className="produtos-destaque__cards-card-info">
                                        <h3 className="produtos-destaque__cards-card-heading">
                                            {produto.productName}
                                        </h3>
                                        <p className="produtos-destaque__cards-card-desc">
                                            {produto.descriptionShort}
                                        </p>
                                        <p className="produtos-destaque__cards-card-price">
                                            {produto.price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}
                                        </p>
                                    </div>
                                </article>
                            )
                        })}
                    </div>

                    <button type="button" className="produtos-destaque__btn btn">
                        Ver mais
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Destaque