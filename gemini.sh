#!/bin/bash

# A script to guide users through setting up the Gemini CLI in a new repository.

# --- Helper Functions ---
print_header() {
  echo "================================================="
  echo "$1"
  echo "================================================="
}

# --- Main Script ---

print_header "Gemini CLI Repository Setup"

echo "This script will guide you through setting up the Gemini CLI for a new repository."
echo "It will not store any secret information. Instead, it will provide you with instructions."
echo

# Step 1: Check for existing configuration
if [ -d ".gemini" ]; then
  echo "A .gemini directory already exists. It seems this repository is already configured."
  echo "If you want to re-configure, please remove the .gemini directory and run this script again."
  exit 0
fi

# Step 2: API Key Instructions
print_header "Step 1: Set your Gemini API Key"
echo "The Gemini CLI requires a Google AI API key to function."
echo "1. Obtain your API key from Google AI Studio:"
echo "   https://aistudio.google.com/app/apikey"
echo
echo "2. Once you have your key, set it as an environment variable."
echo "   You can do this for your current session by running:"
echo
echo "   export GEMINI_API_KEY='''YOUR_API_KEY_HERE'''"
echo
echo "   For a more permanent setup, add this line to your shell profile file"
echo "   (e.g., ~/.bashrc, ~/.zshrc, or ~/.profile) and restart your shell."
echo
read -p "Press [Enter] after you have set the GEMINI_API_KEY environment variable..."

# Step 3: Check if the API key is set
if [ -z "$GEMINI_API_KEY" ]; then
  echo
  echo "Warning: The GEMINI_API_KEY environment variable is not set."
  echo "The Gemini CLI will not work without it. Please set it and try again."
  exit 1
fi

echo "Great! The GEMINI_API_KEY is set in your current session."
echo

# Step 4: Project Initialization
print_header "Step 2: Initialize the Repository"
echo "We will now create a local configuration directory for Gemini called '.gemini'."
echo "This directory can hold repository-specific settings."
mkdir .gemini
echo "Created a .gemini directory."
echo

# Step 5: .gitignore
print_header "Step 3: Update .gitignore"
echo "To ensure that no sensitive information is ever committed to your repository,"
echo "we recommend adding the .gemini directory to your .gitignore file."
echo
if [ -f ".gitignore" ]; then
    echo ".gemini/" >> .gitignore
    echo "Added '.gemini/' to your existing .gitignore file."
else
    echo ".gemini/" > .gitignore
    echo "Created a new .gitignore file and added '.gemini/' to it."
fi
echo

# Step 6: Completion and Usage
print_header "Setup Complete!"
echo "Your repository is now configured to use the Gemini CLI."
echo
echo "To get started, you can try running commands like:"
echo "gemini '''your prompt here'''"
echo "gemini --help"
echo
