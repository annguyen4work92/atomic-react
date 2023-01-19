import { EndPoint, getApiUrl } from 'configs'
import React from 'react'
import { useHttpProvider } from 'hooks/base'

export interface IUserType {
  userId: number
  id: number
  title: string
  completed: boolean
}

export const useUserFetcher = () => {
  const [dataSource, setDataSource] = React.useState<IUserType[]>([])
  const { httpProvider } = useHttpProvider()

  const execute = async () => {
    const res = await httpProvider.get<IUserType[]>(
      getApiUrl(EndPoint.GetList)
    )
    setDataSource(res.data as IUserType[])
    return res.data;
  }

  React.useEffect(() => {
    execute()
  }, [])

  return {
    dataSource,
    fetchUser: execute
  }
}
