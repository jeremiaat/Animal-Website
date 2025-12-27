from flask import Flask, jsonify
import requests

# Define API URL.
TRIVIA_URL = 'https://api.api-ninjas.com/v1/trivia'

# Initialize Flask.
app = Flask(__name__)

# Define routing.
@app.route('/')
def index():
    # Make API Call - make sure to use a valid API key.
    resp = requests.get(TRIVIA_URL, headers={'X-Api-Key': 'reaUpOm3MUp1qLYRImRN9A==U9aoyxQjA8XhNkXt'})
    
    if resp.status_code == 200:
        trivia = resp.json()[0]  # Get first trivia item
        return jsonify(trivia)
    else:
        return jsonify({'error': 'Failed to fetch trivia', 'status_code': resp.status_code})

# Run the Flask app (127.0.0.1:5000 by default).
if __name__ == '__main__':
    app.run(debug=True)
