import { useMemo } from "react"

export const useSort = (sort, users) => {

  const sortedUsers =  useMemo(() => {

    if(sort){
      return [...users].sort((a,b) => a[sort].localeCompare(b[sort]))
    }
    return users

  }, [sort, users])
  return sortedUsers
}

export const useSearchAndSort = (sort, users, search) => {

  const sortedUsers = useSort(sort, users)
  const searchAndSortUsers = useMemo(() => {
    return sortedUsers.filter(s => s.name.toLowerCase().includes(search))
  }, [search, sortedUsers])
  return searchAndSortUsers
}