import IPayment from "./IPayment";

export default abstract class NubankCard implements IPayment {
  validate(): void {
    console.log("validate card");
  }
  executePayment(): void {
    console.log("execute payment");
  }
}
