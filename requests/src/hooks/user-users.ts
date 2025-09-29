import { useQuery } from "@tanstack/react-query"
import type { User } from "../models/user"
import { fetcher } from "../helpers/api"


export default function useUsers() {

    const querryKey = '/users'

    const { data, isLoading } = useQuery<User[]>({
        queryKey: querryKey.split("/"),
        queryFn: () => fetcher("/users")
    })

    return {
        users: data || [],
        isLoadingUsers: isLoading
    }
}