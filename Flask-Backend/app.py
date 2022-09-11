from flask import Flask, jsonify, request
import numpy as np
import pickle
import numpy as np
import pandas as pd
from sklearn import datasets, linear_model
from sklearn import preprocessing
from flask_cors import CORS, cross_origin


app = Flask(__name__)
cors = CORS(app)


@app.route('/inputs/<uid1>/<uid2>/<uid3>', methods=['GET'])
def index(uid1, uid2, uid3):
    if request.method == 'GET':
        model = pickle.load(open('_model.pkl', 'rb'))
        d2 = preprocessing.normalize([[uid1, uid2, uid3]])
        y_pred = model.predict(d2)
        print(y_pred)
        print(y_pred[0])
        output = str(y_pred[0])
        data = {
            "confidence": output
        }
        return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')
