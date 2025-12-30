
from flask import Flask
app = Flask(__name__)
def calculate_sum(num1, num2):
    return num1 + num2
@app.route('/add/<float:num1>/<float:num2>')
def show_sum(num1, num2):
    total = calculate_sum(num1, num2)
    return str(total)

if __name__ == '__main__':
    app.run(debug=True)