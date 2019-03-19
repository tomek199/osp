#!/usr/bin/env bash

PORT=
USER=
HOST=
DEPLOY_DIR=

echo "--- Building package ---"
ng build
zip -r osp.zip dist/osp/*
echo "--- Cleaning remote public_html ---"
ssh -p 59184 tomek199@tomek199.vot.pl rm -rf $DEPLOY_DIR/*
echo "--- Copying to remote ---"
scp -P 59184 osp.zip tomek199@tomek199.vot.pl:$DEPLOY_DIR
echo "--- Extracting on remote ---"
ssh $USER@$HOST -p $PORT unzip $DEPLOY_DIR/osp.zip -d $DEPLOY_DIR/
ssh $USER@$HOST -p $PORT cp -r $DEPLOY_DIR/dist/osp/* $DEPLOY_DIR/
ssh $USER@$HOST -p $PORT rm -rf $DEPLOY_DIR/dist/
ssh $USER@$HOST -p $PORT rm $DEPLOY_DIR/osp.zip
echo "--- Cleaning local build ---"
rm osp.zip
rm -rf dist/
