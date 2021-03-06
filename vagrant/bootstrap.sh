#!/bin/bash

# Install dependencies
sudo apt-get install -y build-essential git libgmp3-dev screen golang

# Setup GO
export GOPATH=$HOME/go
mkdir -p ~/go; echo "export GOPATH=$HOME/go" >> ~/.bashrc

export PATH=$PATH:$HOME/go/bin:/usr/local/go/bin
echo "export PATH=$PATH:$HOME/go/bin:/usr/local/go/bin" >> ~/.bashrc

pushd /go-ethereum
make geth
popd
