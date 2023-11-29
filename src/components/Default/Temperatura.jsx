import { faTrash } from "@fortawesome/free-solid-svg-icons"
import StyleTemperatura from "../../assets/styles/Default/StyleTemperatura"
import PropTypes from 'prop-types'

const {
    ConteudoPrincipal,
    ContainerBtns,
    TextoTemperatura,
    BtnTemperaturaConcluida,
    BtnExcluirTemperatura,
    Icons
} = StyleTemperatura

function Temperatura({ textoTemperatura, onExcluir }) {
    return (
        <>
            <ConteudoPrincipal>
                <TextoTemperatura>{textoTemperatura}</TextoTemperatura>
                <ContainerBtns>
                    <BtnExcluirTemperatura onClick={onExcluir}><Icons icon={faTrash}/></BtnExcluirTemperatura>
                </ContainerBtns>
            </ConteudoPrincipal>
        </>
    )
}

Temperatura.propTypes = {
    textoTemperatura: PropTypes.string.isRequired,
    onMarcarComoConcluido: PropTypes.func,
    onExcluir: PropTypes.func
}

export default Temperatura