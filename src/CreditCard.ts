import NubankCard from "./NubankCard";

export default class CreditCard extends NubankCard {
  validate(): void {
    console.log("Checking limit...");
    console.log("Checking balance...");
  }
}
