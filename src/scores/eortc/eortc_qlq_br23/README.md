# EORTC QLQ-BR23

## What is this?

The **EORTC QLQ-BR23** is a questionnaire given to **breast cancer patients**. It measures how the disease and its treatment affect their daily life and wellbeing — not how sick they are medically, but how they *feel*.

It was created in **1996** by the European Organisation for Research and Treatment of Cancer (EORTC) and is one of the most widely used breast cancer quality-of-life tools in the world.

---

## The questionnaire

The patient answers **23 questions** about how they felt in the past week. Each answer is:

| Number | Meaning |
|--------|---------|
| 1 | Not at all |
| 2 | A little |
| 3 | Quite a bit |
| 4 | Very much |

---

## The 8 scores

The 23 questions are grouped into **8 scores**. Each score is a number from **0 to 100**.

| Score | Name | Questions used | Type |
|-------|------|---------------|------|
| BRBI | Body image | Q9, Q10, Q11, Q12 | Functional |
| BRSEF | Sexual functioning | Q14, Q15 | Functional |
| BRSEE | Sexual enjoyment | Q16 | Functional |
| BRFU | Future perspective | Q13 | Functional |
| BRST | Systemic therapy side effects | Q1, Q2, Q3, Q4, Q6, Q7, Q8 | Symptom |
| BRBS | Breast symptoms | Q20, Q21, Q22, Q23 | Symptom |
| BRAS | Arm symptoms | Q17, Q18, Q19 | Symptom |
| BRHL | Upset by hair loss | Q5 | Symptom |

**How to read the scores:**
- **Functional scores** (BRBI, BRSEF, BRSEE, BRFU): **100 = best**, 0 = worst
- **Symptom scores** (BRST, BRBS, BRAS, BRHL): **0 = best**, 100 = worst

---

## How the math works

### Step 1 — Average the answers in each group

```
average = sum of answers / number of questions in the group
```

### Step 2 — Convert to 0–100 scale

**For Functional scores:**
```
score = (1 - (average - 1) / 3) × 100
```

**For Symptom scores:**
```
score = ((average - 1) / 3) × 100
```

---

## Special rules

### Reverse scoring (Q14, Q15, Q16)

These 3 questions are worded differently — a high answer means *healthy*, not sick. So before doing the math, flip the answer:

```
flipped = 5 - original answer

Example: patient answered 4 → use 1 in the calculation
```

### Not applicable scores

| Score | Condition | Result |
|-------|-----------|--------|
| BRSEE (Sexual enjoyment) | If Q15 = 1 (patient is not sexually active) | null |
| BRHL (Upset by hair loss) | If Q4 = 1 (patient had no hair loss) | null |

`null` means the score does not apply to this patient — the doctor sees a dash instead of a number.

---

## Example calculation

Patient answers for **Arm symptoms** (Q17=2, Q18=1, Q19=3):

```
average = (2 + 1 + 3) / 3 = 2

symptom score = ((2 - 1) / 3) × 100 = 33.3
```

**BRAS = 33.3** — the patient has mild arm symptoms.

---

## References

[1] Sprangers MA, et al. The European Organization for Research and Treatment of Cancer breast cancer-specific quality-of-life questionnaire module: first results from a three-country field study. *J Clin Oncol.* 1996;14(10):2756-68.

[2] Bjelic-Radisic V, et al. An international update of the EORTC questionnaire for assessing quality of life in breast cancer patients: EORTC QLQ-BR45. *Ann Oncol.* 2020;31(2):283-288.
