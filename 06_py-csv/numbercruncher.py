'''
wille -- Lauren Lee & Marc Jiang
SoftDev
k06: StI/O: Divine your Destiny!
2022-09-29
time spent:  hr

DISCO:

QCC
 
HOW THIS SCRIPT WORKS

'''
import random as rng

occupation = open("occupations.csv").read()
#print(occupation)

occupation = occupation.split("\n")
occupation.pop(0)
occupation.pop(len(occupation)-1)
occupation.pop(len(occupation)-1)

jobs = {}
for x in occupation:
    if x.contains(", "):
        x.split()
    job = x.split(",")
    jobs[job[0]] = job[1]

def choose():
    vals = list(jobs.values())
    for x in vals:
        x = float(x)
    return rng.choices(list(jobs), weights = val)
#print(choose())

print(jobs)
print(jobs.values())