import { useContext, useEffect, useState } from 'react';
import { getACode } from '../../api';
import { AppContext } from '../../states/app.context';
import SingleVisit from '../Dashboard/CarePlan/SingleVisit';

const SingleCodeDetails = ({ data, title }: any) => {
  const { feeSchedule, defaultFS, selectedCode, setSelectedCode, setClientPlan, clientPlan } = useContext(AppContext);
  let catName = title;
  if (title === "Add Ons") {
    catName = "AddOns";
  } else if (title === "X-rays") {
    catName = "XRays";
  }
  const handleVisits = (e: any, co: any) => {
    setSelectedCode({
      ...selectedCode, [catName]: { ...selectedCode[catName], [co]: { ...selectedCode[catName][co], visits: e } }
    });
    setClientPlan({ ...clientPlan, carePlan: { ...clientPlan.carePlan, selectedCode } })
  }
  const [codeDetails, setCodeDetails] = useState<any>({});
  const gettingCodeDetails = async () => {
    const res = await getACode(data.id);
    setCodeDetails(res?.data?.code);
  };
  useEffect(() => {
    gettingCodeDetails();
  }, []);
  return (
    <tr>
      <SingleVisit key={data._id} code={data} item={catName} handleVisits={handleVisits} />
      <td>{codeDetails?.amount?.[feeSchedule] || codeDetails?.amount?.[defaultFS?._id]}</td>
    </tr>
  );
};

export default SingleCodeDetails;