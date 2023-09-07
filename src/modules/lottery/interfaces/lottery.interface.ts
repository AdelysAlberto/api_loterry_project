export interface ILottery {
  id: string;
  winningNumbers: number[];
  drawDate: Date;
  prize?: string;
  status?: string;
  createdAt?: Date;
}
