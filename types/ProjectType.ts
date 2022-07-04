import { Url } from "url";

type ProjectType = {
  name: string;
  techs: Array<string>;
  description: string;
  repository: Url;
  live_demo: Url;
  published: Boolean;
};

export default ProjectType;
