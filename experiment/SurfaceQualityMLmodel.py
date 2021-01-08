
import pandas as pd
import pickle


df = pd.read_excel (r'D:\Main Project\PROJECT\Experiments\lab code\SampleTemplate-master\experiment\Surface Quality data.xlsx')
#print (df.head(5))


df = df.dropna()
#df.drop(df.tail(1).index, inplace = True) 
df.reset_index(drop=True, inplace=True)
#print (df)

dummies = pd.get_dummies(df.Material)
df1 = pd.concat([df,dummies],axis='columns')
df = df1.drop(['Material'],axis='columns')
#print (df)

# copy the data 
df_min_max_scaled = df.copy() 
  
# apply normalization techniques 
for column in df_min_max_scaled.columns: 
    df_min_max_scaled[column] = (df_min_max_scaled[column] - df_min_max_scaled[column].min()) / (df_min_max_scaled[column].max() - df_min_max_scaled[column].min())     
  
#view normalized data 
#print(df_min_max_scaled)
x1 = df[['Layer Height (mm)', 'Infill Density(%)', 'Printing Speed(mm/s)','PLA','ABS']]
#print (x1)
y1 = df['Surface Roughness(µm)']
#print(y1)

x = df_min_max_scaled[['Layer Height (mm)', 'Infill Density(%)', 'Printing Speed(mm/s)','PLA','ABS']]
#print (x)

y = df_min_max_scaled['Surface Roughness(µm)']
#print(y)

import numpy as np

import matplotlib.pyplot as plt

import seaborn as sns
#%matplotlib inline

x = df_min_max_scaled[['Layer Height (mm)', 'Infill Density(%)', 'Printing Speed(mm/s)','PLA','ABS']]
y = df_min_max_scaled['Surface Roughness(µm)']

from sklearn.model_selection import train_test_split

x_train, x_test, y_train, y_test = train_test_split(x, y, test_size = 0.2)

from sklearn import linear_model
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures 


model = linear_model.LinearRegression()

model = model.fit(x_train, y_train)

pickle.dump(model, open('modelmain.pkl', 'wb'))


#print(model.coef_)

#print(model.intercept_)

#pd.DataFrame(model.coef_, x.columns, columns = ['Coeff'])

#predictions = model.predict(x_test)

#plt.scatter(y_test, predictions)

#plt.hist(y_test - predictions)

#from sklearn import metrics

#mae = print ('mae:',metrics.mean_absolute_error(y_test, predictions))

#msr = print ('msr:',metrics.mean_squared_error(y_test, predictions))

#rmse = print ('rmse:',np.sqrt(metrics.mean_squared_error(y_test, predictions)))

#input_pred = np.array([0.3,20,40,1,0])
#print(input_pred)
#input_pred_norm = (input_pred - x1.min()) / (x1.max() - x1.min())
#print('input_pred_norm=',input_pred_norm)
#input_pred_norm_list = input_pred_norm.tolist()
#print(input_pred_norm_list)

#prediction = model.predict([input_pred_norm_list])
#Roughness = (prediction*(df['Surface Roughness(µm)'].max() - df['Surface Roughness(µm)'].min())) + df['Surface Roughness(µm)'].min()
#print ('Surface Roughness(µm) =',Roughness)
#from sklearn.metrics import r2_score
#print("Mean absolute error: %.2f" % np.mean(np.absolute(predictions - y_test)))
#print("Residual sum of squares (MSE): %.2f" % np.mean((predictions - y_test) ** 2))
#print("R2-score: %.2f" % r2_score(predictions, y_test) )
#print('Variance score: %.2f' % model.score(x_test, y_test))






