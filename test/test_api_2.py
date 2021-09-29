from flask import Flask
import os
import sys

sys.path.insert(1, os.getcwd())
import pytest

from api.api_2 import __name__ as name

@pytest.fixture
def client():
    print("here")
    print(name)
    app = Flask(name)
    with app.test_client() as client:
        yield client

def test_time(client):
    rv = client.get('/products')
    print(rv.data)
    # assert 200 in rv.data
