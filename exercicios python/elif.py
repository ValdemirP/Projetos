print("\033[34m=-\033[m"*30)
print("\033[1;32;41mPROGRAMA PARA LER NOMES\033[m")
print("\033[34m=-\033[m"*30)


nome = str(input("Digite o seu nome :")).strip()
if nome == "Valdemir":
    print("Que nome sensual")
elif nome == "Vanessa" or nome == "Juliana" or nome == "Thais":
    print("O seu nome e bem normal tente novamente na proxima reencarnação")
elif nome in "ana ":
    print("seu nome é feminino".format(nome))
else:
    print("seu nome e bem normal")
print(" Tenha um bom dia {}".format(nome))
