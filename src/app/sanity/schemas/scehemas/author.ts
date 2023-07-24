import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields:[
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
    }),
    defineField({
      name: 'socialSites',
      title: 'Social Sites',
      type: 'object',
      fields: [
        {
          name: 'gmail',
          title: 'E-mail',
          type: 'string',
        },
        {
          name: 'facebook',
          title: 'Facebook Account Link',
          type: 'string',
        },

        {
          name: 'twitter',
          title: 'Twitter Account Link',
          type: 'string',
        },
        {
          name: 'linkedin',
          title: 'LinkdIn Account Link',
          type: 'string',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
});

// defineField({
//   name: 'socialSites',
//   title: 'Social Sites',
//   type: 'array',
//   of: [
//     {
//       name: 'facebook',
//       title: 'Facebook',
//       type: 'array',
//       of:[
//         {
//           name: 'link',
//       title: 'URL',
//       type: 'url',
//         }
//       ]
//     },
//   ],
// }),
