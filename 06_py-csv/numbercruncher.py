'''
wille -- Lauren Lee & Marc Jiang
SoftDev
k06: StI/O: Divine your Destiny!
2022-10-1
time spent: 0.5 hr

DISCO:
- random.choices() can automatically choose based on a desired probability as opposed to 
- we don't need to order the values of the dictionary for our algorithm to work 
- rsplit() splits from right
- rng.uniform() generates random float between an interval 

QCC
- whats the best way to test?

HOW THIS SCRIPT WORKS
-This script works by randomly generating a value from 0 to the total odds of each job. 
We then subtract the chances of each job starting from the top of the csv to the bottom from the randomly generated value until it reaches 0 or below. 
-The job that corresponds to the value that made the randomly generated value 0 or below is the job that is selected 
'''
import random as rng

occupation = open("test.csv").read() #reading the csv file into a string

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
    sort_jobs = {}
    sort_jobs = jobs

    #identify the total of all the values         
    sum = total.split(",")
    sum = float(sum[1])
    #generate a random number from 1 to the total
    random = round(rng.uniform(1,sum),1)
    
    #continue to subtract from largest to smallest values from the rand val until <= 0
    #key of the last value to be subtracted is the outputed occupation!
    ret_val = ""
    for key in sort_jobs:
        random = random - float(sort_jobs[key])
        if random <= 0 :
            return key
    return ret_val

print(choose())