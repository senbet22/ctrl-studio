const teamMember = {
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: "avatar",
      title: "Avatar",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "alt",
      title: "Alt Text",
      type: "string",
      description: "For accessibility and SEO",
    },
    {
      name: "background",
      title: "Background",
      type: "text",
    },
  ],
};

export default teamMember;
