#!/bin/bash
echo "Starting http-server on port 8080..."
nohup npx http-server -p 8080 > server.log 2>&1 &
echo "Server started. You can check the status in server.log"
echo "Waiting for server to be ready..."
sleep 5
netstat -tuln | grep 8080
