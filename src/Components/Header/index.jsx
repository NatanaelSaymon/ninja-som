import SearchIcon from '@material-ui/icons/Search';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


import './style.scss'

function TopHightlight() {
    return(
        <div>
            <div className="top-hightlight">
                <div className="top-hightlight__container container">
                    <ul className="top-hightlight__navigation">
                        <li className="top-hightlight__navigation-item">
                            <a href="#" className="top-hightlight__navigation-link">Compra 100%</a>
                        </li>

                        <li className="top-hightlight__navigation-item">
                            <a href="#" className="top-hightlight__navigation-link">1 Troca grátis</a>
                        </li>

                        <li className="top-hightlight__navigation-item">
                            <a href="#" className="top-hightlight__navigation-link">5x sem juros</a>
                        </li>

                        <li className="top-hightlight__navigation-item">
                            <a href="#" className="top-hightlight__navigation-link">Entrega em todo o Brasil</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

function TopMain() {
    return(
        <div>
            <div className="top-main">
                <div className="top-main__container container">
                    <div className="top-main__logo">
                        <a href="/" className="top-main__logo-link">
                            <img src="https://via.placeholder.com/180x28?text=NINJA+SOM" alt="Ninja Som" className="top-main__logo-img"/>
                        </a>
                    </div>

                    <form action="" method="GET" className="top-main-search">
                        <div className="top-main-search__wrapper">
                            <input type="text" className="top-main-search__field" placeholder="Busque aqui..."/>
                            <button className="top-main-search__btn" title="Pesquisar">
                                <SearchIcon style={{fontSize:'20px'}}/>
                            </button>
                        </div>
                    </form>

                    <a href="https://api.whatsapp.com/send?phone=5511999999999&text=Oi%20Tudo%20bem?" className="top-main-whatsapp">
                        <span className="top-main-whatsapp__wrapper">
                            <WhatsAppIcon style={{fontSize:'20px', marginRight:'5px'}}/>
                            <span className="top-main-whatsapp__text">
                                (11) 9999-9999
                            </span>
                        </span>
                    </a>

                    <a href="#" className="top-main-login">
                        <span className="top-main-login__wrapper">
                            <PersonIcon style={{fontSize:'30px', marginRight:'5px'}}/>
                            <span className="top-main-login__text">
                                <span>Olá, Visitante</span><br/>    
                                <span>Minha conta</span>
                            </span>
                        </span>
                    </a>
                    
                    <a href="#" className="top-main-carrinho">
                        <span className="top-main-carrinho__wrapper">
                            <ShoppingBasketIcon style={{margin:'auto'}}/>
                            <span>Seu carrinho</span><br/>
                            <span>0 item(s)</span>
                        </span>
                    </a>
                    
                </div>
            </div>
        </div>
    )
}

function TopNavigation() {
    return(
        <div className="container">
            <nav className="top__navigation">
                <ul className="top__navigation-list">
                    <li className="top__navigation-item">
                        <a href="#" className="top__navigation-link"><span>Todas as categorias</span> <ArrowDropDownIcon/> </a>
                    </li>
                    <li className="top__navigation-item">
                        <a href="#" className="top__navigation-link"><span>Som profissional</span> <ArrowDropDownIcon/> </a>
                    </li>
                    <li className="top__navigation-item">
                        <a href="#" className="top__navigation-link">Instrumentos musicais</a>
                    </li>
                    <li className="top__navigation-item">
                        <a href="#" className="top__navigation-link">Promoções</a>
                    </li>
                    <li className="top__navigation-item">
                        <a href="#" className="top__navigation-link">Contato</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}



function Header() {
    return(
        <div>
            <header className="top">
                <TopHightlight />
                <TopMain />
                <TopNavigation />
            </header>
        </div>
    )
}

export default Header