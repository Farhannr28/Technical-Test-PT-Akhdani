export interface PerdinData {
    id: number,
    from: string,
    to: string,
    date_from: string,
    date_until: string,
    duration: number,
    description: string,
    status: StatusEnum,
}

export enum StatusEnum {
  APPROVED = "APPROVED",
  PENDING = "PENDING",
  REJECTED = "REJECTED"
}