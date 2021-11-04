import requests
import test_config


def test_signup():
    mock_user = {'fullname': 'test_user',
                 'password': 'testing',
                 'email': 'test@gmail.com'}

    signup_url = f'{test_config.test_url}/signup'

    response = requests.post(signup_url, data=mock_user)
    assert response.status_code == 200


def test_signup_wrong_input():
    mock_user = {'fullname': 'test_user',
                 'password': 'testing'}

    signup_url = f'{test_config.test_url}/signup'

    response = requests.post(signup_url, data=mock_user)
    assert response.status_code == 200


def test_login_when_user_exist():
    mock_user = {
        'email': 'test@gmail.com',
        'password': 'testing'
    }
    login_url = f'{test_config.test_url}/login'
    response = requests.post(login_url, data=mock_user)
    assert response.status_code == 200


def test_login_wrong_password():
    mock_user = {
        'email': 'test@gmail.com',
        'password': 'wrong_password'
    }

    login_url = f'{test_config.test_url}/login'
    print(login_url)
    response = requests.post(login_url, data=mock_user)

    assert '403' in response.text


def test_login_wrong_email():
    mock_user = {
        'email': 'wrong@gmail.com',
        'password': 'testing'
    }
    login_url = f'{test_config.test_url}/login'
    response = requests.post(login_url, data=mock_user)

    assert response.status_code == 403


def test_login_missing_password():
    mock_user = {
        'email': 'test@gmail.com'
    }

    login_url = f'{test_config.test_url}/login'
    response = requests.post(login_url, data=mock_user)


    assert response.status_code == 403



def test_login_missing_email():
    mock_user = {
        'password': 'testing'
    }

    login_url = f'{test_config.test_url}/login'
    response = requests.post(login_url, data=mock_user)

    assert response.status_code == 403

