#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

pushd $DIR
cmd='./../build/bin/geth attach'
eval $cmd
popd
