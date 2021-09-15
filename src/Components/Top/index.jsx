import '../../style/globals.css'
import './style.css'

function Top() {
    return(
        <div>
            <div className="top">
                <div className="container">
                    <ul className="top-navigation">
                        <li className="top-navigation__item">
                            <a href="#" className="top-navigation__link">Compra 100%</a>
                        </li>

                        <li className="top-navigation__item">
                            <a href="#" className="top-navigation__link">1 Troca grátis</a>
                        </li>

                        <li className="top-navigation__item">
                            <a href="#" className="top-navigation__link">5x sem juros</a>
                        </li>

                        <li className="top-navigation__item">
                            <a href="#" className="top-navigation__link">Entrega em todo o Brasil</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Top