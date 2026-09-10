export const invoiceTemplates: DocumentTemplateModel[] = [
  {
    id: '1',
    name: 'standard',
    theme: {
      primaryColor: '#393938',
      table: {
        headerBackgroundColor: '#393938',
        headerTextColor: '#ffffff',
        totalBackgroundColor: '',
        totalTextColor: '',
      },
      background: {
        type: 'color',
        value: '#fffbf0',
      },
    },
    thumbnail: '/thumbnails/invoice/simple_00.jpg',
  },
  {
    id: '2',
    name: 'modern',
    theme: {
      primaryColor: '#5271ff',
      table: {
        headerBackgroundColor: '#393938',
        headerTextColor: '#ffffff',
        totalBackgroundColor: '#5271ff',
        totalTextColor: '#ffffff',
      },
      background: {
        type: 'image',
        value: 'use data uri',
      },
    },
    thumbnail: '/thumbnails/invoice/modern_00.jpg',
  },
] as const;

export const receiptTemplates: DocumentTemplateModel[] = [
  {
    id: '1',
    name: 'standard',
    theme: {
      primaryColor: '#393938',
      table: {
        headerBackgroundColor: '#393938',
        headerTextColor: '#ffffff',
        totalBackgroundColor: '',
        totalTextColor: '',
      },
      background: {
        type: 'color',
        value: '#fffbf0',
      },
    },
    thumbnail: '/thumbnails/invoice/simple_00.jpg',
  },
  {
    id: '2',
    name: 'modern',
    theme: {
      primaryColor: '#5271ff',
      table: {
        headerBackgroundColor: '#393938',
        headerTextColor: '#ffffff',
        totalBackgroundColor: '#5271ff',
        totalTextColor: '#ffffff',
      },
      background: {
        type: 'image',
        value: 'use data uri',
      },
    },
    thumbnail: '/thumbnails/invoice/modern_00.jpg',
  },
] as const;

export const quotationTemplates: DocumentTemplateModel[] = [
  {
    id: '1',
    name: 'standard',
    theme: {
      primaryColor: '#393938',
      table: {
        headerBackgroundColor: '#393938',
        headerTextColor: '#ffffff',
        totalBackgroundColor: '',
        totalTextColor: '',
      },
      background: {
        type: 'color',
        value: '#fffbf0',
      },
    },
    thumbnail: '/thumbnails/invoice/simple_00.jpg',
  },
  {
    id: '2',
    name: 'modern',
    theme: {
      primaryColor: '#5271ff',
      table: {
        headerBackgroundColor: '#393938',
        headerTextColor: '#ffffff',
        totalBackgroundColor: '#5271ff',
        totalTextColor: '#ffffff',
      },
      background: {
        type: 'image',
        value: 'use data uri',
      },
    },
    thumbnail: '/thumbnails/invoice/modern_00.jpg',
  },
] as const;
