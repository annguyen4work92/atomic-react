import ContentWrapper from 'components/organisms/content'
import HeaderWrapper from 'components/organisms/header'
import StandardTemplate from 'components/templates/standard'
import { useUserFetcher } from 'hooks/api-fetch/useUserFetcher'
import React from 'react'

interface IListUserPage {
  name?: string
}

const ListUserPage: React.FC<IListUserPage> = () => {
  const { dataSource } = useUserFetcher()
  console.log(dataSource)

  const memoContent = React.useMemo(
    () => <ContentWrapper>{'Here is the content overrided'}</ContentWrapper>,
    []
  )

  const memoHeader = React.useMemo(
    () => <HeaderWrapper>{'Here is the header overrided'}</HeaderWrapper>,
    []
  )

  return (
    <StandardTemplate
      templateContent={memoContent}
      templateFooter={<>{'I am footer'}</>}
      templateHeader={memoHeader}
      templateSideBar={<>{'Bo may la sidebar'}</>}
    />
  )
}

export default ListUserPage
