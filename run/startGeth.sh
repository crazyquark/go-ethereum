#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

pushd $DIR

if [ -z $1 ]; then
	call=`screen ./../build/bin/geth --nodiscover --port 30309 --networkid "536354" console`
else
	#echo "screen ./../build/bin/geth --nodiscover --port 30309 --networkid 536354 console 2>> $1"
	call=`./../build/bin/geth --nodiscover --port 30309 --networkid "536354" console 2>> $1`
fi

popd
