[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-downloads-url]
[![MIT License][license-image]][license-url]

[license-image]: https://img.shields.io/badge/license-Apache%202-blue.svg?style=flat
[license-url]: LICENSE
[npm-url]: https://npmjs.org/package/unqork
[npm-version-image]: https://img.shields.io/npm/v/unqork.svg?style=flat
[npm-downloads-image]: https://img.shields.io/npm/dm/unqork.svg?style=flat
[npm-downloads-url]: https://npmcharts.com/compare/unqork?minimal=true

## About

This is not the official repository

## Install

Using npm:

```javascript
npm install unqork
```

## Usage

```javascript
const Unqork = require("unqork");

(async () => {
    const unqork = new Unqork("email", "password", "environment");
    const submission = await unqork.getSubmission("6078e938d87660707f31c624", "6053e968afcc293120198785");
    console.log(submission);
})();
```

## API

**getSubmission**(_moduleId_, _submissionId_)

```javascript
const submission = await unqork.getSubmission("6078e938d87660707f31c624", "6053e968afcc293120198785");
```

**updateSubmission**(_moduleId_, _submissionId_, _json_)

```javascript
const submission = await unqork.updateSubmission("6078e938d87660707f31c624", "6053e968afcc293120198785", { data: { fullName: "John Doe" });
```

**deleteSubmission**(_moduleId_, _submissionId_)

```javascript
const status = await unqork.deleteSubmission("6078e938d87660707f31c624", "6053e968afcc293120198785");
```

**execute**(_moduleId_, _json_)

```javascript
const submission = await unqork.execute("6078e938d87660707f31c624", { fullName: "John Doe" });
```

**getRevisions**(_moduleId_, _submissionId_)

```javascript
const revisions = await unqork.getRevisions("6078e938d87660707f31c624", "6053e968afcc293120198785");
```

**getRevision**(_moduleId_, _submissionId_, _revisionId_)

```javascript
const revision = await unqork.getRevision("6078e938d87660707f31c624", "6053e968afcc293120198785", "631e45648d8561859j23c789");
```
