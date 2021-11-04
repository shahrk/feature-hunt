''' docstr todo '''

from pprint import pprint
from flask_cors import CORS
import requests

def test_get_submit_project():
    ''' docstr todo '''
    response = requests.get("http://localhost:5000/submit-project")
    assert b'bug fix' in response.content

def test_post_submit_project():
    ''' docstr todo '''
    assert b'enhancement' in response.content
