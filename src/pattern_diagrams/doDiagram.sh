#!/usr/bin/env sh
cd "$(dirname $0)"

OUTDIR="../../../sprawozdanie/img"

plantuml -tsvg rafal/*  -o "$OUTDIR"
