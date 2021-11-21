import { PublicKey, TransactionInstruction } from '@solana/web3.js';
import BN = require('bn.js');

export interface InstructionAndMetadata {
  instruction: TransactionInstruction[];
  expectedOut: BN[];
  tokenOuts: PublicKey[];
  mintOuts: PublicKey[];
}
