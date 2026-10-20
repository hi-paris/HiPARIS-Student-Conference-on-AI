---
layout: distill
title: "GREMLIN: Generating Random Environments for Meta-Learning with Interacting Networks"
description: "GREMLIN explores whether randomly parameterized neural environments can supply useful experience for learning a reinforcement learning algorithm. Training improves performance on the generated games and on some human-designed tasks compared with using the teacher's original random weights, but the resulting rule remains below DQN under the tested protocols."
date: 2026-10-16
future: true
_styles: |
  /* Anonymous review only: restore affiliations when adding authors after acceptance. */
  d-byline .authors-affiliations { grid-template-columns: 1fr; }
  d-byline .authors-affiliations > h3:nth-of-type(2),
  d-byline .authors-affiliations > .affiliation { display: none; }
  figure:has(img[src*="pipeline.svg"]) { width: 75%; margin-left: auto; margin-right: auto; }
  @page { size: A4; margin: 12mm; }
  @media print {
    html, body { min-width: 0 !important; width: auto !important; }
    d-title, d-byline, d-article, d-appendix, d-citation-list {
      display: block !important; width: auto !important;
      max-width: 100% !important; padding-left: 0 !important; padding-right: 0 !important;
    }
    d-article { font-size: 10pt !important; line-height: 1.45 !important; }
    d-title { padding-top: 0 !important; padding-bottom: 8pt !important; }
    d-title h1 { font-size: 24pt !important; }
    d-byline { padding-top: 8pt !important; padding-bottom: 8pt !important; }
    d-contents nav { columns: 2; }
    d-contents nav h3 { column-span: all; margin-top: 0 !important; }
    d-article h2, d-article h3 { margin-top: 16pt !important; margin-bottom: 8pt !important; }
    d-article figure { margin-top: 8pt !important; margin-bottom: 12pt !important; }
    d-article table { width: 100%; font-size: 8pt; }
    d-article pre { white-space: pre-wrap; overflow-wrap: anywhere; }
    progress, .progress-container, #bibtex-container, #back-to-top { display: none !important; }
    figure, tr, mjx-container { break-inside: avoid; }
    h2, h3 { break-after: avoid; }
    d-appendix { break-before: page !important; page-break-before: always !important; }
  }
authors:
  - name: Anonymous
bibliography: 2026-10-16-gremlin-random-environments.bib
toc:
  - name: Motivation and scope
  - name: DiscoRL and the research question
  - name: Random games with deliberate structure
  - name: From candidates to a training bank
  - name: Learning and testing the rule
  - name: Results
  - name: What remains unresolved
  - name: Reproducibility
  - name: Conclusion
---

## Motivation and scope

DiscoRL <a href="https://doi.org/10.1038/s41586-025-09761-x"><d-cite key="discorl"></d-cite></a>
learns reinforcement learning algorithms by training agents on a collection of
games. GREMLIN asks whether random neural networks could supply those games:
a potentially unlimited source of environments for learning how to learn.

We report an initial proof-of-concept study: **one learning rule trained on sixteen
selected random neural environments**. It improves learning on those games
relative to its historical initial configuration. On some human-designed games,
it also improves over the teacher's original random weights. It remains below DQN in mean
score on every tested human game.

Our budget did not permit repeated discoveries and controlled comparisons to
establish reliable feasibility. More compute could test whether competitive
general-purpose rules emerge, not guarantee it.

## DiscoRL and the research question

Ordinary algorithms prescribe how experience changes an agent's network.
DQN <a href="https://doi.org/10.1038/nature14236"><d-cite key="dqn"></d-cite></a>
trains estimates of future reward towards a reward-plus-next-state-value target.
DiscoRL instead learns a **teacher**: a neural rule that reads actions, rewards
and agent predictions, then produces desired action probabilities and prediction
outputs. Agent updates move outputs towards these targets. Differentiating
through those updates trains the teacher to increase agent reward. This outer
training is **discovery**, or meta-training.

