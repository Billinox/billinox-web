import { DocumentTemplateModel } from '../models/document.model';
import { themes } from './themes.data';

export const templates: DocumentTemplateModel[] = [
  {
    id: '1',
    name: 'standard',
    type: 'simple',
    theme: themes['#393938'].simple,
    thumbnail: '/thumbnails/invoice/simple_00.jpg',
  },
  {
    id: '2',
    name: 'Modern',
    type: 'modern',
    theme: themes['#393938'].modern,
    thumbnail: '/thumbnails/invoice/modern_00.jpg',
  },
] as const;
