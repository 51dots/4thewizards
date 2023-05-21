# 4thewizards


Characters/Units:
I would of course start with a spreadsheet (later convert it to little json files to put on chain)  and build a database  then define abilities of the characters or units participating in combat (health, attack power, defense, speed, and any special abilities or spells)
Battle State: 
Add a data structure or class to represent the state of the battle. It should keep track of the turn order, the current active character, the health and status of each character, and any other relevant information
Actions: 
Define the possible actions a character can take during their turn, such as attacking, using skills or spells, defending, or using items. Each action may have different effects on the target(s) and consume resources like mana or stamina.
Turn Order:
Implement a mechanism to determine the order in which characters take their turns. This can be based on their speed attribute or a predefined sequence.
User Interface:
Create a user interface to display the battle state, show available actions, and allow the player to select actions for their characters. This can include menus, buttons, health bars, and visual effects to enhance the combat experience
AI (Optional if PvE is wanted):
If you want computer-controlled opponents, design an AI system that determines the actions of enemy characters. The AI can make decisions based on factors like enemy health, available skills, and current battle conditions
