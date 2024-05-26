import Title from "../Components/Atoms/Title";
import Section from "../Components/Organisms/SectionForm";
import SectionList from "../Components/Organisms/SectionLista";
import { list } from "../../dependences";
import './Home.css';
function Home () {

    return (
        <>
        <div id = 'home_section'>
            <Title title='Registro de Proveedores'></Title>
            <Section title='Nombre de la Empresa' placeHolder='Empresa'></Section>
        </div>
        <div id="home_section2">
            <Title title='Lista de Proveedores'></Title>
            <SectionList LinkedList={list}></SectionList>
        </div>
        </>
    )  
}
export default Home