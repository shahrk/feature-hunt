from flask_cors import CORS
import requests
from pprint import pprint

def test_get_feature():
    response = requests.get("http://localhost:5000/feature-hunt")
    # print(respocnse.status_code)
    assert response.status_code==200
