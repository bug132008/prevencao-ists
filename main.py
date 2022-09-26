from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
	return render_template("home/index.html")
@app.route('/<p>')
def any(p):
	return f'A página {p} não existe'
if __name__ == "__main__":
	app.run(debug=True, port=5500)
