javascript:(
/* Dedicated to God the Father */
/* All Rights Reserved Copyright 2000-2023 Christopher Topalian */
/* https://github.com/ChristopherTopalian */
/*Robot AI - Random Responses every time to keywords and phrases and variations of keywords and phrases found. Other random response when no keywords are found - and Calculations */
function()
{
    /* if keyword is found, use these responses */
    let responses =
    [
        {
            keywords: ["hi", "howdy", "hey"],
            responses: ["Howdy", "Hi there", "Hi"]
        },
        {
            keywords: ["weather", "forecast", "sunny", "cloudy"],
            responses: ["It's a beautiful day.", "The weather is very nice.", "It's sunny and warm."]
        },
        {
            keywords: ["how are you", "what's up", "what are you up to?"],
            responses: ["I'm doing good, you?", "Having fun and you?", "I'm good, how about you?"]
        },
        {
            keywords: ["bye", "goodbye", "take care"],
            responses: ["Bye. Talk to you soon.", "Goodbye!", "Have fun."]
        },
        {
            keywords: ["interests", "career"],
            responses: ["Computer Science is fun.", "Programming is lots of fun.", "I like programming a lot."]
        }
    ];

    /* if no keywords are found, use these responses */
    let randomResponses =
    [
        "That's interesting!",
        "Would you tell me more?",
        "Hmm, tell me more about that.",
        "Would you elaborate?",
        "Interesting, please go on.",
        "Fascinating! Tell me more.",
    ];

    function createRobot()
    {
        let context = null;

        while (true)
        {
            let userInput = prompt("Ask me a question:");

            if (!userInput)
            {
                break;
            }

            let responseObj = responses.find(function(obj)
            {
                return obj.keywords.some(function(keyword) {
                    return userInput.toLowerCase().indexOf(keyword) !== -1;
                });
            });

            /* if keyword is found */
            if (responseObj)
            {
                let randomIndex = Math.floor(Math.random() * responseObj.responses.length);

                alert(responseObj.responses[randomIndex]);

                if (responseObj.keywords.indexOf("bye") !== -1)
                {
                    break;
                }

                context = responseObj.keywords;
            }
            else
            {
                let result = calculate(userInput);

                if (result !== null)
                {
                    alert("The result is: " + result);
                }
                else
                {
                    let randomIndex = Math.floor(Math.random() * randomResponses.length);

                    alert(randomResponses[randomIndex]);
                }
            }
        }
    }

    function calculate(input)
    {
        try
        {
            return eval(input);
        }
        catch (error)
        {
            return null;
        }
    }

    createRobot();

}());