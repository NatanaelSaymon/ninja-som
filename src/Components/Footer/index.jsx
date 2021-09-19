function Footer() {
    return(
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer-grid">
                    <div className="footer-grid__item">
                        <ul className="footer-navigation-list">
                            <p className="footer-navigation-list__title">
                                Institucional
                            </p>
                            <li className="footer-navigation-list__item">
                                <a href="#" className="footer-navigation-list__link">
                                    Quem somos
                                </a>
                            </li>
                            <li className="footer-navigation-list__item">
                                <a href="#" className="footer-navigation-list__link">
                                    Nossas lojas
                                </a>
                            </li>
                        </ul>

                        <ul className="footer-navigation-list">
                            <p className="footer-navigation-list__title">
                                Atendimento
                            </p>
                            <li className="footer-navigation-list__item">
                                <a href="#" className="footer-navigation-list__link">
                                    Fale conosco
                                </a>
                            </li>
                            <li className="footer-navigation-list__item">
                                <a href="#" className="footer-navigation-list__link">
                                    Vendas@ninjasom.com.br
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-grid__item">
                        <ul className="footer-navigation-list">
                            <p className="footer-navigation-list__title">
                                Ajuda e Suporte
                            </p>
                            <li className="footer-navigation-list__item">
                                <a href="#" className="footer-navigation-list__link">
                                    Política de privacidade
                                </a>
                            </li>
                            <li className="footer-navigation-list__item">
                                <a href="#" className="footer-navigation-list__link">
                                    Política de trocas
                                </a>
                            </li>
                            <li className="footer-navigation-list__item">
                                <a href="#" className="footer-navigation-list__link">
                                    Prazos de entrega
                                </a>
                            </li>
                            <li className="footer-navigation-list__item">
                                <a href="#" className="footer-navigation-list__link">
                                    Termo de uso
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-grid__item">
                        <ul className="footer-navigation-list">
                            <p className="footer-navigation-list__title">
                                Formas de pagamentos
                            </p>
                            <div className="footer-navigation-list__wrapper">
                                <li className="footer-navigation-list__item">
                                    <img src="https://via.placeholder.com/30x20/CCCCCC" alt="" />
                                </li>
                                <li className="footer-navigation-list__item">
                                    <img src="https://via.placeholder.com/30x20/CCCCCC" alt="" />
                                </li>
                                <li className="footer-navigation-list__item">
                                    <img src="https://via.placeholder.com/30x20/CCCCCC" alt="" />
                                </li>
                            </div>

                            <div className="footer-navigation-list__wrapper">
                                <li className="footer-navigation-list__item">
                                    <img src="https://via.placeholder.com/30x20/CCCCCC" alt="" />
                                </li>
                                <li className="footer-navigation-list__item">
                                    <img src="https://via.placeholder.com/30x20/CCCCCC" alt="" />
                                </li>
                            </div>
                        </ul>

                        <ul className="footer-navigation-list">
                            <p className="footer-navigation-list__title">
                                Segurança
                            </p>
                            <div className="footer-navigation-list__wrapper">
                                <li className="footer-navigation-list__item">
                                    <img src="https://via.placeholder.com/70x40/CCCCCC" alt="" />
                                </li>
                                <li className="footer-navigation-list__item">
                                    <img src="https://via.placeholder.com/60x40/CCCCCC" alt="" />
                                </li>
                            </div>
                        </ul>
                    </div>
                    <div className="footer-grid__item--form footer-grid__item">
                        <form action="" className="footer-form">
                            <p className="footer-form__title">
                                Assine nosso <span>Newsletter </span> <br /> 
                                e receba novidades e promoções
                            </p>
                            <input type="text" className="footer-form__field" placeholder="Seu nome"/>
                            <input type="email" className="footer-form__field" placeholder="Seu e-mail"/>
                            <button type="submit" className="footer-form__btn btn">
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="footer-copyright">
                <div className="footer-copyright__container container">
                    <div className="footer-copyright__text">
                        <p>
                            NINJA SOM COMÉRCIO DE ELETRÔNICOS LTDA - 2012 - 2019, todos os direitos reservados. 
                            Rua Santa Ifigênia, 556 560/562/564 - Santa Efigênia - CEP: 01.207-000 - São Paulo / SP - 
                            CNPJ 07.282.516/0001-15
                        </p>
                    </div>
                    <div className="footer-copyright__company">
                        <img src="https://via.placeholder.com/100x40/CCCCCC" alt="" />
                        <img src="https://via.placeholder.com/100x40/CCCCCC" alt="" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer