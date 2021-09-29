from pylint import epylint as lint
(pylint_stdout, pylint_stderr) = lint.py_run('index.py', return_std=True)
print(pylint_stdout.getvalue())