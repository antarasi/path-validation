# path-validation
This utility package is intended to be used for path validation from any user input (html form for example).
`path-validation` does not check the real filesystem structure - check `fs.lstat()` to validate against filesystem.

## isAbsolutePath(str)

Node.js `path.isAbsolute()` seems to be insufficient for input validation since it allows patterns and traversal.

### Rules

1. provided path is string
2. provided path is not empty string
3. provided path doesn't have disallowed characters (see list below)
4. provided path resolves to absolute path

### Disallowed characters

The list of disallowed characters include restriced characters on Linux & Windows as well as some characters that should be avoided in file naming.

```
[   (left square bracket)
]   (right square bracket)
#   (numer sign / hash / pound)
%   (percent sign)
&   (ampersand)
{   (left curly bracket)
}   (right curly bracket)
<   (less than)
>   (greater than)
*   (asterisk - part of patterns)
?   (question mark)
\s  (any whitespace)
\b  (backspace)
\0  (null byte)
$   (dollar)
!   (exclamation mark)
'   (single quote)
:   (colon - sometimes works, but is actually NTFS Alternate Data Streams)
@   (at)
|   (vertical bar or pipe)
‘   (backtick)
`   (backtick)
“   (double quote)
"   (double quote)
+   (plus sign)
^   (caret)
```

## Related articles

- http://www.mtu.edu/umc/services/digital/writing/characters-avoid/
- https://serverfault.com/questions/150740/linux-windows-unix-file-names-which-characters-are-allowed-which-are-unesc
- https://stackoverflow.com/questions/1976007/what-characters-are-forbidden-in-windows-and-linux-directory-names


## Contributing

Pull requests are always welcome. Please review and add your test specs for
[valid](https://github.com/antarasi/path-validation/blob/master/test/specs/valid-paths.spec.js)
and [invalid](https://github.com/antarasi/path-validation/blob/master/test/specs/invalid-paths.spec.js) paths.

## License

Copyright (c) 2018 Adrian Matylewicz Released under the MIT license.

