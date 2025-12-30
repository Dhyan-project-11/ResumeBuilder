# import pyodbc

# # Connection details
# server = 'DESKTOP-5F3317B\SQLSERVER'          # or 'DESKTOP-XXXX\\SQLEXPRESS'
# database = 'dhyan'
# username = 'sa'     # use '' if Windows Authentication
# password = '123456'

# # Create connection
# conn = pyodbc.connect(
#     'DRIVER={ODBC Driver 17 for SQL Server};'
#     f'SERVER={server};'
#     f'DATABASE={database};'
#     f'UID={username};'
#     f'PWD={password}'
# )

# # Create cursor
# cursor = conn.cursor()

# # SQL query
# query = "SELECT * FROM Employees"

# # Execute query
# cursor.execute(query)

# # Fetch all rows
# rows = cursor.fetchall()

# # Display data
# for row in rows:
#     print(row)

# # Close connection
# cursor.close()
# conn.close()

# def add(x,y):
#     return x+y
# def sub(x,y):
#     return x-y
# def multi(x,y):
#     return x*y
# def div(x,y):
#     return x/y
# chosie=input("enter a number(1-4)")
# x=int(input("enter a number", ))
# y=int(input("enter a number", ))
# if chosie == "1": 
#     print("sum",add(x,y))
# elif chosie== "2" :
#     print("sub",sub(x,y))
# elif chosie== "3":
#     print("Multiply",multi(x,y))
# elif chosie== "4":
#     print("divide",div(x,y))
# else:
#     print("invalid")










import pyodbc
import pandas as pd
# 1. Configuration - Change these to match your setup!
server = 'DESKTOP-5F3317B\SQLSERVER' 
database = 'dhyan'
# For Windows Authentication, use:
connection_string = f'DRIVER={{ODBC Driver 17 for SQL Server}};SERVER={server};DATABASE={database};Trusted_Connection=yes;'

# For SQL Server Authentication, use:
# connection_string = f'DRIVER={{ODBC Driver 17 for SQL Server}};SERVER={server};DATABASE={database};UID=your_user;PWD=your_password'

try:
    # 2. Establish connection
    conn = pyodbc.connect(connection_string)
    cursor = conn.cursor()
    print("Connection Successful!")
    
    # 3. Test Query
    cursor.execute("SELECT * from [dhyan].[dbo].[Employees]")
    #row = cursor.fetchone()
    #print(f"Connected to: {row}")
    # # Fetch all rows
    rows = cursor.fetchall()

    # # Display data
    for row in rows:
          print(row) 
    # Close connection
    conn.close()

except Exception as e:
    print(f"Error: {e}")

