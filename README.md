# Talent Payment Calculator

A simple JS calculator to determine how much a talent gets from each performance.

## Usage

It simply takes into account the following:

1. Total Payment
1. Total Talent(s)
1. Total Manager(s) and their payments
1. Logistics and Other costs

After that, the Total Payment is split as follows:

1. Each Manager's Payment = Each Manager's Payment
1. Each Talent's Payment = (Total Payment - (Total Manager(s) * Each Manager's Payment)) * 65% / Total Talent(s)
1. Managing Company's Profit = (Total Payment - (Total Manager(s) * Each Manager's Payment)) * 35%

## Demo

Can be used [here](https://zaimramlan.github.io/js-talent-payment-calculator)
