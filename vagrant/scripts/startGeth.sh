#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
pushd $DIR

call=`screen /go-ethereum/build/bin/geth --nodiscover --port 30309 --networkid "536354" console`

popd
