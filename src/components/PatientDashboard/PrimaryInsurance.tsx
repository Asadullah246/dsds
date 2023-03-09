import { Input, InputNumber, notification } from "antd";
import Title from "antd/lib/typography/Title";
import { useEffect, useState } from "react";
import { findInsurance } from "../../api";

export const PrimaryInsurance = ({ data, type }: any) => {
  const [insurance, setInsurance] = useState<any>();
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    const res = await findInsurance(data);
    // console.log(res)
    // console.log(res.data.insurance);
    if (res.status === 200) {
      setInsurance(res.data.insurance);
      // console.log(res.data.insurance);
    }
    else {
      notification["error"]({
        message: "Something went wrong!",
        description: ""
      })
    }
setLoading(false);
  }
  useEffect(() => {
    loadData();
  }, [])
  if(loading) return <h2>Loading..</h2>
  return (
    <div>
      <Title level={3}>{type}</Title>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="companyName">Insurance Company</label>
            </td>
            <td>
              <Input style={{ width: "150px" }} type="text" name="company" value={insurance?.company} id="company" />
              <Input style={{ width: "150px" }} type="text" name="company" value={insurance?.company} id="company" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="effectiveDate">Effective Date</label>
            </td>
            <td>
              <Input
                style={{ width: "150px" }}
                type="text"
                value={new Date(insurance?.effective_date).toDateString()}
                readOnly
                name="effective_date"
                id="effective_date"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="expirationDate">Expiration Date</label>
            </td>
            <td>
              <Input
                style={{ width: "150px" }}
                type="text"
                value={new Date(insurance?.expiration_date).toDateString()}
                name="expiration_date"
                id="expirationDate"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="individualDeductable">Individual Deductable</label>
            </td>
            <td>
              <InputNumber
                style={{ width: "150px" }}
                name="individual_deductable"
                defaultValue={insurance?.individual_deductable}
                id="individualDeductable"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="individualDeductableMet">Individual Deductable Met</label>
            </td>
            <td>
              <InputNumber
                style={{ width: "150px" }}
                defaultValue={insurance?.individual_deductable_Met}
                name="individual_deductable_Met"
                id="individualDeductableMet"
              />
            </td>
            <span>Deductable Left: ${insurance?.individual_deductable - insurance?.individual_deductable_Met}</span>
          </tr>
          <tr>
            <td>
              <label htmlFor="familyDeductable">Family Deductable</label>
            </td>
            <td>
              <InputNumber
                style={{ width: "150px" }}
                defaultValue={insurance?.family_deductable}
                name="family_deductable"
                id="familyDeductable"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="familyDeductableMet">Family Deductable Met</label>
            </td>
            <td>
              <InputNumber
                style={{ width: "150px" }}
                defaultValue={insurance?.family_deductable_Met}
                name="family_deductable_Met"
                id="familyDeductableMet"
                readOnly
              />
            </td>
            <span>Family Deductable Left: ${insurance?.family_deductable - insurance?.family_deductable_Met}</span>
          </tr>
          <tr>
            <td>
              <label htmlFor="start_meeting_deductable">Do visits start while meeting the deductable</label>
            </td>
            <td>
              <span>{insurance?.start_meeting_deductable}</span>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="optionsForBenefits">Benefits based on</label>
            </td>
            <td>
              <select name="benefitsBaase" defaultValue={insurance?.benefitsBase?.type} id="optionsForBenefits">
                <option value="Benefit">Benefit Year</option>
                <option value="Calendar">Calendar Year</option>
              </select>
              {insurance?.benefitsBase?.type === "Benefit" && (
                <Input
                  style={{ width: "150px" }}
                  value={new Date(insurance?.benefitsBase?.date || new Date()).toDateString()}
                />
              )}
            </td>
          </tr>
          <tr>
            <td>Number of Visits allowed</td>
            <td>
              <InputNumber
                style={{ width: "150px" }}
                min={0}
                defaultValue={insurance?.visits_allowed}
                name="visits_allowed"
                id="visits_allowed"
              />
            </td>
          </tr>
          <tr>
            <td>Number of Visits used</td>
            <td>
              <InputNumber
                style={{ width: "150px" }}
                min={0}
                defaultValue={insurance?.visits_used}
                name="visits_used"
                id="visits_used"
              />
            </td>
            Visits left: {insurance?.visits_allowed - insurance?.visits_used}
          </tr>
          <tr>
            <td>Allowed Percentage</td>
            <td>
              <InputNumber
                style={{ width: "150px" }}
                min={0}
                defaultValue={insurance?.allowed_percentage}
                name="allowed_percentage"
                id="allowed_percentage"
              />
            </td>
          </tr>
          <tr>
            <td>Amount Max per visit</td>
            <td>
              <InputNumber
                style={{ width: "150px" }}
                min={0}
                defaultValue={insurance?.amount_max_per_visit}
                name="amount_max_per_visit"
                id="amount_max_per_visit"
              />
            </td>
          </tr>
          <tr>
            <td>Visit Co Pay</td>
            <td>
              <select name="visit_co_pay" disabled defaultValue={insurance?.visit_co_pay} id="visit_co_pay">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Exam Co Pay</td>
            <td>
              <select name="exam_co_pay" disabled defaultValue={insurance?.exam_co_pay} id="exam_co_pay">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Co - Insurance</td>
            <td>
              <select name="co_insurance" disabled defaultValue={insurance?.co_insurance} id="co_insurance">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="xrayCoverage">X-ray coverage</label>
            </td>
            <td>
              <select name="x_ray_coverage" defaultValue={insurance?.x_ray_coverage} id="xrayCoverage">
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="n/a">Not Applicable</option>
              </select>
            </td>
          </tr>
          {insurance?.x_ray_coverage === "yes" && (
            <tr>
              <td>X-ray Percent coverage</td>
              <td>
                <InputNumber
                  style={{ width: "150px" }}
                  min={0}
                  defaultValue={insurance?.x_ray_percent_coverage}
                  readOnly
                  name="x_ray_percent_coverage"
                  id="x_ray_percent_coverage"
                />
              </td>
            </tr>
          )}
          <tr>
            <td>
              <label htmlFor="xrayDeductable">X-rays subject to deductable</label>
            </td>
            <td>
              <select
                name="x_rays_subject_to_deductable"
                defaultValue={insurance?.x_rays_subject_to_deductable}
                id="xrayDeductable"
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
