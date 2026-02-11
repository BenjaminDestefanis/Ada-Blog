import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'courseCardSection',
  title: 'Course Cards Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
    }),
    defineField({
      name: 'courses',
      title: 'Courses',
      type: 'array',
      of: [
        defineField({
          name: 'course',
          title: 'Course',
          type: 'object',
          fields: [
            { name: 'title', type: 'string' },
            { name: 'description', type: 'text' },
            { name: 'image', type: 'image' },
            { name: 'slug', type: 'slug' },
          ],
        }),
      ],
    }),
  ],
})
