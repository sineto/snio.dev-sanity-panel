export default {
  name: "introduce",
  title: "Introduce Section",
  type: "document",
  fields: [
    {
      name: "greet",
      title: "My name",
      type: "string",
    },
    {
      name: "body",
      title: "Introduce Body",
      type: "text",
    },
    {
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
  ],
};
