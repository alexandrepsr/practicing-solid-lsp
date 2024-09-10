import CreditCard from "./CreditCard";
import DebitCard from "./DebitCard";
import NubankCashback from "./NubanckCashback";

const credit = new CreditCard();
credit.validate();
credit.executePayment();

const debit = new DebitCard();
debit.validate();
debit.executePayment();

const cashback = new NubankCashback();
cashback.validate();
cashback.executePayment();
