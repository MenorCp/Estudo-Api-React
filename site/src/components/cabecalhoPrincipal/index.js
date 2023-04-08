import './index.scss';

//ICONES / IMAGENS
import menuIcon from '../../assets/images/menu-icon.svg';
import logoIcon from '../../assets/images/icon-logo.svg';
import loginIcon from '../../assets/images/login-icon.svg';

export default function cabecalhoP(){
    return(
        <div className="container-cabecalho">
            <img src={menuIcon} className="icon-menu"/>
            <div className="cont-logo">
                 <img src={logoIcon} className="icon-logo"/>
                 <h1 className="title-logo">
                    STACK GAMES
                 </h1>
            </div>
            <div className="cont-login">
                <img src={loginIcon} className="icon-login" />
                <div className="cont-info-login">
                    <h1 className="titles-login">
                        Bem vindo Gamer !
                    </h1>
                    <h1 className="titles-login2">
                        Entre ou Cadastre-se
                    </h1>
                </div>
            </div>
        </div>
    )
}