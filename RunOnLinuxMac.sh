#!/bin/bash
cd "$(dirname "$0")"
npm install
vite build && vite preview