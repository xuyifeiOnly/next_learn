import { proxy, useSnapshot } from 'valtio'

export const stateValtio = proxy({ count: 0, text: 'hello' })
