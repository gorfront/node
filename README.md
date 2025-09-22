balsamiq.cloud ------- for paint your idea

trello.com ---------- for tasks

Backlog sprint in Propgress Done Archive

all tasks some tasks for time tasks in progress ready tasks deployed tasks

validation using formik

validate: (values) => {
const errors: Partial<typeof values> = {};
if (!values.name) {
errors.name = "Name is required";
}
if (!values.nick) {
errors.nick = "Nick is required";
} else if (!values.nick.match(/^[a-z0-9-]+$/)) {
errors.nick = "Nick may contain only lowercase letters, numbers and dashes";
}
if (!values.description) {
errors.description = "Description is required";
}
if (!values.text) {
errors.text = "Text is required";
} else if (values.text.length < 100) {
errors.text = "Text should be at least 100 characters long";
}
return errors;
},
