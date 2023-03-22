import os
import re

dir1 = './../'
dir2 = './classic/solid'

os.chdir(dir1)
directorio1 = os.listdir('./')

os.chdir(dir2)
directorio2 = os.listdir('./')

for x in directorio1:
    try:
        # print(x)
        n = re.search('[a-z0-9-]+(?=\.svg)', x, re.IGNORECASE)

        if n:
            x = n.group()

        encontrado = directorio2.index(x+' classic solid.svg')
        os.chdir(dir1)

    except:
        print(x+' no encontrado')