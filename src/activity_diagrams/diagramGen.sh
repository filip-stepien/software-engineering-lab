#!/usr/bin/env sh
cd "$(dirname $0)"

OUTDIR="../../../sprawozdanie/5/img"

plantuml -tsvg rafal/* Bartek/* -o "$OUTDIR"
