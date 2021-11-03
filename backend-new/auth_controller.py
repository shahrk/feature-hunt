# pylint: disable=wrong-import-position,pointless-string-statement,undefined-variable,line-too-long
import json
from flask import request, session, redirect, url_for
from flask import Response
import bcrypt
from app import app
from db_init import records


@app.route("/signup", methods=['POST'])
def signup():
    user = request.form.get("fullname")
    email = request.form.get("email")
    password = request.form.get("password")
    user_found = records.find_one({"name": user})
    email_found = records.find_one({"email": email})
    if user_found or email_found:

        error_dict = {
            "code": 409,
            "message": "This email already is already registered.",
            "email": email
        }
        message = json.dumps(error_dict)
        return message

    hashed = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
    user_input = {'name': user, 'email': email, 'password': hashed}
    records.insert_one(user_input)
    error_dict = {
        "code": 200,
        "message": "Registration Successful"
    }
    message = json.dumps(error_dict)
    return message


@app.route('/logged_in')
def logged_in():
    print(session)
    if "email" in session:
        email = session["email"]
        name = session["name"]

        logged_in_dict = {
            "code": 200,
            "email": email,
            "name": name
        }
        message = json.dumps(logged_in_dict)
        return message
    else:
        return redirect(url_for("login"))


@app.route("/login", methods=["POST", "GET"])
def login():
    if request.method == "POST":
        email = request.form.get("email", None)
        print(email, flush=True)
        password = request.form.get("password", None)

        if password is None or email is None:

            return Response(status=403)

        email_found = records.find_one({"email": email})
        if email_found:
            email_val = email_found['email']
            password_check = email_found['password']
            name = email_found['name']

            if bcrypt.checkpw(password.encode('utf-8'), password_check):
                session["email"] = email_val
                session["name"] = name
                return redirect(url_for('logged_in'))
            else:
                if "email" in session:
                    return redirect(url_for("logged_in"))
                error_dict = {
                    "code": 403,
                    "message": "Password is incorrect"
                }
                message = json.dumps(error_dict)
                return message
        else:
            error_dict = {
                "code": 403,
                "message": "We are unable to find a user with that email. Please double check you entered your email "
                           "correctly "
            }
            message = json.dumps(error_dict)
            return message
    loggedin_dict = {
        "code": 200,
        "message": "Sucessfully Logged In"
    }
    message = json.dumps(loggedin_dict)
    return message


@app.route("/logout", methods=["POST", "GET"])
def logout():
    if "email" in session:
        session.pop("email", None)
        return "Logout Successful"
    else:
        return "Logout Successful"
