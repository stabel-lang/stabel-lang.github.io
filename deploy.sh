#!/usr/bin/env bash
set -e

rm -r dist || true
mkdir dist

# Build playground
pushd playground

npm ci
npm run build

popd

# Upload to s3
pushd dist

aws s3 cp ./index.html s3://play-website \
    --cache-control must-revalidate

aws s3 cp ./playground.html s3://play-website \
    --cache-control must-revalidate

aws s3 cp ./playground.*.js s3://play-website \
    --cache-control immutable

popd
