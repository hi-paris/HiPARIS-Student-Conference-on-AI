---
layout: distill
title: Fewer kilometres, more driver time? An accounting audit of backhaul matching
description: An exact small synthetic routing study shows why saving distance does not guarantee less counted driver time. Complete-system comparisons include all waste jobs and residual collection.
date: 2026-04-28
future: true
authors:
- name: Anonymous
bibliography: 2026-04-28-distance-is-not-driver-time.bib
toc:
- name: Abstract
- name: 1. Why an empty truck is not a free truck
- name: 2. Established problems, limited contribution
- name: 3. Synthetic model and comparison boundary
- name: 4. What duty means here
- name: 5. Exact small-instance method
- name: 6. A route that saves distance and adds work
- name: 7. Paired results
- name: 8. Why the baseline still matters
- name: 9. Reproducibility and checks
- name: 10. What this study cannot decide
---

## Abstract
A delivery truck heading back empty has room to carry a waste pickup. It sounds like free transport. It is not always: the truck can save kilometres while the drivers, added together, work longer. We built a small synthetic backhaul model, loosely inspired by construction-waste collection, to make that trade visible. Every comparison serves all the jobs and counts both the returning trucks and whatever collection routes remain. We run an exact distance-minimizing calculation, then a version that refuses any plan where total driver duty goes up, then one that also caps each delivery driver's added time at 60 minutes. On 20 fixed test cases, chasing distance alone saves a mean 3.94% of distance, but in three cases total duty rises. Forbidding a duty increase keeps a 3.74% mean saving. The 60-minute cap leaves 1.74%. These are mean within-instance percentages over invented cases, not measured savings or estimates for France. In one case we reconstructed route by route, the match saves 8.72 toy km while adding 50.13 duty minutes. What we offer is a small, inspectable accounting example and code that reproduces it. No new routing algorithm, no compensation mechanism, no validated deployment.

## 1. Why an empty truck is not a free truck
The idea sounds obvious. A delivery truck finishes its rounds and drives back empty; a construction site has waste that needs to reach a recycler. Put the waste on the truck and a collection trip disappears. Except the pickup and the recycler are usually not on the way home. Loading, unloading and waiting take time. And the dedicated collector who would have taken that waste might have combined it with other jobs nearby, so cancelling one pickup does not always cancel a whole trip.

So before anyone claims savings, two questions need answers. What would the collection system have done without the match? And whose work gets counted afterwards? Most backhaul pitches report the truck's load factor, or the distance of one cancelled trip. We count the whole system instead.

The business idea behind this project involves plasterboard waste. The experiment here is new, synthetic and much narrower: it is not an analysis of anyone's real operations. There are no customer routes in it, no measured driver acceptance, no checked vehicle compatibility, no pilot. Its only job is to expose one evaluation mistake: improving one number for the whole system does not mean every number improves, or that every carrier comes out ahead.

The central example is small enough to check by hand. A distance-optimal plan takes one job away from the ordinary collection routes. The returning driver gains more than an hour of extra work; the collectors save less than that. Total travel falls and total working time rises. A second run of the optimizer can refuse that trade. Whether a real operator should refuse it is a question about prices, employment arrangements and service promises, none of which exist in this model.

## 2. Established problems, limited contribution
Backhaul routing is old research. Jacobs-Blecha and Goetschalckx wrote about vehicle routing with deliveries and pickups, capacity restrictions and delivery-before-pickup structure <d-cite key="jacobs1992"></d-cite>. Our setting differs in a few specific ways: the delivery leg is already fixed, each returning truck can take at most one waste job, and the waste passes through a separate recycler before the truck goes home. We did not reimplement their algorithm and we do not claim to have invented backhaul matching.

Construction and demolition waste has been studied too, through multi-depot collaborative routing with time windows and economic, environmental and social objectives. Chen and Liao's model is one example <d-cite key="chen2022"></d-cite>. Nothing in it calibrates our toy experiment, and we do not borrow its savings numbers for a French plasterboard application.

