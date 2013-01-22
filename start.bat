@echo off
set /p gnfid="Enter gnfnumber: " %=%
set /p lang="Enter languagecode in format nb-no: " %=%
set /p webfolder="Enter folder to serve files from (default: running folder): " %=%
set /p port="Enter port to serve files on (default: 8888): " %=%
@echo "Starting webserver on http://localhost:8888"
bin\node.exe server.js %gnfid%/%lang% %webfolder% %port%