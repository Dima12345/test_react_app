import useSWR from "swr";
import {fetcher} from "../api";

const API_URL = 'http://0.0.0.0:3000'

export const useEmployees = () => {
  const { data, error, isLoading } = useSWR(`${API_URL}/v1/employees`, fetcher)

  return {
    employees: data?.data,
    isLoading,
    isError: error
  }
}
