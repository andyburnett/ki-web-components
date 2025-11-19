#!/bin/bash

PID=$(lsof -t -i :8080)

if [ -z "$PID" ]; then
  echo "No process found listening on port 8080."
else
  echo "Stopping process with PID: $PID"
  kill $PID
  echo "Server stopped."
fi
