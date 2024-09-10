export default interface IPayment {
  validate(): void;
  executePayment(): void;
}
