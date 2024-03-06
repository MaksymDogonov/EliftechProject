import { createSearchParams, useLocation, useNavigate } from 'react-router-dom'

export const useQueryParams = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const queryParams = Object.fromEntries(params)

    const setQueryParams = (newParams) => {
        const copyQueryParams = { ...queryParams }
        const searchParamStr = `?${createSearchParams({ ...copyQueryParams, ...newParams })}`
        if (location.search !== searchParamStr) {
            navigate({
                pathname: location.pathname,
                search: searchParamStr,
            })
        }
    }
    const removeQueryParam = (param) => {
        const currentParam = { ...queryParams }
        const paramsToRemove = Array.isArray(param) ? param : [param]
        paramsToRemove.forEach((item) => delete currentParam[item])
        navigate({
            pathname: location.pathname,
            search: `?${createSearchParams(currentParam)}`,
        })
    }
    return { queryParams, setQueryParams, removeQueryParam }
}