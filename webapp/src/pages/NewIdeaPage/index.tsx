import { Segment } from "../../components/Segment";
import { Textarea } from "../../components/Textarea";
import { Input } from "../../components/Input";
import { useFormik } from "formik";

export const NewIdeaPage = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      nick: "",
      description: "",
      text: "",
    },
    onSubmit: (values) => {
      console.log("Form data", values);
    },
  });

  return (
    <Segment title="New Idea">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <Input name="name" label="Name" formik={formik} />
        <Input name="nick" label="Nick" formik={formik} />
        <Input name="description" label="Description" formik={formik} />
        <Textarea name="text" label="Text" formik={formik} />

        <button type="submit">Create Idea</button>
      </form>
    </Segment>
  );
};
