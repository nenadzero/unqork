**getSubmission**(_moduleId_, _submissionId_)

```javascript
const submission = await unqork.getSubmissions("6078e938d87660707f31c624", "6053e968afcc293120198785");
```

**updateSubmission**(_moduleId_, _submissionId_, _json_)

```javascript
const submission = await unqork.updateSubmission("6078e938d87660707f31c624", "6053e968afcc293120198785", { data: { fullName: "John Doe" });
```

**execute**(_moduleId_, _json_)

```javascript
const submission = await unqork.execute("6078e938d87660707f31c624", { fullName: "John Doe" });
```
