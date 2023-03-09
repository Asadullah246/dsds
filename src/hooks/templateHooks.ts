import { CodeBreakdown } from "../utils/calculatePay";
import { Data } from "../utils/interface";

export const replaceData = (text: any, patient: any, placeHolderData: Data, codesBreakdown: CodeBreakdown) => {
    // const { progressExam, progressXray, foamRoller, denneRoll } = {};
    console.log(codesBreakdown, 'break down')
    console.log(patient)
    Object.keys(placeHolderData).forEach(key => {
        text = text.replaceAll(key, placeHolderData[key]);
    })
    // text = text.replaceAll("{totalVisit}", placeHolderData["{totalVisit}"]);
    // text = text.replaceAll("{totalCost}", cost.totalCost);
    text = text.replaceAll("{patientName}", patient.firstName + " " + patient.lastName);
    const adjustmentsBreakdownData = codesBreakdown?.adjustments?.map(item => {
        return `${item.code} default cost => ${item.quantity} @ $${item.defaultAmount} = $${item.defaultCost} <br />
            ${item.code} careplan cost => ${item.quantity} @ $${item.careplanAmount} = $${item.careplanCost}
        `;
    })
    text = text.replaceAll("{adjustmentsBreakdown}", adjustmentsBreakdownData);
    const examBreakdownData = codesBreakdown?.exams?.map(item => {
        return `${item.code} default cost => ${item.quantity} @ $${item.defaultAmount} = $${item.defaultCost} <br />
            ${item.code} careplan cost => ${item.quantity} @ $${item.careplanAmount} = $${item.careplanCost} <br />
        `;
    })
    text = text.replaceAll("{examsBreakdown}", examBreakdownData);
    const xraysBreakdownData = codesBreakdown?.xrays?.map(item => {
        return `${item.code} default cost => ${item.quantity} @ $${item.defaultAmount} = $${item.defaultCost} <br />
            ${item.code} careplan cost => ${item.quantity} @ $${item.careplanAmount} = $${item.careplanCost} <br />
        `;
    })
    text = text.replaceAll("{xraysBreakdown}", xraysBreakdownData);
    const addonsBreakdownData = codesBreakdown?.addOns?.map(item => {
        return `${item.code} default cost => ${item.quantity} @ $${item.defaultAmount} = $${item.defaultCost} <br />
            ${item.code} careplan cost => ${item.quantity} @ $${item.careplanAmount} = $${item.careplanCost} <br />
        `;
    })
    text = text.replaceAll("{addonsBreakdown}", addonsBreakdownData);
    const therapiesBreakdownData = codesBreakdown?.therapies?.map(item => {
        return `${item.code} default cost => ${item.quantity} @ $${item.defaultAmount} = $${item.defaultCost} <br />
            ${item.code} careplan cost => ${item.quantity} @ $${item.careplanAmount} = $${item.careplanCost} <br />
        `;
    })
    text = text.replaceAll("{therapiesBreakdown}", therapiesBreakdownData);
    text = text.replaceAll("{currentDate}", new Date().getDate());
    text = text.replaceAll("{currentMonth}", new Date().getMonth() + 1);
    text = text.replaceAll("{currentYear}", new Date().getFullYear());
    return text;
}

/*
    {totalVisit} @ {adjustmentCost} = {totalAdjustmentCost}
    {progreessExam} @ {examCost} = {progreessExam * cost}

*/ 