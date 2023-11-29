import StyleNenhumaTemperatura from "../../assets/styles/Default/StyleNenhumaTemperatura"
import PropTypes from 'prop-types'

const {
    ConteudoPrincipal,
    Texto
} = StyleNenhumaTemperatura

function NenhumaTemperatura({texto}) {
    return (
        <>
            <ConteudoPrincipal>
                <Texto>{texto}</Texto>
            </ConteudoPrincipal>
        </>
    )
}

NenhumaTemperatura.propTypes = {
    texto: PropTypes.string.isRequired,
}

export default NenhumaTemperatura