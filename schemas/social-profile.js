export default {
  name: "socialProfile",
  title: "Social Profile Section",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Social Name",
      type: "string",
    },
    {
      name: "linkedin",
      title: "LinkedIn Profile",
      description: "URL to your LinkedIn profile",
      type: "url",
    },
    {
      name: "github",
      title: "Github Profile",
      description: "URL to your Github profile",
      type: "url",
    },
    {
      name: "email",
      title: "E-mail",
      type: "string",
    },
    {
      name: "phoneNumber",
      title: "Phone number",
      type: "string",
    },
    {
      name: "telegram",
      title: "Telegram",
      type: "url",
    },
  ],
};
