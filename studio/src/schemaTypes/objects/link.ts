import {defineField, defineType} from 'sanity'
import {LinkIcon} from '@sanity/icons'

export const link = defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'linkType',
      title: 'Link Type',
      type: 'string',
      initialValue: 'href',
      options: {
        list: [
          {title: 'URL', value: 'href'},
          {title: 'Page', value: 'page'},
          {title: 'Nav Link', value: 'navLink'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'urlTitle',
      title: 'URL Title',
      type: 'string',
      hidden: ({parent}) => parent?.linkType !== 'href', // Show only if "href" is selected
    }),
    defineField({
      name: 'href',
      title: 'URL',
      type: 'url',
      hidden: ({parent}) => parent?.linkType !== 'href', // Show only if "href" is selected
      validation: (Rule) =>
        Rule.custom((value, context: any) => {
          if (context.parent?.linkType === 'href' && !value) {
            return 'URL is required when Link Type is URL'
          }
          return true
        }),
    }),
    defineField({
      name: 'page',
      title: 'Page',
      type: 'reference',
      to: [{type: 'page'}],
      hidden: ({parent}) => parent?.linkType !== 'page', // Show only if "page" is selected
      validation: (Rule) =>
        Rule.custom((value, context: any) => {
          if (context.parent?.linkType === 'page' && !value) {
            return 'Page reference is required when Link Type is Page'
          }
          return true
        }),
    }),
    defineField({
      name: 'navLink',
      title: 'Nav Link',
      type: 'string',
      hidden: ({parent}) => parent?.linkType !== 'navLink', // Show only if "navLink" is selected
      validation: (Rule) =>
        Rule.custom((value, context: any) => {
          if (context.parent?.linkType === 'navLink' && !value) {
            return 'Nav Link is required when Link Type is Nav Link'
          }
          return true
        }),
    }),
    defineField({
      name: 'openInNewTab',
      title: 'Open in new tab',
      type: 'boolean',
      initialValue: false,
      hidden: ({parent}) => parent?.linkType === 'navLink', // Hide for "navLink" type
    }),
  ],

  preview: {
    select: {
      linkType: 'linkType',
      pageTitle: 'page.name',
      urlTitle: 'urlTitle',
      navLink: 'navLink',
    },
    prepare({linkType, pageTitle, urlTitle, navLink}) {
      let title = 'Untitled Link'
      if (linkType === 'page') title = pageTitle || 'Untitled Page'
      if (linkType === 'href') title = urlTitle || 'Untitled URL'
      if (linkType === 'navLink') title = navLink || 'Untitled Nav Link'

      return {
        title,
        media: LinkIcon,
      }
    },
  },
})
