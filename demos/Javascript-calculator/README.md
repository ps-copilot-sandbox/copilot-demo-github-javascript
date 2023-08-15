# Getting started - Javascript Calculator - Visual Studio Code

Welcome to GitHub Copilot! What will be the best way to see the power of Copilot? Let's start with a simple application that everyone is familiar with, a Calculator created in Javascript. We will only
focus on the 4 main operations for a calculator: ```+, -, /, x```. By leveraging GitHub Copilot Chat, we will have a conversation with Copilot and have it handle all of the logic for us.

Although you can use any supported editor for Copilot like Visual Studio Code, Visual Studio IDE, NeoVim, and IntelliJ, we will use Visual Studio Code for this demo.

## Prerequisites

- [Copilot Extension for Visual Studio Code](https://code.visualstudio.com/download)
- [Copilot Chat Extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat)

## Steps

Welcome! In this starting Copilot demo for **Getting started - Javascript Calculator - Visual Studio Code**, we will create a Calculator very quickly and iterate over this application with a few additional prompts.

![Let's Begin!](/demos/Javascript-calculator/images/jetpack.png)

### Step 1: Open Visual Studio Code and open GitHub Copilot Chat

Open Visual Studio Code and navigate to primary location of your GitHub Copilot chat, by default it is on the right but you may have moved it somewhere else. Make sure that your GitHub Copilot is enabled and turned on. 
![Let's Setup!](/demos/Javascript-calculator/images/Where.png)

Your Visual Studio Code should look like this. We are now ready to write some code through GitHub Copilot.
![Ready!](/demos/Javascript-calculator/images/Chat.png)

### Step 2: Ask GitHub Copilot Chat for assistance

In the GitHub Copilot Chat text box, provide the following prompt to ilicit the help from GitHub Copilot ```Can you give me the code for a standard calculator written in Javascript?```. As you can see below, Copilot Chat will provide the code for you to text in the chat. 

![Copilot Creation!](/demos/Javascript-calculator/images/create.png)

You have 2 options of getting the code into your project. 

#### Option 1:
By clicking on the code that was generated and hovering over the top right corner, you can press the copy button to add it to your clipboard for easy pasting. Simply create the type of file you need to work with in your project and paste the generated code there.  

![Copy](/demos/Javascript-calculator/images/copy.png)

For this example, if we chose Option 1 we would need to create 3 files, calculator.html, calculator.js, and calculator.css. We would then paste the 3 respective generated pieces of code frmo GitHub Copilot Chat into each of the files. 

#### Option 2:
If you select Option 2, click into the code that was generated and hover over the top right corner once more. This time press the middle button labaled ```Insert at cursor```. This pastes the generated code into whatever file was open in your project at your mouse's location.

![Insert](/demos/Javascript-calculator/images/insert.png)

### Step 3: Let's run it and see what happens

Open your local directory and locate the project that you are working out of. 

![Local](/demos/Javascript-calculator/images/local.png)

Double click on the ```calculator.html``` file and allow it to open in your current browser.

![Setup](/demos/Javascript-calculator/images/setup.png)

Enter in a few numbers and perform an operation. For this example we will do 2 multiplied by 4 and are expecting 8.

![Working](/demos/Javascript-calculator/images/working.png)

### Step 4: Further Iterations

Now that you have a working version of the Application. Feel free to iterate on it with any prompt that you would like. We have added a few below to provide some inspiration as to what is possible with Copilot.

> "Copilot, can we make it prettier?"

> "Copilot, can we add additional operations?"

And my personal favorite, which will be our next lesson:
> "Copilot, can you show me how to add unit tests to this application?"

### Troubleshooting
There may be times where the calculator app does not work for a handful of reasons. Please review the below recommendations and hopefully it can unblock you:

- Often for this example, if copilot created 3 seperate files for the html, css, and javascript, theres a chance it places the source to the javascript file in the wrong location.

- If the application refreshes and does not calculate when pressing the calculate button, your best bet is to restart the prompt and ask it in entirely new verbiage for the same thing. Try to change as many words as possible in the prompt in an attempt to populate new code.
