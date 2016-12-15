# -*- encoding: utf-8 -*-
# El módulo sys provee acceso a varaibles usadas o mantenidas por el interpete
# de python y a funciones que interactuan de forma contante con el interprete
import sys

# Definimos una fncion greeting que toma como argumento la el nombre de la
# persona a la que queremos saludar
def hello(name):
    return "Hello {0}".format(name)

# Esta parte del archivo define una sección ejecutable del mismo
# cuando enviamos el archivo al interprete, se ejecuta el código contenido en
# esta seccion
if __name__ == "__main__":
    name = sys.argv[1]
    grettings = hello(name)

    print(grettings)
