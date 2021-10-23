from flask import Flask, render_template, request, url_for, redirect, session
import pymongo
import bcrypt
import json

app = Flask(__name__)
app.secret_key = "testing"
client = pymongo.MongoClient("mongodb+srv://bot:bot123@cluster0.xph5e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = client.get_database('total_records')
records = db.register


@app.route("/signup", methods=['post'])
def signup():
    user = request.form.get("fullname")
    email = request.form.get("email")
    password = request.form.get("password")
    user_found = records.find_one({"name": user})
    email_found = records.find_one({"email": email})
    if user_found or email_found:
        return 'Either User or Email Already Exists'

    hashed = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
    user_input = {'name': user, 'email': email, 'password': hashed}
    records.insert_one(user_input)

    return "User Successfully Entered"

@app.route('/logged_in')
def logged_in():
    print(session)
    if "email" in session:
        email = session["email"]
        name = session["name"]
        return f"200 OK {email}, {name}"
    else:
        return redirect(url_for("login"))


@app.route("/login", methods=["POST", "GET"])
def login():
    message = 'Please login to your account'


    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get("password")

        email_found = records.find_one({"email": email})
        if email_found:
            email_val = email_found['email']
            passwordcheck = email_found['password']
            name = email_found['name']

            if bcrypt.checkpw(password.encode('utf-8'), passwordcheck):
                session["email"] = email_val
                session["name"] = name
                return redirect(url_for('logged_in'))
            else:
                if "email" in session:
                    return redirect(url_for("logged_in"))
                message = '403 Error Wrong Password'
                return message
        else:
            message = '403 Error Email not Found'
            return message
    return message

@app.route("/logout", methods=["POST", "GET"])
def logout():
    if "email" in session:
        session.pop("email", None)
        return "Logout Successful"
    else:
        return "Logout Successful"

if __name__ == "__main__":
    app.run(debug=True)