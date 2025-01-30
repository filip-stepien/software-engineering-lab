#!/usr/bin/env sh

fd . rafal -e puml -x plantuml -tsvg -o "$(readlink -f ../../sprawozdanie/img/)"
