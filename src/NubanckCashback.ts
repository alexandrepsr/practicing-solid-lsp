import IPayment from "./IPayment";

export default class NubankCashback implements IPayment {
  validate(): void {
    console.log("Checking cashback balance");
  }

  executePayment(): void {
    console.log("Withdrawl from cashback balance");
  }
}
