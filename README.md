
Bank Tech Test
=================

* Today, you'll practice doing a tech test.
* For most tech tests, you'll essentially have unlimited time. This practice session is about producing the best code you can when there is a minimal time pressure.
* You'll get to practice your OO design and TDD skills.
* You'll work alone, and you'll also review your own code so you can practice reflecting on and improving your own work.

## Specification

Requirements

* You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)

* Deposits, withdrawal.

* Account statement (date, amount, balance) printing.

* Data can be kept in memory (it doesn't need to be stored to a database or anything)


## Acceptance criteria

Given a client makes a deposit of 1000 on 10-01-2023
And a deposit of 2000 on 13-01-2023
And a withdrawal of 500 on 14-01-2023
When she prints her bank statement
Then she would see

date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00


## User stories

As a client,
So I can save and spend money,
I need to have a bank account.

As a client,
So I can check how much money I have to spend,
I need to have a bank balance.

As a client,
So I can spend money,
I first need to deposit money into my bank account.

As a client,
So I can spend money,
I need to make withdrawals from my bank account.

As a client,
So I can check my transactions match what my bank has recorded,
I need to see a printed bank statement.

As a client,
So I can review my bank statement efficiently,
Transactions should be listed by date, with the newest first.
