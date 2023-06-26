from flask import Flask, render_template, request
import pickle

app = Flask(__name__)



# Load the ML model from pickle file
with open('model.pkl', 'rb') as file:
    model = pickle.load(file)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        rurality = request.form.get('rurality')
        household = request.form.get('household')
        age = request.form.get('age')
        water = request.form.get('water')
        sex = bool(request.form.get('sex'))
        has_foods = bool(request.form.get('food'))
        has_first_aid = bool(request.form.get('aid'))
        has_sanitation = bool(request.form.get('sanitation'))
        has_tools = bool(request.form.get('tools'))
        has_clothing = bool(request.form.get('clothing'))
        has_documents = bool(request.form.get('documents'))
        has_medications = bool(request.form.get('medications'))

        # Prepare the input data for the ML model
        input_data = [[age, sex, rurality, household, water,
                        has_foods, has_medications, has_tools, has_first_aid,
                          has_sanitation, has_clothing, has_documents]]

        # Use the ML model to make predictions
        predictions = model.predict(input_data)

        # Redirect or render a success page with the predictions
        return render_template('index.html', predictions=predictions)
    
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True ,port=5000)
