## Gotta catch 'em all! Pokemon

We're going to build a Pokemon game where trainers can fight other trainers with their Pokemon to become the Greatest Pokemon Master of all time!


### Release 0 : Pokemon and Trainers 
To start the game, we will need Trainers and Pokemon. 

Trainer have the following attributes 
- Name 
- Type : Dragon/Electric/Fire/Grass/Water - This is randomly assigned
- Points 

Pokemon have the following attributes
- Name 
- Type : Dragon/Electric/Fire/Grass/Water - Refer the [PokemonDB](http://www.pokemongodb.net/2016/04/pokemon-go-types.html) to get various types of Pokemon. You could also use the [PokeAPI](https://pokeapi.co/) to seed your data (Its like Faker but a bit more complex). A GET to the url `http://pokeapi.co/api/v2/type/dragon` will get you an object where the key `pokemon` has all Dragon type Pokemon listed. Each trainer must have at lease one Pokemon of their Type and the rest 4 are randomly assigned.
- HP : HP is health power and should be a random number between 100-150
- Attack Moves : Each pokemon has 3 types of attacks:
        - Basic
        - Intermediate
        - Advanced
        
All pokemon types have pre-defined attacks
 
 |Pokemon Type|Basic Attack Name | Intermediate Attack Name | Advanced Attack Name |
 |------- |------- |-------|-------|
 |Dragon | Fire Fang | Outrage | Inferno |
 |Electric | Electrify | Thunder | Shock Wave |
 |Fire | Blast Burn | Fusion Flare | Magma Storm |
 |Grass | Frenzy Plant | Grassy Terrain | Mega Drain |
 |Water | Bubble | Aqua Jet | Hydro Vortex |
 
Each trainer will have 5 pokemon that are randomly assigned to them.

### Release 1 : Fight Logic 
- A Match is between 2 Trainers.
- A Fight is between 2 Pokemons. 
- The Fight starts with a random Pokemon picked up from each Trainer's set of Pokemon i.e. 5 pokemon.
- Randomly select which Trainer goes first. The selected Pokemon of that Trainer1(say Ash) will use an attack followed by the selected Pokemon of Trainer2(say Misty) attacking followed by Ash's Pokemon attacking and so on and so forth till the Fight ends. Then we move on to the next Fight
- One Pokemon fights with another till one of them gets defeated i.e. their HP <= 0
- A pokemon can use the types of attacks the following number of times:
  
  | Attack Type | Allowance in Fight |
  |-----|-----|
   | Basic | Infinite |
   | Intermediate | 3 |
   | Advanced | 1 | 
   
   Note: Advanced attacks cannot be used if the HP of Pokemon reduces to less than half of the initial HP.
   
- As soon as a Pokemon loses i.e. `HP <= 0`, it is replaced by another Pokemon from the Trainer's set.
- Repeat the above till one Trainer runs out of Pokemon. That trainer loses the Match.

The damage that attacks of Pokemon cause are as follows: 

The *table* below is only for `BASIC` attacks, `Intermediate` attacks are +5 of Basic Attacks, `Advance` attacks are +10 of Intermediate Attacks

|   | Dragon | Fire | Water | Grass | Electric |
|-----|-----|----|----|----|-----|
|Dragon | 2|5 |3 | 5 | 1 |
|Fire | 10| 3 | 4 | 8 | 9|
|Water | 12| 1 |2 |8 | 6|
|Grass | 11 |6 |7 | 2 |5|
|Electric | 14|1 |1 |5| 9|


e.g. An attack used by Fire Pokemon on Water Pokemon will cause the Water Pokemon to lose **4** HP.
    An atttack by Water Pokemon on Fire Pokemon will cause the Fire Pokemon to lose **1** HP.



### Release2  : Game Flow 
The game starts with asking the user to input the number of Trainers for the Tournament. Create those many Trainers with **5** Pokemons for each Trainer.

Gameplay works as follows: 
- Tournament Structure will be [Round Robin](https://en.wikipedia.org/wiki/Round-robin_tournament)
    - Round Robin is when all teams in a tournament play each other
    - For e.g. If we have a tournament with 4 Trainers : A, B, C, D; the Round Robin Tournament matches schedule will be as follows: 
    
          - A vs B 
          - A vs C 
          - A vs D
          - B vs C
          - B vs D 
          - C vs D


- First move of each fight will be decided by a seed random toss.
- Each Match will have one winner. The winning Trainer of each Match gets 50 points. 

Let's say we have a Tournament between 5 Trainers. The first Match is between Ash who has Pikachu which is an Electric Pokemon and Misty who has Squirtle which is Water Pokemon. The output for the Tournament will be as follows on console:

```
Pokemon Series start with 5 trainers.
***************************************************
1. Match starts between Ash & Misty
***************************************************
Ash wins the toss
***************************************************
Ash chooses Pikachu (HP:120)
Misty chooses Squirtle (HP:110)
***************************************************
Pikachu uses Thunder attack . It causes 6 HP damage to Squirtle.
Pikachu HP : 120
Squirtle HP : 94
Squirtle uses Bubble Attack. It causes 6 HP damage to Pikachu
Pikachu HP : 114
Squirtle HP: 94
....
....
....
....
Pickachu HP: 8
Squirtle HP: -4
***************************************************
Pickachu wins over Squirtle!
***************************************************
Misty switches Squirtle with <XYZ> to fight with Ash's Pikachu
**************************************************
Pikachu uses Thunder attack . It causes 6 HP damage to <XYZ>.
Pikachu HP : 8
<XYZ> HP : 84
<XYZ> uses <ABC> Attack. It causes 6 HP damage to Pikachu
Pikachu HP : 2
Squirtle HP: 84
....
....
....
....
Pickachu HP: -4
Squirtle HP: 84
***************************************************
..................
..................
..................
<AND SO ON>
..................
..................
..................
***************************************************
Ash wins the Fight. Ash gets 50 points.
---------------------------------------------------
---------------------------------------------------
---------------------------------------------------
2. Fight starts between Ash & Jocob

~~~~~~~~~~~~~~~~ & same as above ~~~~~~~~~~~~~~~~~~
Ash wins the Tournament with 5000 points
```
