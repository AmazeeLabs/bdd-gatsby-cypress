import { useAddProject as useAddProjectQuery } from "../external/projects"
import { navigate } from "gatsby"

export const useAddProject = () => {
  const [addProject, { loading, error }] = useAddProjectQuery()
  return [
    async input => {
      !!(await addProject({ variables: { input } })).data.addProject &&
        navigate("/projects")
    },
    { loading, error: error ? error.message : null },
  ]
}
