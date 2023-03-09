import { Col, Row } from "antd";
import { useContext } from "react";
import { addPrimaryInsurance, addSecondaryInsurance } from "../api";
import NewInsurance from "../components/PatientDashboard/NewInsurance";
import { PrimaryInsurance } from "../components/PatientDashboard/PrimaryInsurance";
import { AppContext } from "../states/app.context";

export const Insurance = () => {
  const {  patient } = useContext(AppContext);

  if (patient?.primaryInsurance) {
    return (
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <PrimaryInsurance
            type="Primary Insurance"
            data={patient.primaryInsurance}
          />
        </Col>
        {patient?.secondaryInsurance ? (
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <PrimaryInsurance
              type="Secondary Insurance"
              data={patient?.secondaryInsurance}
            />
          </Col>
        ) : (
          <NewInsurance addInsurance={addSecondaryInsurance} />
        )}
      </Row>
    );
  }
  return <NewInsurance addInsurance={addPrimaryInsurance} />;
};
