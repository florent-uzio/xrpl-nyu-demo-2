import * as xrpl from "xrpl"

export type TxnOptions = { wallet: xrpl.Wallet; showLogs?: boolean; isMultisign?: boolean }
