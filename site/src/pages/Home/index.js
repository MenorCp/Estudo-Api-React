import './index.scss';

//Icones/Imagens importadas do assets.
import iconLogo from '../../assets/images/icon-logo-home.svg';

export default function Home() {
    return(
        <main className="main-container-home">
            <header className="cabecalho-home">
                <div className="logo-home">
                    <img src={iconLogo} className="icon-logo-home"/>
                    <h1 className="title-logo">
                        STACK GAMES
                    </h1>
                </div>
                <nav className="navegacao-home">
                    <h2 className="title-categorias-home">

                    </h2>
                    <h2 className="title-lancamento-home">

                    </h2>
                    <h2 className="title-promocoes-home">

                    </h2>
                </nav>
                <div className="busca-home">

                </div>
            </header>
        </main>
    )
}