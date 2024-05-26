import { useState } from "react";
import Swal from "sweetalert2";
import { list } from "../../../dependences";
import { Proveedor } from "../../Data/Proveedor";
import Button from "../Atoms/Button";
import Text from "../Atoms/Text";
import Title from "../Atoms/Title";
import Field from "../Molecules/Field";
import './Section.css';
function Section (props) {
    const [nombre, setNombre]=useState('')
    const [telefono, setTelefono]=useState('')
    const [direccion, setDireccion]=useState('')
    const [email, setEmail]=useState('')
    const handlerClick = (event) =>{
        if (nombre != "" && direccion != "" && telefono != null && email != "" ){
            let prov = new Proveedor()
            prov.setEmpresa(nombre)
            prov.setDirEmp(direccion)
            prov.setEmailEmp(email)
            prov.setTelefonoEmp(telefono)
            
            list.push(prov)
            Swal.fire({
                title:`Proveedor ${nombre} Guardado `,
                text: "Guardado con exito",
                icon: "success"
            })
        }else{
            Swal.fire({
                title:`Complete todos los campos `,
                text: "error al guardar",
                icon: "error"
            })
        }
        
    }
    return (
        <>
        <div id="datos_Empresa">
            <Title title = {props.title}></Title>
            <Field type = 'text' placeHolder={props.placeHolder} text='Nombre: ' val={nombre} fnVal={setNombre} ></Field>
            <Field type = 'number' placeHolder='10 Digitos' text='Numero Telefonico: ' val={telefono} fnVal={setTelefono}></Field>
            <Field type = 'text' placeHolder='' text='Direccion: ' val={direccion} fnVal={setDireccion}></Field>
            <Field type = 'email' placeHolder='Por Ejemplo: Usuario@gmail.com' text='Correo Electronico: ' val={email} fnVal={setEmail}></Field>
            <Button title='Guardar' onclick={handlerClick}></Button>
        </div>  
        </>
        
    )
}

export default Section