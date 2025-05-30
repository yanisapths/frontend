#!/bin/bash

printf "\nUpdate app version\n\n"

bun update-version

git add .

APP_VERSION=$(npm pkg get version | sed 's/"//g')

git commit -m "feat: Updated app version to $APP_VERSION"

printf "\nBuilding prod...\n\n"

bun build:nonprd
bun build:prd

git add .

git commit -m 'feat: Built prd'

git tag "$APP_VERSION"

git push origin release --tags

printf "\nProduction deployed successfully with version %s" "$APP_VERSION"
