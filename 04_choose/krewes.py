'''
JKL: Jeremy Kwok, Kevin Li, Lauren Lee
SoftDev

'''
import random as rng
krewes = {2:['a','b','c'], 7:['y','z'], 8:['j', 'k', 'l']}

def choose():
    #using randint
    keys = list(krewes)
    period = rng.randint(0,len(keys))
    devo = rng.randint(0, len(krewes[period]))
    return [krewes[period][devo]]
    #using random


    #using choice
    #period = rng.choice([2,7,8]) #choose a random key
    #devo = rng.choice(krewes[period]) #choose a random index of the list that corresponds with the chosen key
    #return devo

    #return rng.choice(krewes[rng.choice([2,7,8])])

print(choose())
#print(krewes[0])