from flask import Flask, render_template, request
import pickle

app = Flask(__name__)

# Load the ML model from pickle file
with open('model.pkl', 'rb') as file:
    model = pickle.load(file)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        # Retrieve form data
        rurality = request.form.get('rurality')
        household = request.form.get('household')
        age = request.form.get('age')
        water = request.form.get('water')
        is_female_male = 'Female - Male' in request.form
        has_foods = 'Foods' in request.form
        has_first_aid = 'First-Aid' in request.form
        has_sanitation = 'Sanitation' in request.form
        has_tools = 'Tools' in request.form
        has_clothing = 'Clothing' in request.form
        has_documents = 'Documents' in request.form
        has_medications = 'Medications' in request.form

        # Prepare the input data for the ML model
        input_data = [[rurality, household, age, water, is_female_male,
                       has_foods, has_first_aid, has_sanitation,
                       has_tools, has_clothing, has_documents, has_medications]]

        # Use the ML model to make predictions
        predictions = model.predict(input_data)

        # Process the predictions or perform further actions

        # Redirect or render a success page with the predictions
        return render_template('result.html', predictions=predictions)
    
    return render_template('index.html')

if __name__ == '__main__':
    app.run()
