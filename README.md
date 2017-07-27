gulp-rubbish
===========================

> A gulp plugin which removes file(s) from given directory if the file is not used in the source file.

Install with npm [URL](https://www.npmjs.com/)
-------------------
npm install gulp-rubbish

Usage
-----------

<!--- apply for all file types -->

gulp.src('test.css', { buffer: true })
	.pipe(gulpRubbish('assets', '*'));

<!--- apply for specific file type -->

gulp.src('test.css', { buffer: true })
	.pipe(gulpRubbish('assets', 'jpg'));

API
-------------------

**gulpRubbish(directory, extension)**

**directory**

Type: string

A path in file system

**extension**

Type: string

extension of a file. Use * for all type of extensions

Licence
-------
The MIT License (MIT)

Copyright (c) 2017 Turgay Gulmez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.