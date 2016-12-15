# -*- encoding: utf-8 -*-
import sys

def grettings(name):
    return "Hola {0}".format(name)

if __name__ == "__main__":
    name = sys.argv[1]
    introduction = grettings(name)

    print(introduction)

