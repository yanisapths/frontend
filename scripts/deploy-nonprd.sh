#!/bin/bash

current_branch="$(git rev-parse --abbrev-ref HEAD)"

bold=$(tput bold)
normal=$(tput sgr0)

if [[ "$current_branch" == "release" ]]; then
  printf "\nBuilding non prod...\n\n"

  bun build:nonprd

  git add .

  git commit -m 'feat: Built nonprd'

  printf "\nUpdate app version\n\n"

  bun update-version

  git add .

  APP_VERSION=$(npm pkg get version | sed 's/"//g')

  git commit -m "feat: Updated app version to $APP_VERSION"

  git tag "$APP_VERSION"

  git push origin release --tags

  printf "\nDeployed successfully with version %s" "$APP_VERSION"
else
  printf "\nYou are not in the release branch, Please change the branch to %srelease%s before doing the deploy process.\n\n" "$bold" "$normal"
fi
