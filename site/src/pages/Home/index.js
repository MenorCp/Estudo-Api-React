import './index.scss';

//COMPONENTS 
import CabecalhoP from '../../components/cabecalhoPrincipal';

export default function Home() {
    return(
        <main className="main-container-home">
            <header className="cabecalho-home">
                <CabecalhoP/>
            </header>
        </main>
    )
}