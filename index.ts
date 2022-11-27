import {
  clusterApiUrl,
  Connection,
  Keypair,
  PublicKey,
  LAMPORTS_PER_SOL,
  SystemProgram,
  Transaction,
  sendAndConfirmTransaction,
} from "@solana/web3.js";
import {
  createMint,
  getOrCreateAssociatedTokenAccount,
  mintTo,
  transfer,
} from "@solana/spl-token";

require("dotenv").config();

const secret = JSON.parse(process.env.PRIVATE_KEY ?? "") as number[];
const secretKey = Uint8Array.from(secret);
const keypairFromSecretKey = Keypair.fromSecretKey(secretKey);

(async () => {
  // Connect to cluster
  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

  // Locate from wallet keys
  const fromWallet = keypairFromSecretKey;

  // To wallet pubkey
  const toWallet = new PublicKey(
    "HtUaVzWiSNrrY2NSVKroE3883vnBfn8SMrLM2UxA2vDy"
  );

  // Token address
  const tokenAddress = new PublicKey(
    "H4gmfC7956PG3v2SRcvpRhHj2d8YGcvjdaZKeXdJaFN4"
  );

  // Get the token account of the fromWallet address, and if it does not exist, create it
  const fromTokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    fromWallet,
    tokenAddress,
    fromWallet.publicKey
  );

  // Get the token account of the toWallet address, and if it does not exist, create it
  const toTokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    fromWallet,
    tokenAddress,
    toWallet
  );

  const transaction = new Transaction();

  const sendSolInstruction = SystemProgram.transfer({
    fromPubkey: fromWallet.publicKey,
    toPubkey: toWallet,
    lamports: LAMPORTS_PER_SOL * 0.1,
  });

  transaction.add(sendSolInstruction);

  const sig = await sendAndConfirmTransaction(connection, transaction, [
    keypairFromSecretKey,
  ]);
  console.log("sol mint tx:", sig);

  // Mint 1 new token to the "fromTokenAccount" account we just created
  let signature = await mintTo(
    connection,
    fromWallet,
    tokenAddress,
    fromTokenAccount.address,
    fromWallet.publicKey,
    1000000000
  );
  console.log("spl mint tx:", signature);

  // Transfer the new token to the "toTokenAccount" we just created
  signature = await transfer(
    connection,
    fromWallet,
    fromTokenAccount.address,
    toTokenAccount.address,
    fromWallet.publicKey,
    100000000
  );
})();
