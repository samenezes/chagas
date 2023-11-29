import { useState } from "react"
import StyleTemperatureApp from "../assets/styles/TemperatureApp/StyleTemperatureApp"
import Header from "../components/Default/Header"
import NavBar from "../components/Default/Navbar"
import AddTemperature from "../components/TemperatureApp/AddTemperature"
import TemperaturaExcluida from "../components/Default/TemperaturaExcluida"
import Temperatura from "../components/Default/Temperatura"
import NenhumaTemperatura from "../components/Default/NenhumaTemperatura"

const {
    ConteudoPrincipal,
    ConteudoPag,
    ContainerTemperaturas,
    ContainerTemperaturasExcluidas,
    DefaultContainer,
    Titulo
} = StyleTemperatureApp

function TemperaturasAdicionadas() {

    const [pagAtual, setPagAtual] = useState('temperaturas-adicionadas');
    const [listaDeTemperaturas, setListaDeTemperaturas] = useState([]);
    const [listaDeTemperaturasExcluidas, setListaDeTemperaturasExcluidas] = useState([]);
    const [cidade, setCidade] = useState('');
    const [temperatura, setTemperatura] = useState('');

    const handleClickButtonCriarTemperatura = () => {
        if (cidade.trim() !== '' && cidade !== null && cidade !== undefined && temperatura.trim() !== '' && temperatura !== null && temperatura !== undefined) {
            setListaDeTemperaturas(lista => [...lista, `${cidade.toString()} - ${temperatura.toString()}°C`])
        }
        else {
            alert('Nenhum texto adicionado!')
        }
    }

    const handleExcluir = (index) => {
        const novaListaDeTemperaturas = [...listaDeTemperaturas];
        const novaListaDeTemperaturasOrdenada = novaListaDeTemperaturas.filter((_, i) => i !== index)
        novaListaDeTemperaturas[index] = true;
        setListaDeTemperaturas(novaListaDeTemperaturasOrdenada);
        setListaDeTemperaturasExcluidas((prev) => [...prev, listaDeTemperaturas[index]]);
    }

    return (
        <>
            <Header />
            <ConteudoPrincipal>
                <NavBar
                    setPagAtual={setPagAtual}
                />
                <ConteudoPag>
                    {pagAtual === 'temperaturas-adicionadas' ?
                        <DefaultContainer>
                            <AddTemperature
                                handleClickButtonCriarTemperatura={handleClickButtonCriarTemperatura}
                                cidade={cidade}
                                setCidade={setCidade}
                                temperatura={temperatura}
                                setTemperatura={setTemperatura}
                            />
                            <Titulo>Temperaturas das Cidades:</Titulo>
                            <ContainerTemperaturas>
                                {listaDeTemperaturas.length > 0 ?
                                    listaDeTemperaturas.map((item, index) => (
                                        <Temperatura
                                            key={index}
                                            textoTemperatura={item}
                                            onExcluir={() => handleExcluir(index)}
                                        />
                                    ))
                                    : <NenhumaTemperatura texto={'Nenhuma temperatura adicionada!'} />}
                            </ContainerTemperaturas>
                        </DefaultContainer>
                        :
                        <DefaultContainer>
                            <Titulo>Temperaturas excluídas:</Titulo>
                            <ContainerTemperaturasExcluidas>
                                {listaDeTemperaturasExcluidas.length > 0 ?
                                    listaDeTemperaturasExcluidas.map((item, index) => (
                                        <TemperaturaExcluida
                                            key={index}
                                            textoTemperatura={item}
                                        />
                                    ))
                                    :
                                    <NenhumaTemperatura texto={'Nenhuma temperatura excluída!'} />
                                }
                            </ContainerTemperaturasExcluidas>
                        </DefaultContainer>
                    }
                </ConteudoPag>
            </ConteudoPrincipal>
        </>
    )
}

export default TemperaturasAdicionadas