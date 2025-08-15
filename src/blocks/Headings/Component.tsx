import React from 'react'

import type { HeadingsBlock as HeadingsBlockProps } from '@/payload-types'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'

export const HeadingsBlock: React.FC<HeadingsBlockProps> = ({ links, richText }) => {
  return (
    <div className="container">
      <div className="Heading">
        <div className=" flex items-center">
          {richText && <RichText className="mb-0" data={richText} enableGutter={false} />}
        </div>
        <div className="flex flex-col gap-8">
          {(links || []).map(({ link }, i) => {
            return <CMSLink key={i} size="lg" {...link} />
          })}
        </div>
      </div>
    </div>
  )
}
