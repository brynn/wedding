#!/bin/bash
# This runs Prettier (https://github.com/prettier/prettier/) with our custom format options.
find src | egrep '\.(ts|tsx|css)$' | grep -v '\.min\.' | xargs prettier \
  --print-width 100 \
  --single-quote \
  --trailing-comma all \
  --no-bracket-spacing \
  "$@"