@echo off
set /p gnfid="Enter gnfnumber: " %=%
set /p lang="Enter languagecode in format nb-no: " %=%
set /p webfolder="Enter folder to serve files from: " %=%
@echo "Starting server from on localhost:8888"
bin\node.exe server.js %gnfid%/%lang% %webfolder%