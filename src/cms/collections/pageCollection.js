import {
  TemplateKey,
  Kind,
  Body,
  // Title,
  ImageField,
  StringField
  // ObjectField,
  // TextField,
  // ListField,
} from './utils'

// const Image = () => ImageField({ name: 'image', label: 'Image' })
// const HeadingField = () => StringField({ name: 'heading', label: 'Heading' })
// const DescriptionField = () => TextField({ name: 'description',
// label: 'Description'
// })

export const pageCollection = {
  name: 'page',
  label: 'Pages',
  label_singular: 'Page',
  files: [
    {
      name: 'about',
      file: 'src/pages/about/index.md',
      label: 'About',
      fields: [
        Kind('page'),
        TemplateKey('about-page'),
        Body(),
      ]
    },
    {
      name: 'products',
      file: 'src/pages/products/index.md',
      label: 'Products Page',
      fields: [
        Kind('page'),
        TemplateKey('product-page'),
        StringField({
          name: 'title',
          label: 'Title'
        }),
        ImageField({
          name: 'image',
          label: 'Image'
        }),
        // HeadingField(),
        // DescriptionField(),
        // ObjectField({
        //   name:'intro',
        //   label:"Intro",
        //   fields:[
        //     HeadingField(),
        //     DescriptionField(),
        //     ListField({
        //       name:'blurbs',
        //       label:'Blurbs',
        //       fields:[
        //         Image(),
        //         TextField({
        //           name:'text',
        //           label:'Text'
        //         })
        //       ]
        //     })
        //   ]
        // }),
        // ObjectField({
        //   name:'main',
        //   label:'Main',
        //   fields:[
        //     HeadingField(),
        //     DescriptionField(),
        //     ImageField({
        //       name:'image1',
        //       label:'Image1'
        //     }),
        //     ImageField({
        //       name:'image',
        //       label:'Image'
        //     }),
        //     StringField({
        //       name:'alt',
        //       label:'Alt'
        //     }),
        //     ObjectField({
        //       name:'image2',
        //       label:'Image2',
        //       fields:[
        //         ImageField({
        //           name:'image',
        //           label:'Image'
        //         }),
        //         StringField({
        //           name:'alt',
        //           label:'Alt'
        //         })
        //       ]
        //     }),
        //     ObjectField({
        //       name:'image3',
        //       label:"Image3",
        //       fields:[
        //         ImageField({
        //           name:'image',
        //           label:'Image'
        //         }),
        //         StringField({
        //           name:'alt',
        //           label:'Alt'
        //         })
        //       ]
        //     })
        //   ]
        // }),
        // ListField({
        //   name:'testimonials',
        //   label:'Testimonials',
        //   fields:[
        //     StringField({
        //       name:'quote',
        //       label:'Quote'
        //     }),
        //     StringField({
        //       name:'author',
        //       label:"Author"
        //     })
        //   ]
        // }),
        ImageField({
          name: 'full_image',
          label: 'Full Image'
        }),
        // ObjectField({
        //   name:'pricing',
        //   label:'Pricing',
        //   fields:[
        //     HeadingField(),
        //     DescriptionField(),
        //     ListField({
        //       name:'plans',
        //       label:'Plans',
        //       fields:[
        //         StringField({
        //           name:'plan',
        //           label:'Plan'
        //         }),
        //         StringField({
        //           name:'price',
        //           label:'Price'
        //         }),
        //         DescriptionField(),
        //         ListField({
        //           name:'items',
        //           label:'Items'
        //         })
        //       ]
        //     })
        //   ]
        // })
      ]
    }
  ]
}
