# -*- encoding: utf-8 -*-
import sys

def hello(name):
    return "Hello {0:}".format(name)

if __name__ == '__main__':
    name = sys.argv[1]
    greetings = hello(name)

    print(greetings)

