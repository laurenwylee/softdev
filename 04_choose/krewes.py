'''
JKL: Jeremy Kwok, Kevin Li, Lauren Lee
SoftDev
Dictionaries and randomly accessing values
2022-09-22
time spent: .75 hours (in-class time)
DISCO
    - Typecasting something into an int is done by int(<thing you want to typecast>)
    - list() can take a dictionary parameter and return a list of keys
    - rng.choice() takes a list parameter and returns a random value in the list
    - dict.keys and dict.values return a view object, and you can't access the values in a view object using an index (ex: krewes.keys()[0] doesn't work)
QCC
    - Dictionaries are kinda like 2d arrays except the other dimension can have variables of another data type
OPS SUMMARY
    Randint:
    - Get a list of the keys in krewes
    - Take the value at a random index from 0 to 2 of the list of keys
    - Use that key to access the corresponding list and then return the devo at a random index from 0 to 1 less than the length of the list
    Random:
    - Same as above but using .random and typecasting instead of randint
    Choice:
    - use .choice on the list of keys
    - use .choice on the list corresponding to that key
'''
import random as rng
krewes = {2:['rlau','hwang'], 7:['jkwok','kli', 'llee'], 8:['shaque', 'sching']}

def choose():
    #using randint
    #keys = list(krewes)
    #period = rng.randint(0,len(keys))
    #devo = rng.randint(0, len(krewes[period]))
    #return [krewes[period][devo]] #fix the list thing

    #using random
    keys = list(krewes)
    period = krewes[keys[int(rng.random()*2)]]
    devo = period[int(rng.random()*len(period))]
    return devo

    #using choice
    #period = rng.choice([2,7,8]) #choose a random key
    #devo = rng.choice(krewes[period]) #choose a random index of the list that corresponds with the chosen key
    #return devo

    #return rng.choice(krewes[rng.choice([2,7,8])])

print(choose())
#print(krewes[0])
