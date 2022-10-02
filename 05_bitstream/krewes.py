'''
wille -- Lauren Lee & Marc Jiang
SoftDev
Refactor Krewes to Read File
2022-09-28
time spent: 0.8 hr

DISCO:
* use open() to return the file in a file object
* use read() to read contents of file into a string
* set values to key by syntax dict[key]
QCC
* if we want to make the devo name the name of a array with the ducky inside the array, how would we do that?
* is there a pretty way to generalize our algorithm so we don't have to initialize the arrays for each period
  
OPS SUMMARY
    mkDict:
    - read your file into a string
    - split string by @@@ to split into each person
    - split each person by $$$ to split into pd, devo, ducky
    - add the information into the dictionary
    Choice:
    - use .choice on the list of keys
    - use .choice on the list corresponding to that key
'''
import random as rng

def mk_dict():
    krewes = open("krewes.txt").read() #read file into a string
    people = krewes.split("@@@") #splits string by each person

    #creates the dictionary
    class_list = {}
    class_list[2] = []
    class_list[7] = []
    class_list[8] = []

    for x in people:
        attributes = x.split('$$$') ##splits each person into their pd, name, and ducky
        class_list[int(attributes.pop(0))].append(attributes) #append person and their ducky to right period

    return class_list

def choose():
    #using choice
    krewes = mk_dict()

    period = rng.choice(list(krewes)) #choose a random key
    devo = rng.choice(krewes[period]) #choose a random index of the list that corresponds with the chosen key
    

    output = devo[0] + " and their ducky " + devo[1] + " from period " + str(period)
    return output

print("DICTIONARY ----------------------------------------")
print(mk_dict())

for i in range(15):
    print(choose())