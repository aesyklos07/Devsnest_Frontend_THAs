import os

files = ["<h2> Devnest Take-Home Assignments </h2>\n", "<h5> @aesyklos07 </h5>\n"]

for dir, _, _ in os.walk("."):
	if 'git' not in dir and not dir == ".":
		name = dir.split("\\")
		html_link = f"<a href='{dir}'>{name[-1]}</a><br>\n"
		files.append(html_link)
	
with open("index.html", 'w+') as f:
	f.writelines(files)
