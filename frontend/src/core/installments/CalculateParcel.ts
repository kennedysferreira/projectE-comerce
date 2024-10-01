import { MAX_INSTALLMENTS, TAXA_INTEREST_MOUTH } from "../constants";
import Installments from "./Installments";

export default class CalculateParcel {
  execute(
    totalValue: number,
    totalInstallments: number = MAX_INSTALLMENTS,
    taxaInterest: number = TAXA_INTEREST_MOUTH
  ): Installments {
    if (totalInstallments < 2 || totalInstallments > MAX_INSTALLMENTS) {
      throw new Error("Invalid number of installments");
    }

    const totalWithInterest = this.calculateInterest(
      totalValue,
      totalInstallments,
      taxaInterest
    );

    return {
      priceInstallment: this.withTwoDecimals(
        totalWithInterest / totalInstallments
      ),
      totalValue: this.withTwoDecimals(totalWithInterest),
      totalInstallments,
      taxaInterest,
    };
  }
  private calculateInterest(
    totalValue: number,
    totalInstallments: number,
    taxaInterest: number
  ): number {
    return totalValue * Math.pow(1 + taxaInterest, totalInstallments);
  }

  private withTwoDecimals(value: number): number {
    return Math.round(value * 100) / 100;
  }
}
