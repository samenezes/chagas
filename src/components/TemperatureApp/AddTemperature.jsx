import StyleAddTemperatura from "../../assets/styles/TemperatureApp/StyleAddTemperatura"
import PropTypes from 'prop-types';

const {
    ConteudoPrincipal,
    InputCriarTemperatura,
    BtnCriarTemperatura
} = StyleAddTemperatura

function AddTemperatura({handleClickButtonCriarTemperatura, cidade, setCidade, temperatura, setTemperatura}) {

    const handleChangeCidade = (event) => {
        setCidade(event.target.value);
    }

    const handleChangeTemperatura = (event) => {
        setTemperatura(event.target.value);
    }

    const handleClickButton = () => {
        handleClickButtonCriarTemperatura(cidade, temperatura);
        setCidade('');
        setTemperatura('');
    }

    return (
        <>
            <ConteudoPrincipal>
                <InputCriarTemperatura 
                    type="text"
                    placeholder="Cidade"
                    value={cidade}
                    onChange={handleChangeCidade}
                />
                <InputCriarTemperatura 
                    type="number"
                    placeholder="Temperatura"
                    value={temperatura}
                    onChange={handleChangeTemperatura}
                />
                <BtnCriarTemperatura onClick={handleClickButton}>Adicionar</BtnCriarTemperatura>
            </ConteudoPrincipal>
        </>
    )
}

AddTemperatura.propTypes = {
    handleClickButtonCriarTemperatura: PropTypes.func.isRequired,
    setCidade: PropTypes.func.isRequired,
    setTemperatura: PropTypes.func.isRequired,
    cidade: PropTypes.string.isRequired,
    temperatura: PropTypes.string.isRequired
}

export default AddTemperatura