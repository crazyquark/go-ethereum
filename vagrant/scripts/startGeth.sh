#!/bin/bash
PORT=$1

if [ -z $PORT ]; then
  PORT=30310
fi

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
pushd $DIR

call=`screen /go-ethereum/build/bin/geth --nodiscover --port $PORT --networkid "536354" console`

popd
