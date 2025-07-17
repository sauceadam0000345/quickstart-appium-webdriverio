#!/bin/bash

# Force Android + Java SDK visibility
export ANDROID_HOME=$HOME/Library/Android/sdk
export ANDROID_SDK_ROOT=$ANDROID_HOME
export JAVA_HOME=$(/usr/libexec/java_home)

echo "ANDROID_HOME: $ANDROID_HOME"
echo "JAVA_HOME: $JAVA_HOME"

# Start Appium
npx appium