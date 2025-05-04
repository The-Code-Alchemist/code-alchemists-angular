@echo off
FOR /F "tokens=5" %%P IN ('netstat -aon ^| findstr :4200') DO (
    echo Killing process on port 4200 with PID %%P
    taskkill /PID %%P /F
)
