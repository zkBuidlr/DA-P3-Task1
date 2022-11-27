# Phase 3 - Intro to Solana Web3 Development

In this phase the focus will be on understanding basic concepts in solana development and getting familiar with some of the most frequently used packages.

## Note-
* We will be using __DEVNET__ throughout this guide.
* If you are not able to access any of the links, try using an incognito window.

## 1-
Read upon and understand about the [account structure](https://medium.com/@lianxiongdi/a-deep-dive-into-solana-account-model-1-introduction-7b0408656593) of solana blockchain. Also explore the [solana cookbook](https://solanacookbook.com/#contributing), it provides a lot of info which you will find handy.

## 2-
Using CLI perform the following-
* Create a [file wallet](https://medium.com/@lianxiongdi/solana-development-1-basic-operation-of-solana-cli-dcf156137e6).
* Airdrop yourself Sol.
`https://solscan.io/tx/4KqxzDddBkZcPJNcBKZiRvo2AFGngw1cttZBpDamRknvGYpTgXfQPRtGKmHP29mPKxBsCNWnieebj8MGUnJyHNtZ?cluster=devnet`

* Create a [spl-token](https://medium.com/@lianxiongdi/a-deep-dive-into-solana-account-model-2-spl-token-d029d97aa6e0).
`https://solscan.io/tx/3kt51LFZreQo1W98e6qQWehZtUw1XQqTHjjdfUvtQF5ZscU5MdfKXVb9nPocUGrvXk1N4v9QMSHBfMeR1wDsg6K3?cluster=devnet`

* Create [associated-token-account](https://medium.com/@lianxiongdi/a-deep-dive-into-solana-account-model-3-associated-token-account-60a7655bec03) for the token you created.
`https://solscan.io/tx/5vNr4HWyywRd3ihzC9wAkxSxk4oHxCc8tCLhv5ZkquBL1X1nrRocUuvK8KKpgU3pjgZYPeKNEfC6RHaLWUHokFdP?cluster=devnet`

* Transfer some sol and token to a second wallet.
`https://solscan.io/tx/2LfPaiVULQHQAobQzHCxPLLbqKjo5aSzbUPpLfwLja74KiPS8fxiXExdWjGn6JqQs3Xux8JjK7zm71R6FR8eHtH6?cluster=devnet`

## Try answering the following questions
* Difference between public and private key.

`A public key allows you to receive cryptocurrency transactions. It's a cryptographic code that's paired to a private key.`

* What is a transaction, instruction in solana and how are they related?

`Program execution begins with a transaction being submitted to the cluster. The Solana runtime will execute a program to process each of the instructions contained in the transaction, in order, and atomically.`

* How does ATA’s differ from token accounts?

`Before the user can receive tokens, their associated token account must be created on-chain, requiring a small amount of SOL to mark the account as rent-exempt.`


## 3-
**For this week the task is to create a `nodejs` project which is to be submitted.**
In the project create a `new transaction`.
For the project make use of `keypair` from a file wallet you have made.

## 4-
Add `instructions` to perform the following to the `transaction` you created-

* Send 0.1 sol to the given wallet.
`https://explorer.solana.com/tx/3Evoz3KMXvn4nUU5vjzvgnuEhMqjTKS1KP8LW8zXi2Y3S22iuXRSqpudox88Vcxu4r4yiSVBoVVCB4P44h1egZae?cluster=devnet`
* Create ATA for any one token you have created for this wallet.
`https://explorer.solana.com/address/CQNnBknRNxQmGEpNsSbnPYpitxZah6Rv4tGGCqBYn2Th?cluster=devnet`
* Transfer 0.1 of that token to the wallet.
`https://explorer.solana.com/tx/QnF6VD23Fen3vQTeUw2DVbbMMxDeirqRZ9rb9vCBgK2CoYbtCu734P9RyG7YkXdgfZ9zE7izrxkGLkq7CXgGPS1?cluster=devnet`

Wallet : `HtUaVzWiSNrrY2NSVKroE3883vnBfn8SMrLM2UxA2vDy`
