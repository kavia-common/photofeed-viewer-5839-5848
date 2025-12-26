#!/bin/bash
cd /tmp/kavia/workspace/code-generation/photofeed-viewer-5839-5848/instagram_clone_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

