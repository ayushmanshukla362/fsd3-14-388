#file system of nodejs
it allows js code running outside the browser and interact
direct;ly to operating system
## common operation  on file/folder
Reading and writing files ->  readfiles(),writefile,appendfile()
- Directory management -> mkdir(),rmdir(),readdir()
Metadata/information -> stat(),lstat(),fstat()
Watching for changes-> watch()->watchfile(),unwatchfile()
Streaming Large files-> createreadstream(), createwritestream()
-File operations-> rename(),truncate(),unlink(),link(),syslink()