Carrier cooperation and incentives are well worn ground as well. Los and colleagues study large-scale collaborative routing with auctions and individual rationality <d-cite key="los2022"></d-cite>, including why exchanging orders in bundles can matter when isolated exchanges do not help. Our model is centralized, with no auctions and no private information. A cap on added driver time is not their individual-rationality guarantee: a driver can still end up worse off under the cap, and nobody gets paid in this model.

So what is left to contribute? Something modest: an accounting audit. We attach explicit residual-collection accounting to a distance/duty comparison, keep the full tradeoff set for a tiny model instead of only the winner, and show one concrete case where reading distance alone goes wrong. We claim no new optimization method and no general empirical finding. Existing routing software, such as the OR-Tools pickup-and-delivery tutorial <d-cite key="googlepickup"></d-cite>, is the natural home for serious implementations; it is not our solver and not our benchmark.

## 3. Synthetic model and comparison boundary
Each base instance has ten returning delivery trucks and ten waste jobs. Truck delivery endpoints and home depots sit uniformly at random in a 40-by-40 toy square. A truck becomes available somewhere between minute zero and minute 90, carries between one and five assumed tonnes of spare capacity, and has a binary compatibility flag that is true with probability 0.8. That flag is our stand-in for "this truck may carry this waste". It is not a legal or technical certification of anything.

Jobs sit in a 20-by-20 square centered at (20,20). Their weights are uniform between 0.5 and 2.5 assumed tonnes. Earliest service times fall between minutes 30 and 120, and service must start within the following 120 minutes. Travel is Euclidean distance at a constant 30 toy km/h. A pickup takes 15 minutes and unloading at the recycler another 15. Every route finishes by minute 480. We chose these numbers to make a workable generator. They do not describe a mapped region or a fitted operating schedule.

The collector starts from (5,5), visits one or more jobs, unloads at the recycler at (35,5), and returns to the collector depot. Payload is six tonnes. Collector routes can run in parallel with no finite fleet limit, and each route takes at most six jobs. In the 20 base seeds the seven lightest jobs already weigh more than six tonnes together, so every payload-feasible route size really is included. We checked that certificate on those inputs and do not assume it for other seeds.

A returning truck can visit one job, unload at the recycler and go home, provided spare payload, compatibility, the service-start window and the common horizon all hold, and the added distance over its direct return stays under 20 toy km. One job per truck, because collectors can batch and our trucks cannot. Every job is served exactly once, by a returning truck or by a collector.

The reference system serves every job by collection routes and sends every delivery truck directly home. It minimizes collector distance, with counted duty used to break distance ties. The joint system picks return-truck matches and reoptimizes collection over whatever jobs are left. Both systems include the direct return distance of every truck. Delivery work done before availability is held fixed and cancels. Neither system is allowed to earn a saving by dropping a job.

## 4. What duty means here
Counted duty is driving, pickup handling, recycler unloading and waiting that happens after a route starts. Delivery duty begins when the truck becomes available; its direct return provides the reference. A collector can depart at or after minute zero, and for each collector route we take the minimum elapsed duty and the earliest departure that achieves it.

That departure rule deserves a paragraph. Force every collector to leave at minute zero and you charge it for waiting it could have skipped before a late pickup window. Let it leave later and that arbitrary penalty disappears, but you have quietly assumed that staff and vehicles can be scheduled for exactly those departures, with no paid idle time, no mobilization cost and no other work pushed aside. Counted duty is therefore not payroll, not total paid labour and not a full-day fleet schedule.

Summed duty adds these route durations across all vehicles. It is not the longest shift, a headcount, a wage bill, legal driving time or a fairness score. Delivery work completed before availability is absent. Collectors are not linked from one trip to the next. There are no recycler queues, no breaks, no uncertain traffic. Within the boundary just stated it gives an internally consistent comparison, and that is all it gives.

We compare three rules. Distance-only takes the minimum total distance and breaks ties by summed duty. No-duty-increase takes the shortest plan whose summed duty does not exceed the reference. A third rule adds an upper bound of 60 minutes on each matched delivery driver's added duty. Sixty minutes is an illustration, not evidence that any driver would accept it. Waiting and handling count toward it.

