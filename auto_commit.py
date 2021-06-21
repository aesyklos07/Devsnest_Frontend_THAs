import os
msg = input("Enter commit message here ") + " " 
os.system(f'git pull origin & git add . & git commit -m "{msg}" & git push origin')