The released Disco103 rule <a href="https://github.com/google-deepmind/disco_rl/tree/9059a29f7121d60948f25ef165e08e050e9399c8"><d-cite key="code"></d-cite></a>
was discovered across 103 human-designed games. Its weights stay fixed while
fresh agents learn, potentially with different observations, action counts and
architectures. We use that implementation and Disco103 as a reference;
GREMLIN starts from random teacher weights.

GREMLIN replaces human-designed games with random neural dynamics and rewards.
We use low-dimensional states and small dense agents: DiscoRL's image-based
meta-training with large convolutional agents was beyond our budget.

**Related work asks different questions.** Learned Policy Gradient (LPG)
<a href="https://proceedings.neurips.cc/paper/2020/hash/0b96d81f0494fde5428c7aea243c9157-Abstract.html"><d-cite key="lpg"></d-cite></a>
is an earlier method for learning an RL update rule from simple, human-specified
task families, including grid worlds, and transferring it to Atari. This is
a precedent for learning a transferable rule - not for our neural environment
generator. GREMLIN instead uses DiscoRL and samples the transition and reward
functions themselves as neural networks.

Procgen <a href="https://arxiv.org/abs/1912.01588"><d-cite key="procgen"></d-cite></a>
randomizes levels within human-designed games: the underlying rules remain
designed. GREMLIN randomizes those rules within a specified neural family.
Learned synthetic environments <a href="https://arxiv.org/abs/2202.02790"><d-cite key="synthetic"></d-cite></a>
are another distinct approach: their networks are optimized for target tasks,
whereas ours are sampled and screened, not fitted.

Our central question is: **does training the teacher on these generated games
make it better at teaching fresh agents to learn human-designed games?** We
first test the generated training games, then human tasks. DQN and Disco103
contextualize the gains; beating them is not this study's claim.

{% include figure.liquid
   path="assets/img/2026-10-16-gremlin-random-environments/pipeline.svg"
   alt="Random neural games are screened, sixteen games train a shared teacher, then the frozen teacher trains fresh agents on generated and human tasks."
   caption="Figure 1. GREMLIN workflow." %}

## Random games with deliberate structure

Each game has a state **s ∈ [−1,1]³²**, four discrete actions, and exactly
**128 steps per episode**. The observation is the state plus remaining time,
giving 33 inputs. This horizon limits how far consequences can extend;
longer episodes were not tested.

### Dynamics and sampling

Action a selects an eight-dimensional embedding eₐ. State, action embedding
and a fresh noise vector are projected separately into the first hidden layer:

$$
\begin{aligned}
\epsilon_t &\sim \mathcal N(0,I_{32}),\\
h_t^{(1)} &= \tanh(g_s W_s s_t + g_a W_a e_{a_t} + \sigma W_\epsilon\epsilon_t),\\
h_t^{(2)} &= \tanh(g_h W_h h_t^{(1)}),\\
u_t &= \tanh(W_o h_t^{(2)}),\\
s_{t+1} &= (1-\alpha)s_t+\alpha u_t.
\end{aligned}
$$

For every dynamics, strategy and outcome network, entries of a weight matrix
with n inputs are independently sampled as

$$
W_{ij}\sim\mathcal N(0,1/n).
$$

Bias terms are zero. Dividing each weight's variance by its input count keeps
wide layers from automatically producing larger signals. Each action is assigned
one fixed random vector of eight independent numbers drawn from N(0,1); this is
its *embedding*, looked up whenever that action is chosen. Gains are drawn once
per game. Log-uniform on [l,u] means sampling ln(x) uniformly, giving density
p(x) = k/x with k = 1/ln(u/l) within that interval. Equal multiplicative
intervals therefore have equal probability.

| Quantity | Distribution |
| --- | --- |
| Inertia coefficient α | Log-uniform on [1/16, 1] |
| State and hidden gains gₛ, gₕ | Each log-uniform on [0.5, 2] |
| Action gain gₐ | Log-uniform on [0.25, 4] |
| Noise gain σ | Zero with probability 0.75; otherwise log-uniform on [0.01, 0.1] |

