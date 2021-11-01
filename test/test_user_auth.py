from flask_cors import CORS
import requests
import pytest
from flask import Flask


def test_signup():

    mock_user = {'fullname': 'test_user',
               'password': 'testing',
               'email': 'test@gmail.com'}

    response = requests.post("https://damp-citadel-25681.herokuapp.com/signup", data=mock_user)
    assert response.status_code == 200


def test_login_when_user_exist():
    mock_user = {
        'email' : 'test@gmail.com',
        'password' : 'testing'
    }

    response = requests.get("https://damp-citadel-25681.herokuapp.com/login", data=mock_user)
    assert response.status_code == 200

def test_login_wrong_password():
    mock_user = {
        'email' : 'test@gmail.com',
        'password' : 'wrong_password'
    }

    response = requests.post("https://damp-citadel-25681.herokuapp.com/login", data=mock_user)
    assert response.status_code == 200


