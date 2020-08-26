import { stub } from "sinon"
import * as metadata from "./metadata"

export const stubMetadata = () => {
  stub(metadata, "useSiteMetadata").returns({
    site: {
      siteMetadata: {
        title: "Project Management",
      },
    },
  })
}