Starting states are uniform in a game-specific box: its centre c has independent
coordinates uniform on [−0.5,0.5], and its shared half-width b is log-uniform on
[0.05,0.5].

### Reward: a random strategy and a random outcome

We construct a **strategy anchor** by sampling a 32→64→64→4 network
with tanh hidden layers. Its preferred action at each state is the one with the
largest output score (argmax). The anchor gives **zero reward** for
following that action and **−1 reward** otherwise.

Independently, an **outcome network** f has dimensions 32→64→64→1, with tanh
after every layer, including the output. It scores the next state. Both reward
networks use the same Gaussian weight law and zero biases specified above.
The reward received after choosing an action is

$$
r_t=\tfrac12 r_{\mathrm{anchor}}(s_t,a_t)+\tfrac12 f(s_{t+1}),
\qquad f(s_{t+1})\in[-1,1].
$$

Thus the total reward lies in [−1,0.5]. The outcome term can compensate for
anchor disagreement through the states subsequently reached, so the anchor
strategy is not guaranteed to maximize total return. We do not train either
reward network.

This deliberately designed family aims to provide a useful signal within our
budget. Rewards reading several past states and continuous actions remain
untested: we could not afford meta-training ablations of all alternatives.

## From candidates to a training bank

We want games in which learning can outperform simple action patterns. For
each candidate, we train Double DQN <a href="https://arxiv.org/abs/1509.06461"><d-cite key="double-dqn"></d-cite></a>
twice, with independent seeds, for 65,536 interactions per learner. The
references are the best of four constant actions and the best of sixteen
repeating action schedules, chosen using 64 calibration episodes.

Each learner is compared with both references on 64 additional episodes.
For each episode, we subtract the reference return from the learner return.
We repeatedly resample these 64 differences with replacement and compute their
mean. We keep a game only if
the 5th percentile of these means is positive for both learner seeds against
both references.

We examine candidates in fixed order until 48 pass, then select sixteen distinct
games in three successive groups. This retrospectively chosen mix aims to
provide a strong learning signal without relying on one ranking:

1. **Eight with the largest advantage over simple policies.** For each game,
   take the smallest mean gain across the two seeds and two references, and
   choose the eight highest values: a proxy for nontrivial learning, not
   intrinsic difficulty.
2. **Four that passed the strategy-anchor comparison.** Among
   the remaining forty, identify games where both Double-DQN seeds also beat
   the anchor strategy in total mixed-reward return, using the same
   resampling test. Sample four uniformly from qualifiers: games where reproducing
   the anchor leaves reward on the table.
3. **Four random remaining passes.** Sample four uniformly without replacement
   from the other thirty-six games, broadening the mix without claiming uniform
   coverage of game space.

We have not compared selectors through separate teacher-training runs.

## Learning and testing the rule

We follow DiscoRL's discovery procedure, with smaller agents and budgets
and explicitly recorded implementation conventions. **32 agents train in
parallel**; each is replaced after a sampled lifetime of 100k, 250k, 500k or 1M
agent - environment steps. DiscoRL likewise replaces learners, using lifetimes
of 20M, 50M, 100M or 200M steps.

We reduced these lifetimes primarily to fit the available discovery budget,
not because agents were known to converge within them.

For the generated games, the agent's shared network is
**33 inputs → 64 units (ReLU) → 64 units (linear)**. Two linear output layers
produce four action scores, converted to probabilities by softmax, and a
600-dimensional prediction vector trained using the teacher's targets.
These are learned auxiliary predictions, not a reconstruction of the 32 state
coordinates; 600 is the released DiscoRL setting.

A teacher round collects
experience, applies twenty differentiable learner updates using replay and
fresh trajectories, and computes the outer learning objective on a separate
trajectory batch. Per-agent Adam increments are averaged into one shared update.

