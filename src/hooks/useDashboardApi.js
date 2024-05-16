import { useEffect, useState } from "react";
import { getRequest } from "../axios";

export const useDashboardApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getDashboardData = async () => {
      setLoading(true);
      try {
        const response = await getRequest("/dashboard");
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getDashboardData();
  }, []);
  return { data, loading };
};
