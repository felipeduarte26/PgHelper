import { BaseEntity } from '@entity'
import { TOrder } from './PgOrder'

export type TEntityObjectOrder<T extends BaseEntity> = {
  [P in keyof T]?: TOrder
}
