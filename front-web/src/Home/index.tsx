import './styles.css';
import {ReactComponent as MainImage} from './main.svg';
import Footer from '../Footer';

function Home(){

    return(

        <>
            <div className="home-container">
            <div className="home-content">
                <div className="home-action">
                    <h1 className="home-title">
                        Faça seu pedido <br/> que entregamos <br/> pra você!!!
                    </h1>
                    <h3 className="home-subtitle">
                        Escolha seu pedido e em poucos minutos <br/> 
                        levaremos à sua porta
                    </h3>
                    <a href="" className="home-btn-order">
                        FAZER PEDIDO
                    </a>
                </div>
                <div className="home-image">
                    <MainImage/>
                </div>
            </div>
        </div>

        <Footer/>
        
        </>
    )
}

export default Home;