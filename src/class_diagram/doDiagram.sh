#!bin/bash

cd "$(dirname "$0")"

plantuml -Tsvg class_diagram.puml -o ../../sprawozdanie/img/
