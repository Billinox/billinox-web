interface DocumentTemplateTheme {
  primaryColor: string;
  background: { type: string; value: string };
  table: {
    headerBackgroundColor: string;
    headerTextColor: string;
    totalBackgroundColor?: string;
    totalTextColor?: string;
  };
}

interface DocumentTemplateModel {
  id: string;
  thumbnail: string;
  name: string;
  theme: DocumentTemplateTheme;
}