The final evaluated teacher, **GREMLIN 1000**, is checkpoint 1000 of one
developmental training run, after **224,798,000
agent - environment steps**, excluding replay reuse. We freeze it and train fresh
agents for the comparisons below.

## Results

We compare the trained GREMLIN rule with its initialization, **Disco103** and
**DQN**. Here we focus on **final return**: the average episode score after a
fixed agent-training budget. Learning curves are also available in the data
package.

### The generated tasks supplied usable experience

We test all sixteen generated training games, with two independent agent seeds
per method and 282,800 agent steps per learner. Learned-rule agents sample
actions; DQN selects its highest-valued action. We also assess the fixed anchor
strategy under the complete mixed reward. It has access to the reward's
construction, so it is a reference policy, not another trained learner.

The final system improves mean final return on all sixteen games, not only the
eight top-ranked tasks. DQN remains ahead on every game: discovery
used the generated experience, but did not reach the performance of conventional
algorithms. GREMLIN's mean final return exceeds Disco103's on nine of sixteen
games. It exceeds the anchor on three games, compared with five for DQN and
two for Disco103. The anchor is a strong reference, not an optimal-performance bound.

To compare games without letting their different reward scales dominate, we
rescale scores separately within each game:

$$
\widetilde R_{m,e}=\frac{R_{m,e}-\overline R_{\mathrm{initial},e}}
{\overline R_{\mathrm{DQN},e}-\overline R_{\mathrm{initial},e}}.
$$

Overbars denote means over agent seeds. For Figure 2, we average the rescaled
scores equally across games in each selection group. DQN clearly outperforms
the anchor in the beyond-anchor group, as expected from its selection criterion.

{% include figure.liquid
   path="assets/img/2026-10-16-gremlin-random-environments/generated-groups.svg"
   alt="Final scores for three selection groups, comparing GREMLIN, Disco103, DQN and the fixed anchor after within-game rescaling."
   caption="Figure 2. Dots average both seeds and bars span the two seed-wise group means, not confidence intervals. Anchor bars instead reflect two sets of evaluation episodes with different starting states and transition-noise draws: this policy does not learn." %}

### Human-task gains exist, but are uneven and below DQN

We test the same four main methods on Acrobot and LunarLander using their native
state vectors, and on Breakout, Space Invaders, Qbert and Seaquest using RAM
observations. Each method has five independently initialized agents per game,
trained for 1M steps on Acrobot/LunarLander or 5M action decisions on Atari.
Final scores average 100 evaluation episodes per agent. Learned rules use
sampled actions and DQN is greedy, as in the generated comparison.

DiscoRL's published Atari evaluation <a href="https://doi.org/10.1038/s41586-025-09761-x"><d-cite key="discorl"></d-cite></a>
uses a large CNN and four image frames. Our single-vector, dense-agent tests
also differ in budgets, learning rates and replay. These differences
can contribute to lower Disco103 scores; architecture is not isolated as the cause.

**The improvement is not limited to the generated training games.** The clearest
examples are LunarLander and Seaquest: all five trained-rule agents exceed all
five initial-rule agents in final return.
On Space Invaders, three of five GREMLIN seeds score 270 to 284, exceeding
Disco103's best seed (269.3) and approaching DQN's mean (293.5). The other two
score only 21 and 31, pulling GREMLIN's mean down to 177.2.

**That improvement is selective and still incomplete.** Acrobot remains close
to failing every episode, while other Atari gains vary substantially between
agent initializations. The generated family may teach useful updates without
covering all the learning problems in these games; the missing ingredients
remain unidentified.

{% include figure.liquid
   path="assets/img/2026-10-16-gremlin-random-environments/human-endpoints.svg"
   alt="One final-performance plot for six human games. Initial teacher mean is zero and DQN mean is one within each game; points show five learners and diamonds show method means."
   caption="Figure 3. Final performance only, rescaled separately for each game with the same formula as Figure 2. Small points are five agent seeds; diamonds are means." %}

