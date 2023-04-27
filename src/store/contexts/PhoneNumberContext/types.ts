export interface PhoneNumberContextStructure {
  phoneNumber: string[];
  addDigit: (number: string) => void;
}
