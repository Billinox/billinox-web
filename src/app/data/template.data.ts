import { DocumentTemplateModel } from '../models/document.model';

export const invoiceTemplates: DocumentTemplateModel[] = [
  {
    id: '1',
    name: 'standard',
    type: 'simple',
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
    type: 'modern',
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
        value: '/backgrounds/modern/00.png',
      },
    },
    thumbnail: '/thumbnails/invoice/modern_00.jpg',
  },
] as const;

export const receiptTemplates: DocumentTemplateModel[] = [
  {
    id: '1',
    name: 'standard',
    type: 'simple',
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
    type: 'modern',
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
        value: '/backgrounds/modern/01.png',
      },
    },
    thumbnail: '/thumbnails/invoice/modern_00.jpg',
  },
] as const;

export const quotationTemplates: DocumentTemplateModel[] = [
  {
    id: '1',
    name: 'standard',
    type: 'simple',
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
    type: 'modern',
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
        value: '/backgrounds/modern/02.png',
      },
    },
    thumbnail: '/thumbnails/invoice/modern_00.jpg',
  },
] as const;
