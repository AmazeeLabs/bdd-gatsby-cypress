import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { useAddProject } from "../../hooks/projects"
import { string, object } from "yup"
import { Field, Form, Formik } from "formik"

const AddProjectPageLayout = () => {
  const schema = object({
    name: string().required(),
  })
  const [addProject, { loading, error }] = useAddProject()

  return (
    <Layout>
      <SEO title="Add Project" />
      <h2>Add Project</h2>
      <div>
        {error ? <p>{error}</p> : null}
        <Formik
          initialValues={{}}
          validationSchema={schema}
          onSubmit={addProject}
        >
          <Form>
            <div>
              <label htmlFor="name">Project name</label>*:&nbsp;
              <Field id="name" name="name" disabled={loading} />
            </div>
            <div>
              <label htmlFor="startDate">Start date</label>:&nbsp;
              <Field id="startDate" name="startDate" disabled={loading} />
            </div>
            <div>
              <label htmlFor="endDate">End date</label>:&nbsp;
              <Field id="endDate" name="endDate" disabled={loading} />
            </div>
            <input type="submit" value="Create" disabled={loading} />
          </Form>
        </Formik>
      </div>
    </Layout>
  )
}

export default AddProjectPageLayout
