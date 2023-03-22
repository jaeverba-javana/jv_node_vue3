# This is a sample Python script.
import requests
import string
import itertools

# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.


raiz = ["https://site-assets.fontawesome.com/releases/v6.3.0/svgs/solid/", './../classic/solid/', ' classic solid']
raices = [
    ["https://site-assets.fontawesome.com/releases/v6.3.0/svgs/solid/", './../classic/solid/', ' classic solid'],
    ["https://site-assets.fontawesome.com/releases/v6.3.0/svgs/regular/", './../classic/regular/', ' classic regular'],
    ["https://site-assets.fontawesome.com/releases/v6.3.0/svgs/light/", './../classic/light/', ' classic light'],
    ["https://site-assets.fontawesome.com/releases/v6.3.0/svgs/thin/", './../classic/thin/', ' classic thin'],
    ["https://site-assets.fontawesome.com/releases/v6.3.0/svgs/duotone/", './../classic/duotone/', ' classic duotone'],
    ["https://site-assets.fontawesome.com/releases/v6.3.0/svgs/sharp-solid/", './../sharp/solid/', ' sharp solid'],
    ["https://site-assets.fontawesome.com/releases/v6.3.0/svgs/sharp-regular/", './../sharp/regular/', ' sharp regular'],
]

extencion = '.svg'
abecedario = list(string.ascii_lowercase)
abecedario.append('-')
caracteres = "abcdefghijklmnopqrstuvwxyz-"
#print(abecedario)

directionsFile = open('correct.txt', 'w')



for i in range(3, 10):
    print(f'De a {i}')

    for combinacion in itertools.product(caracteres, repeat=i):
        icon = ''.join(combinacion)
        iconP = icon+extencion
        data = requests.get(raiz[0]+iconP)
        print('            '+icon)

        if data.status_code == 200:
            fileName = raiz[1]+icon+raices[0][2]+extencion
            print('\033[95mEncontrado: '+iconP+'\033[0m')

            directionsFile.write(iconP+'\n')

            with open(fileName, 'wb') as file:
                file.write(data.content)
                print('\033[92m  Archivo: "'+fileName+'"\033[0m')

            for item in raices[1:]:
                data2 = requests.get(item[0] + iconP)

                if data2.status_code == 200:
                    fileName2 = item[1]+icon+item[2]+extencion
                    with open(fileName2, 'wb') as file2:
                        file2.write(data2.content)
                        print('\033[92m  Archivo: "'+fileName2+'"\033[0m')
                        pass
                    pass
                else:
                    print('\033[93m  Archivo: "'+fileName2+'"\033[0m')

                pass

            print('')
        # print(fileName)
    pass