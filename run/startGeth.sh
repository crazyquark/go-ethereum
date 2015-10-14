#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

pushd $DIR
CONSOLE=$1

cmd='./../build/bin/geth --genesis ./genesis.json --nodiscover --port 30309 --networkid 536354 --verbosity 6 console'

if [ -z $CONSOLE ]; then
	cmd='screen '$cmd
else
	cmd=$cmd' 2>> $CONSOLE'
fi

eval $cmd

popd