## 5. Exact small-instance method
Take any subset of waste jobs. Enumerate the payload-feasible collector orders, check the timing, and keep the nondominated pairs of distance and duty, where one pair dominates another if it is no worse on either quantity and strictly better on at least one. The collector dynamic program partitions the remaining jobs into feasible routes and retains their nondominated summed labels.

A second dynamic program walks through the delivery trucks one at a time. Its state records the set of jobs already assigned. At each truck it either skips the truck or assigns one compatible, feasible, unserved job. When the individual time allowance applies, transitions that would break it are filtered out here. Each delivery-assignment label is then combined with the collector labels for exactly the complementary set of jobs, and direct return distance and time are added to get complete-system totals.

Why keep frontiers instead of just the shortest collector route? Because a slightly longer route can have lower duty, and once the duty constraint arrives, that route may permit the best feasible plan. So we retain distance/duty frontiers at the route, partition and truck-assignment stages. Pruning by dominance is valid here because costs add and future feasibility depends only on the processed truck index and the served-job set. Shared queues, limited reusable fleets or linked shifts would all need more state.

To be clear about what this is: a standard exact multiobjective dynamic program for a restricted, tiny problem. Not a scalable dispatch service. Enumerating route orders grows rapidly, and exactness refers to the feasible set we defined, not every realistic plan. Doing nothing is always feasible, so nonnegative distance savings and nonincreasing duty under the corresponding constraints are guaranteed by design. That is a property of the construction, not an empirical discovery.

## 6. A route that saves distance and adds work
Base seed 1 is the case to look at. Separate collection plus direct returns totals 496.28 toy km and 1,187.55 counted duty minutes. Distance-only planning matches delivery truck 0 to job 5. Complete-system distance falls to 487.56 toy km, but duty rises to 1,237.68 minutes.

The ledger is the interesting part. The matched delivery driver works 110.80 extra minutes relative to a direct return. Reoptimizing the residual collection avoids 60.67 collector minutes. Net change: 50.13 more minutes of work, in exchange for 8.72 fewer toy km. Whether the driver would accept that deal, and whether the distance saving pays for the time, are questions this model does not answer.

The exact no-duty-increase rule looks at the same trade and declines it; it returns the reference plan. Nothing forces it to rescue the match. Every value and route in this example is regenerated from the saved seed, service times and payload checks included. We selected the case after examining the results because it exposes the accounting issue. Treat it as an illustration, not an independently sampled test of how often the issue occurs.


{% include figure.liquid path="assets/img/2026-04-28-distance-is-not-driver-time/counterexample.png" caption="Base seed 1. Same jobs, full-system totals. Distance falls while counted duty rises. Toy units only; different units in the two panels." %}

## 7. Paired results
The main audit runs every rule over the same 20 base seeds. Distance-only planning gives a 3.94% mean within-instance distance saving. It raises summed duty in 3 of the 20 instances even though its mean duty change is a 1.79% reduction. An average improvement conceals cases going the other way.

Adding the no-duty-increase constraint yields a 3.74% mean distance saving and a 2.35% mean duty reduction. Eight of twenty instances have positive distance savings; the others simply keep the reference plan. Adding the 60-minute individual limit leaves a 1.74% mean distance saving and a 1.36% mean duty reduction, with positive distance saving in four instances. The table reports paired summaries over the same instances, not a ratio computed from the mean distances.

| Rule | Mean distance saving | Mean duty saving | Cases with duty increase |
|:--|--:|--:|--:|
| Distance only | 3.94% | 1.79% | 3 / 20 |
| No total-duty increase | 3.74% | 2.35% | 0 / 20, constrained |
| Also limit individual added duty to 60 min | 1.74% | 1.36% | 0 / 20, constrained |

