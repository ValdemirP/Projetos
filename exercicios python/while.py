par = impar = 0
n=1
while n != 0 :
    n = int(input("digite um numero: "))
    if n!=0:
        if n % 2 ==0:
            par +=1
        else:
            impar +=1

print(f"Foram enontrados {par} numeros pares e {impar} numeros impares")

