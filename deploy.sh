#!/usr/bin/env bash
set -e

rm -r dist || true
npm ci
npm run build

# Upload to s3
pushd dist

aws s3 cp ./index.html s3://play-website \
    --cache-control must-revalidate

aws s3 cp ./*.css s3://play-website \
    --cache-control immutable

aws s3 cp ./playground.html s3://play-website \
    --cache-control must-revalidate

aws s3 cp ./*.js s3://play-website \
    --cache-control immutable

popd
