#!/bin/bash

# Xvfbの起動
Xvfb :99 -screen 0 1280x720x16 &
export DISPLAY=:99

# Fluxboxの起動
fluxbox &

# x11vncの起動
x11vnc -display :99 -passwd secret -forever &

# アプリケーションの起動（ここでは例として npm run test を実行していますが、適宜変更してください）
npm run test
