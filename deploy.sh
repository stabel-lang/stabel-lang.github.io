#!/usr/bin/env bash
set -e

rm -r dist || true
rm -r .cache || true

npm ci
npm run build

# Upload to s3
pushd dist

aws s3 cp ./index.html s3://stabel-website \
    --cache-control max-age=900

aws s3 cp ./community.html s3://stabel-website \
    --cache-control max-age=900

aws s3 cp ./playground.html s3://stabel-website \
    --cache-control max-age=900

aws s3 cp ./*.css s3://stabel-website \
    --cache-control immutable

aws s3 cp ./*.js s3://stabel-website \
    --cache-control immutable

aws s3 cp ./*.ico s3://stabel-website \
    --cache-control immutable

aws s3 cp ./*.png s3://stabel-website \
    --cache-control immutable

popd
