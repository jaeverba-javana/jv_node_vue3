import os
import re
import requests

from multiprocessing import Process, Queue

# raiz = ["https://site-assets.fontawesome.com/releases/v6.3.0/svgs/solid/", './../classic/solid/', ' classic solid']
raices = [
    ["https://site-assets.fontawesome.com/releases/v6.3.0/svgs/solid/", './../classic/solid/', ' classic solid'],
    ["https://site-assets.fontawesome.com/releases/v6.3.0/svgs/regular/", './../classic/regular/', ' classic regular'],
    ["https://site-assets.fontawesome.com/releases/v6.3.0/svgs/light/", './../classic/light/', ' classic light'],
    ["https://site-assets.fontawesome.com/releases/v6.3.0/svgs/thin/", './../classic/thin/', ' classic thin'],
    ["https://site-assets.fontawesome.com/releases/v6.3.0/svgs/duotone/", './../classic/duotone/', ' classic duotone'],
    ["https://site-assets.fontawesome.com/releases/v6.3.0/svgs/sharp-solid/", './../sharp/solid/', ' sharp solid'],
    ["https://site-assets.fontawesome.com/releases/v6.3.0/svgs/sharp-regular/", './../sharp/regular/', ' sharp regular'],
]
#
# class colors(object):
#     moradito = '\033[95m'
#     normalito = '\033[0m'
#     verdecito = '\033[92m'
#     rojito = '\033[91m'
#
# #square-2.svg
# #aquello.svg
# #lo-uno-y-lo-otro.svg
#
# # for i in range(101):
# #     print(f'\033[{i}mEsto es i = {i}')
#
# cont = 0
#
# with os.scandir('./../') as ficheros:
#     for fichero in ficheros:
#         nombre = re.search('[a-z0-9-]+(?=\.svg)', fichero.name, re.IGNORECASE)
#
#         if (nombre):
#             cont += 1
#             nombre = nombre.group()
#             print(f'{colors.moradito}{nombre}{colors.normalito}')
#
#
#
#             for item in raices:
#                 data = requests.get(item[0] + fichero.name)
#
#                 res_status = str(data.status_code)
#                 if res_status[:2] == "20":
#                     fileName = item[1]+nombre+item[2]+'.svg'
#                     with open(fileName, 'wb') as file2:
#                         file2.write(data.content)
#                         print('\033[92m  '+res_status+'  |  Archivo: "'+fileName+'"\033[0m')
#                         pass
#                     pass
#                 else:
#                     print('\033[91m  '+res_status+'  |  Archivo: "'+fileName+'"\033[0m')
#
#                 pass
#
#
#         print('')
#         pass


def descargar(array):
    with os.scandir('./../') as ficheros:
        for fichero in ficheros:
            nombre = re.search('[a-z0-9-]+(?=\.svg)', fichero.name, re.IGNORECASE)

            if (nombre):
                nombre = nombre.group()

                data = requests.get(array[0] + fichero.name)

                res_status = str(data.status_code)

                if res_status[:2] == "20":
                    fileName = array[1] + nombre + array[2] + '.svg'
                    with open(fileName, 'wb') as file:
                        file.write(data.content)
                        print('\033[92m  ' + res_status + '  |  Archivo: "' + fileName + '"\033[0m')
                        file.close()
                else:
                    print('\033[91m  ' + res_status + '  |  Archivo: "' + fileName + '"\033[0m')
            pass
    pass


if __name__ == '__main__':
    processes = []
    for i in range(7):
        processes.append(Process(target=descargar, args=(raices[i],)))
        processes[i].start()
        print("Proceso %d lanzado." % (i + 1))

    for process in processes:
        process.join()

    print('La ejecución ha terminado')