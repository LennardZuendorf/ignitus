import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import experienceData from '@/data/experienceData'
import Experience from '@/components/Experience'
import * as PropTypes from 'prop-types'

Experience.propTypes = {
  text3: PropTypes.any,
  text1: PropTypes.any,
  text2: PropTypes.any,
  range: PropTypes.any,
  company: PropTypes.any,
  location: PropTypes.any,
  title: PropTypes.any,
  url: PropTypes.any,
}
export default function AuthorLayout({ children, content }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github, web } = content
  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            <Image
              src={avatar}
              alt="avatar"
              width={192}
              height={192}
              className="h-48 w-48 rounded-full"
            />
            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="web" href={web} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="twitter" href={twitter} />
            </div>
          </div>
          <div className="prose max-w-none pb-8 pt-8 dark:prose-dark xl:col-span-2">{children}</div>
        </div>
      </div>
      <div className="mt-10">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h2 className="mb-2 text-xl font-extrabold leading-11 tracking-tight text-slate-900 dark:text-slate-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
            Experience
          </h2>
        </div>
        <div className="max-w-none pb-8 pt-8 xl:col-span-2">
          {experienceData.map((d) => (
            <Experience
              key={d.company}
              title={d.title}
              company={d.company}
              location={d.location}
              range={d.range}
              url={d.url}
              text1={d.text1}
              text2={d.text2}
              text3={d.text3}
            />
          ))}
        </div>
      </div>
    </>
  )
}
