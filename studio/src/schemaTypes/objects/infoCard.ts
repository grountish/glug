import {defineField, defineType} from 'sanity'
import {ImageIcon} from '@sanity/icons'

export const infoCard = defineType({
  name: 'infoCard',
  title: 'Info Card',
  type: 'object',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'theme',
      title: 'Tema',
      type: 'string',
      options: {
        list: [
          {title: 'Dark', value: 'darkTheme'},
          {title: 'Light', value: 'darkTheme'},
        ],
        layout: 'radio',
      },
      initialValue: 'darkTheme',
    }),
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
    }),
    defineField({
      name: 'text',
      title: 'Texto',
      description: 'Opcional',
      type: 'blockContent',
    }),
    defineField({
      name: 'textColor',
      title: 'Color de texto',
      type: 'color',
    }),
    defineField({
      name: 'image',
      title: 'Imagen',
      type: 'image',
    }),
    defineField({
      name: 'imageAltText',
      title: 'Texto alternativo de la imagen',
      description: 'Esencial para accesibilidad y SEO',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'images.0',
    },
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Bloque de imagen y texto',
        subtitle: subtitle || 'No hay texto',
        media: media || ImageIcon,
      }
    },
  },
})
