export default {
  name: "githubRepo",
  title: "Github Section",
  type: "document",
  fields: [
    {
      name: "links",
      title: "Sources",
      type: "array",
      of: [{ type: "url" }],
    },
  ],
};
