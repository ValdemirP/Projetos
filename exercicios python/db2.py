import sqlite3 as conector

try:

    conexao = conector.connect("./meu_banco.db")
    cursor = conexao.cursor()

    comando =  CREATE TABLE PESSOA (