GREMLIN remains below DQN's mean final return on all six human tasks.
It is also below Disco103. This is improvement outside the discovery bank,
**not competitive transfer**. It motivates further training towards a stronger
rule, possibly beyond DQN, but the trend could plateau below it.

## What remains unresolved

**Task coverage.** Our games reward agreement with a state-dependent strategy
at every step, alongside a random state score, and reset after 128 steps.
Human episode limits are 500 steps for Acrobot, 1,000 for LunarLander and
27,000 action decisions for Atari; episodes can end earlier. This is a substantial
horizon mismatch with our 128-step games. Acrobot requires building momentum over several swings before reaching
a goal that ends its per-step penalty. Atari may require survival or a sequence
of actions before reward. Our family may lack examples where apparently
unhelpful actions pay off much later. That coverage remains unmeasured.

**Training and agent capacity.** The teacher itself may learn slowly or
unstably. Separately, applying a useful rule with an unsuitable agent learning
rate or insufficient agent capacity can limit performance. Our results do not
separate these explanations from limitations of the generated games.

**Agent lifetimes.** Our short lifetimes may be a major limitation, favouring
rapid initial improvement over learning to reach higher eventual performance.
Increasing them is a high-priority experiment: longer lifetimes would expose
the teacher to later stages of agent learning. A comparison at equal total
agent steps, with the same games, teacher initialization and other settings,
would test this possibility. This differs from extending the 128-step episodes
or simply training the teacher for longer.

In particular, a rule might improve from random initialization towards basic
competence without surpassing conventional algorithms. This informal
“regularization” interpretation is plausible, not an established training phase.

Our next focus is the **designed task distribution**. Without meta-training
ablations, we cannot attribute success to the anchor, selection or inertia.
Richer environments could help or make discovery harder: this proof of concept
does not establish that scaling the present design will work.

An important future comparison is breadth versus repetition: with the same
total agent steps, is it better to revisit a small fixed bank or keep supplying
new games?

Finally, one teacher and six human games cannot establish discovery robustness
or broad coverage. More agent seeds do not substitute for independently trained
teachers.

## Reproducibility

The [reproduction package](https://github.com/octavegg/gremlin-reproduction)
contains per-agent results, scripts to rebuild the figures, saved environments
and teacher weights, evaluation code, and the numerical meta-learning
implementation. Its method record specifies the generator, historical training
schedule and assessment settings.

Our retained run used 224.8M agent steps over about 77 controller-active hours
with eight A5000 workers, approximately **616 GPU-hours** as an allocation-time
proxy. Disco57 used 1,024 TPUv3 cores for 64 hours (**65,536 TPU-core-hours**);
Disco103 used 2,048 cores for 60 hours (**122,880 TPU-core-hours**)
<a href="https://doi.org/10.1038/s41586-025-09761-x"><d-cite key="discorl"></d-cite></a>.
The paper places Disco57's best rule at approximately 600M reported steps per
Atari game - 34.2 billion across 57 games - but does not provide an equally clear
total for Disco103. Step conventions and model costs differ.

These TPU allocations represent substantially greater aggregate compute capacity,
with specialized matrix hardware and a high-bandwidth interconnect,
than our eight workstation GPUs.
Our shared-machine execution also incurred synchronization, checkpoint-transfer
and recovery overhead, with interruptions when machines became unavailable.
Thus similar elapsed training times conceal very different available resources;
GPU-hours and TPU-core-hours are not equivalent units. We do not infer a measured
compute ratio or attribute the performance gap to budget alone.
Our time proxy includes replay computation and synchronization during retained
work, but excludes offline periods, abandoned work and other project experiments.

## Conclusion

**Deliberately structured random
neural games supplied experience from which a more useful learning rule
emerged in this run, including improvements on some human tasks**. Whether
this route can produce a competitive general rule remains open.
