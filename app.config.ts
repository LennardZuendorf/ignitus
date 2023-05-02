// @ts-ignore
export default defineAppConfig({
  alpine: {
    title: 'Ignitus',
    description: 'Personal project showcase',
    image: {
      src: '/social-card-preview.png',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300
    },
    logo: '/logo.svg',
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo.svg', // path of the logo
        pathDark: '/logo-dark.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'ignitr logo' // alt of the logo
      }
    },
    footer: {
      credits: {
        enabled: false, // possible value are : true | false
        repository: 'https://www.github.com/nuxt-themes/alpine' // our github repository
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: "find me at"// string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      mail:{
        icon: 'uil:envelope',
        label: 'Mail',
        href: 'mailto:lennard@zuendorf.me'
      },
      github: {
        icon: 'uil:github',
        label: 'GitHub',
        href: 'https://www.github.com/lennardzuendorf'
        },
      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/lennardzuendorf'
      }
    }
  }
})
