import { Formik, Form, Field } from "formik";
import { Button } from "neetoui";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  age: Yup.number()
    .required("Age is required")
    .min(1, "Age must be at least 1"),
});

const MyForm = () => {
  const handleSubmit = (values, { setSubmitting, setErrors }) => {
    if (setErrors) {
      console.log("Entered Details:", values);
    } else {
      console.log("Validation Errors:", setErrors);
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ name: "", age: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors }) => (
        <Form>
          <div>
            <Field name="name" placeholder="Name" type="text" />
            {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
          </div>
          <div>
            <Field name="age" placeholder="Age" type="number" />
            {errors.age && <div style={{ color: "red" }}>{errors.age}</div>}
          </div>
          <Button disabled={isSubmitting} label="Submit" type="submit" />
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
