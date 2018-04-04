# path-validation [![npm version](https://badge.fury.io/js/path-validation.svg)](https://badge.fury.io/js/path-validation)
> This utility package is intended to be used for filesystem path validation from any user input (html form for example).
`path-validation` does not check the real filesystem structure - check `fs.lstat()` to validate against filesystem.

## isAbsolutePath(str, dirSeparator)

Node.js `path.isAbsolute()` seems to be insufficient for input validation since it allows patterns and traversal.

### Rules

1. provided path is string
2. provided path is not empty string
3. provided path doesn't have disallowed characters (see list below)
4. provided path resolves to absolute path
5. provided path match platform specific rules (see list below)

### Linux specific rules

5. a) start with slash
5. b) does not contain backslash

### Windows specific rules

5. c) start with drive letter
5. d) does not contain forward slash
5. e) contain only one colon

### Disallowed characters

The list of disallowed characters include restriced characters on Linux & Windows as well as some characters that should be avoided in file naming.

```
[   (left square bracket)
]   (right square bracket)
#   (number sign / hash / pound)
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
:   (colon - allowed on Windows to appear once only)
@   (at)
|   (vertical bar or pipe)
‘   (backtick)
`   (backtick)
“   (double quote)
"   (double quote)
+   (plus sign)
^   (caret)
/   (slash - disallowed on Windows only)
\   (backslash - disallowed on Linux only)
```

## isAbsoluteLinuxPath(str)
Alias to `isAbsolutePath(str, '/')`

## isAbsoluteWindowsPath(str)
Alias to `isAbsolutePath(str, '\\')`


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

