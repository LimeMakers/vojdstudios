#!/usr/bin/fontforge
Open($1)
Generate($1:r + ".svg")
Generate($1:r + ".ttf")
Generate($1:r + ".woff")
Generate($1:r + ".eot")