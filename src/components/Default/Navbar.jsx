import { faTrash, faCloud } from "@fortawesome/free-solid-svg-icons";
import StyleNavbar from "../../assets/styles/Default/StyleNavbar";
import PropTypes from 'prop-types'

const {
    ConteudoPrincipal,
    Icon
} = StyleNavbar

function NavBar({setPagAtual}) {

    const navigateToTemperaturasAdicionadas = () => {
        setPagAtual('temperaturas-adicionadas')
    }

    const navigateToTemperaturasExcluidas = () => {
        setPagAtual('temperaturas-excluidas')
    }

    return (
        <>
            <ConteudoPrincipal>
                <Icon 
                icon={faCloud}
                onClick={navigateToTemperaturasAdicionadas}
                />
                <Icon 
                icon={faTrash}
                onClick={navigateToTemperaturasExcluidas}
                />
            </ConteudoPrincipal>
        </>
    )
}

NavBar.propTypes = {
    setPagAtual: PropTypes.func.isRequired,
}

export default NavBar