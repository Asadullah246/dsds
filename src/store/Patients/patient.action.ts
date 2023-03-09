import { IInsurance, IUser } from '../../types';
import patientActionTypes from './patient.action.types';

export const loadPatients = (patients: IUser[]) =>{
  return {type: patientActionTypes.LOAD_PATIENTS , payload: patients};
}

export const selectPatient = (patient: IUser) => {
  return {type: patientActionTypes.SELECT_PATIENT, payload: patient};
}

export const setInsurance = (insurance: IInsurance) => {
  console.log(insurance, 'insurance')
  return {type: patientActionTypes.SET_INSURANCE, payload: insurance};
}