import StyleTemperatura from "../../assets/styles/Default/StyleTemperatura"
import PropTypes from 'prop-types'

const {
    ConteudoPrincipal,
    TextoTemperaturaExcluida
} = StyleTemperatura

function TemperaturaExcluida({ textoTemperatura }) {
    return (
        <>
            <ConteudoPrincipal>
                <TextoTemperaturaExcluida>{textoTemperatura}</TextoTemperaturaExcluida>
            </ConteudoPrincipal>
        </>
    )
}

TemperaturaExcluida.propTypes = {
    textoTemperatura: PropTypes.string.isRequired
}

export default TemperaturaExcluida