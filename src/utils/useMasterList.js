import { useEffect, useState } from "react";
import { baseApi } from "../api/baseApi";
import { endPoints } from "../api/endPoints";
const useMasterList = () => {
  const [masterList, setMasterList] = useState(null);
  useEffect(() => {
    const fetchMasters = async () => {
      const data = await fetch(baseApi + endPoints.masterApi);
      const res = await data.json();
      setMasterList(res);
    };
    fetchMasters();
  }, []);

  return masterList;
};

export default useMasterList;
