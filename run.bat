@echo off
cd /d %~dp0
git pull
npm run start
