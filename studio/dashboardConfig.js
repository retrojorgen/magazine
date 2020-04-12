export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e92cf85802adaac818bc826',
                  title: 'Sanity Studio',
                  name: 'magazine-studio',
                  apiId: 'ddf94df2-159a-41a2-91c3-4e0aeb031eac'
                },
                {
                  buildHookId: '5e92cf85f2fcfce6cf9cb782',
                  title: 'Landing pages Website',
                  name: 'magazine-web',
                  apiId: '4b7a6712-96e0-496a-a904-7280d1602a18'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/retrojorgen/magazine',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://magazine-web.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
