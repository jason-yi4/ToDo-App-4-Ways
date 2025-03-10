import os

'''
    CLI-based To-Do List

    Created by Jason Yi
'''

# list of tasks
tasks = []

# refreshes CLI with current information
def render():
    print('------To-Do-----')
    for task in tasks:
        print(f'[] {task}')
    


# app loop
while True:

    # clears terminal between iterations
    os.system('cls')


    userInput = input("What's next?\n[1] - Add a task\n[2] - Complete a task\n[3] - Remove a task\n[exit]\n>>> ")



    # breaks out of the loop and terminates the application
    if userInput.lower() == 'exit':
        break

    render()