As a separate fixed-seed check we ran seeds 100-199. With no-duty-increase, mean distance savings are 3.97%, positive in 38 of 100 cases. With the individual limit they are 2.25%, positive in 21. These seeds had already been used in earlier sensitivity work on this project, so they are additional fixed inputs, not an untouched holdout for a question chosen later. Their six-job collector cap is retained without claiming that the payload-completeness certificate from the base seeds covers them.

All of these summaries describe the generator. We do not give a population confidence interval for French transport, and the seed-setting combinations are not independent operators. The audit shows that the effect exists and that it is sensitive to the rules. It does not estimate how common the effect is in any market.

## 8. Why the baseline still matters
Before the duty analysis we ran distance-only tests in which ordinary collectors could take one, two or three pickups per trip. On the same 20 base seeds, mean joint savings were 10.26%, 4.33% and 9.26% respectively. Let collectors take six pickups and the saving falls to 3.94%. The apparent benefit of matching depends strongly on what the ordinary collection system can already do, and on these finite instances it is not even monotone in the pickup cap.

The job-count tests show why the cap-three peak should not be generalized. With nine jobs, mean savings for collector caps two, three and four were 9.63%, 2.49% and 5.98%; with eleven jobs they were 9.13%, 4.16% and 3.49%. Demand, the discreteness of route counts and the truck-to-job ratio all move at once, so read this as a structural diagnosis rather than an isolated causal estimate. A fixed ten-job toy can make one particular grouping unusually easy to eliminate.

Giving each returning truck two pickups instead of one changes things too. Earlier distance-only checks raised mean savings from 3.94% to 6.28% against cap-six collection on the original base seeds. That extension is deliberately not folded into the duty audit. It expands the feasible set and underlines how much the one-pickup assumption matters; it does not establish that two pickups per truck is practical. The full sensitivity outputs stay separate so that the main story stays about explicit accounting, not a search for the largest percentage.

## 9. Reproducibility and checks
The focused code keeps the generator, the complete solver, route reconstruction, summaries and the selected-case ledger. The code, tests and outputs behind every number in this post are in the accompanying public repository: https://github.com/annabelledg17/empty-return-backhaul/tree/main/backhaul-duty-audit-repo. A clean rerun needs Python, NumPy and SciPy, and results are deterministic for the listed seeds.

Timing was checked against an independent linear-program formulation on 550 eligible route orders, looking at feasibility and minimum elapsed duty. Small complete assignments and collector partitions were exhaustively enumerated for 60 scalar-objective comparisons. Forty full-size distance regressions agree with the earlier distance solver. Forty complete distance/duty frontiers, across small instances and both individual-limit settings, agree with exhaustive enumeration. Route verification checks coverage, duplicate truck use, distances, capacity and timing.

These tests say the implementation is internally consistent. They say nothing about empirical validity, and some of them share route-generation code, so a shared error could survive them. The implementation, tests, analysis and draft were built with extensive AI assistance. An earlier critique from a second AI prompted the structural checks; it was not an external expert review. Before any of this is released, the human authors need to review the claims, understand the method and confirm that the way the work was made is permitted.

## 10. What this study cannot decide
No road network, traffic distribution, recycler queue, legal waste classification, cleaning cost or vehicle authorization is measured here. A binary compatibility flag cannot stand in for those checks. Unlimited parallel collectors and flexible departures omit staffing constraints; the individual time cap omits compensation and bargaining. A positive summed result cannot establish individual rationality or operational acceptance.

If someone wanted to test this properly, the next step would be a permissioned paired route study: record the actual reference collection plan, fixed delivery commitments, road travel times, handling and waiting, payload eligibility, and who pays for extra work. Then compare complete feasible plans for the same jobs, including the matches that get rejected. That would test whether the toy's accounting boundary is useful, rather than replacing straight lines with a map and calling the result realistic.

The conclusion is narrow but checkable. Filling a returning truck is not, by itself, a benefit to the system. Even a complete-system distance optimum can add counted driver time. A transparent ledger, a defensible reference plan and explicit constraints make that trade visible. The exact percentages belong to this model. The reusable lesson is to state what is saved, what is added, and who bears it.
