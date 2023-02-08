import React from "react";

import ArrowLink from '@/components/links/ArrowLink';

export default function RulesContent({
  nextPageText,
  nextPageURL,
  pageTitle
}) {
  return (

<div>
  <h1>The Bell Hack: {pageTitle}</h1>
  <div className='flex flex-wrap gap-5 content-center'>
    <ArrowLink direction='left' className='mt-2' href='/'>
      Back to Home
    </ArrowLink>
    <ArrowLink direction='right' className='mt-2' href={nextPageURL}>
      {nextPageText}
    </ArrowLink>
  </div>
</div>

  )
}
