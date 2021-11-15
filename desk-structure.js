import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Panel")
    .items([
      S.listItem()
        .title("Page Settings")
        .child(
          S.list()
            .title("Page Settings")
            .items([
              S.listItem()
                .title("Header")
                .child(S.document().schemaType("header").documentId("header")),
              S.listItem()
                .title("Introduce")
                .child(
                  S.document().schemaType("introduce").documentId("introduce")
                ),
              S.listItem()
                .title("Skills")
                .child(
                  S.documentTypeList("skill").title("Skills Section").child()
                ),
              S.listItem()
                .title("Github Sources")
                .child(
                  S.document().schemaType("githubRepo").documentId("githubRepo")
                ),
              S.listItem()
                .title("Social Profile")
                .child(
                  S.document()
                    .schemaType("socialProfile")
                    .documentId("socialProfile")
                ),
            ])
        ),
      // ...S.documentTypeListItems(),
    ]);
