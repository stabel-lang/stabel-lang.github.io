#!/usr/bin/env bash
set -e

rm -r dist || true
rm -r .cache || true

npm ci
npm run build

rm -r docs || true
mkdir -p docs
cp -R dist/* docs
