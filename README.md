# postman2http

Converts a [Postman `.json` file](https://learning.postman.com/docs/getting-started/importing-and-exporting/exporting-data) to a [JetBrains `.http` file](https://www.jetbrains.com/help/idea/http-client-in-product-code-editor.html).

## Usage
```
http2json mycol.json
```
Will output result in stdout.

Should you want to save it in a file:
```
http2json mycol.json > mycol.http
```
