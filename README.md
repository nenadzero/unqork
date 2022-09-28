## Install

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
