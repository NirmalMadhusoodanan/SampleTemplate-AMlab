from flask import Flask,request, url_for, redirect, render_template, jsonify
import json
import pickle
import numpy as np
import pandas as pd

app = Flask(__name__)

model = pickle.load(open('modelmain.pkl', 'rb'))


@app.route('/')
def man():
    return render_template('indexcopy.html')


@app.route('/', methods=['GET','POST'])
def home():
    df = pd.read_excel (r'D:\Main Project\PROJECT\Experiments\lab code\SampleTemplate-master\experiment\Surface Quality data.xlsx')
    df = df.dropna()
    df.reset_index(drop=True, inplace=True)
    dummies = pd.get_dummies(df.Material)
    df1 = pd.concat([df,dummies],axis='columns')
    df = df1.drop(['Material'],axis='columns')
    x1 = df[['Layer Height (mm)', 'Infill Density(%)', 'Printing Speed(mm/s)','PLA','ABS']]
    y1 = df['Surface Roughness(µm)']
    rf=request.form
    print('rf is ',rf)
    for key in rf.keys():
        data=key
    print('data is ',data)
    data_dic=json.loads(data)
    print('data_dic.keys() is ',data_dic.keys())
    pred_data = data_dic['predict']
    print('pred_data is ',pred_data)
    input_pred = np.array(pred_data)
    print('input_pred is ',input_pred)
    input_pred_norm = (input_pred - x1.min()) / (x1.max() - x1.min())
    input_pred_norm_list = input_pred_norm.tolist()
    prediction = model.predict([input_pred_norm_list])
    pred = (prediction*(y1.max() - y1.min())) + y1.min()
    print('pred is',pred)
    pred_val = round(pred[0], 2)
    print('pred_val is ',pred_val)
    resp_dic={'predict':pred_val}
    resp = jsonify(resp_dic)
    resp.headers['Access-Control-Allow-Origin']='*'
    return resp


if __name__ == "__main__":
    app.run(debug=True)















