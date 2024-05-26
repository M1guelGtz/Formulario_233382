export class Proveedor{
    #nombreEmpresa
    #telefonoEmpresa
    #emailEmpresa
    #direccionEmpresa
    #nombreContacto
    #telefonoContacto
    #emailContacto
    #direccionContacto

    getEmpresa(){    return this.#nombreEmpresa  }
    setEmpresa(nombre){    this.#nombreEmpresa = nombre    }

    getTelefonoEmp(){   return this.#telefonoEmpresa    }
    setTelefonoEmp(telefono){   this.#telefonoEmpresa = telefono    }

    getEmailEmp(){  return this.#emailEmpresa   }
    setEmailEmp(email){ this.#emailEmpresa = email  }

    getDirEmp(){    return this.#direccionEmpresa   }
    setDirEmp(direccion){   this.#direccionEmpresa = direccion  }

    getContacto(){    return this.#nombreContacto  }
    setContacto(nombre){    this.#nombreContacto = nombre    }

    getTelefonoCont(){   return this.#telefonoContacto    }
    setTelefonoCont(telefono){   this.#telefonoContacto = telefono    }

    getEmailCont(){  return this.#emailContacto   }
    setEmailCont(email){ this.#emailContacto = email  }

    getDirCont(){    return this.#direccionContacto   }
    setDirCont(direccion){   this.#direccionContacto = direccion  }
}