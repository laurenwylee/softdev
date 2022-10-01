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

occupation = open("occupations.csv").read() #reading the csv file into a string

occupation = occupation.split("\n") #split each new line 
occupation.pop(0) #delete the heading
occupation.pop(len(occupation)-1) #delete the extra empty line
total = occupation.pop(len(occupation)-1) #delete the total of the values and store value

#create dictionary
jobs = {}
for x in occupation:
    job = x.rsplit(",", 1)
    jobs[job[0]] = job[1]
    
vals = list(jobs.values())
#convert the values into floats
for x in range(0, len(vals)):
    vals[x] = float(vals[x])

def choose():
    #order dictionary in descending order of values
    vals.sort(reverse = True)
    sort_jobs = {}
    for x in vals:
        for key in jobs:
            if float(jobs[key]) == x:
                sort_jobs[key] = x
                del jobs[key]
                break

    #identify the total of all the values         
    sum = total.split(",")
    sum = float(sum[1])
    #generate a random number from 1 to the total
    random = round(rng.uniform(1,sum),1)
    
    #continue to subtract from largest to smallest values from the rand val until <= 0
    #key of the last value to be subtracted is the outputed occupation!
    ret_val = ""
    for key in sort_jobs:
        random = random - sort_jobs[key]
        if random <= 0 :
            return key
    return ret_val

print(choose())