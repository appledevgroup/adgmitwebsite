#!/bin/bash
# Script to kill processes using port 5000

PORT=${1:-5000}
echo "🔍 Checking for processes on port $PORT..."

PIDS=$(lsof -ti:$PORT)

if [ -z "$PIDS" ]; then
    echo "✅ Port $PORT is free!"
else
    echo "🛑 Found processes: $PIDS"
    echo "🔪 Killing processes..."
    echo $PIDS | xargs kill -9 2>/dev/null
    sleep 1
    
    # Check again
    REMAINING=$(lsof -ti:$PORT)
    if [ -z "$REMAINING" ]; then
        echo "✅ Port $PORT is now free!"
    else
        echo "⚠️  Some processes are still running. Try manually:"
        echo "   kill -9 $REMAINING"
    fi
fi

