let currentQuestion = 0;
let answers = [];

const questions = [
    { 
        question: "How would you describe your body frame?", 
        options: ["Small and slender", "Medium", "Large and sturdy"]
    },
    { 
        question: "How is your digestion?", 
        options: ["Fast metabolism, easily digestible", "Moderate", "Slow digestion, heavy meals"]
    },
    { 
        question: "How is your skin type?", 
        options: ["Dry", "Sensitive", "Oily"]
    },
    { 
        question: "What is your sleep pattern?", 
        options: ["Light sleeper, variable sleep duration", "Moderate sleeper, consistent sleep duration", "Deep sleeper, long sleep duration"]
    },
    { 
        question: "How is your appetite?", 
        options: ["Variable, sometimes strong, sometimes weak", "Strong and consistent", "Weak and variable"]
    },
    { 
        question: "How do you handle stress?", 
        options: ["Anxious, restless", "Irritable, aggressive", "Calm, slow to react"]
    },
    { 
        question: "How is your energy level throughout the day?", 
        options: ["High energy, variable", "Moderate, consistent", "Low energy, variable"]
    },
    { 
        question: "What is your preferred climate?", 
        options: ["Warm and humid", "Moderate", "Cool and dry"]
    },
    { 
        question: "How is your memory?", 
        options: ["Forgetful, variable", "Sharp, focused", "Stable, slow"]
    },
    { 
        question: "How do you handle change?", 
        options: ["Adaptable, flexible", "Resistant, stubborn", "Cautious, slow"]
    },
    { 
        question: "What type of exercise do you prefer?", 
        options: ["Energetic, fast-paced", "Moderate, rhythmic", "Gentle, calming"]
    },
    { 
        question: "How is your hair type?", 
        options: ["Dry, frizzy", "Moderate, silky", "Oily, thick"]
    },
    { 
        question: "What is your preferred food taste?", 
        options: ["Sweet, salty", "Spicy, sour", "Bitter, astringent"]
    },
    { 
        question: "How do you handle challenges?", 
        options: ["Enthusiastic, impulsive", "Competitive, intense", "Steady, patient"]
    },
    { 
        question: "What type of weather aggravates you?", 
        options: ["Cold, dry", "Hot, humid", "Windy"]
    },
    { 
        question: "How is your sense of taste?", 
        options: ["Variable, inconsistent", "Strong, intense", "Mild, stable"]
    },
    { 
        question: "What is your preferred leisure activity?", 
        options: ["Active, adventurous", "Intellectual, thoughtful", "Relaxing, calming"]
    },
    { 
        question: "How do you handle conflicts?", 
        options: ["Avoid, withdraw", "Confront, argue", "Seek compromise, mediate"]
    },
    { 
        question: "How is your posture?", 
        options: ["Slouched, relaxed", "Straight, upright", "Stiff, tense"]
    },
    { 
        question: "What is your preferred color?", 
        options: ["Warm colors (red, orange, yellow)", "Cool colors (blue, green, purple)", "Neutral colors (white, black, gray)"]
    },
    // Additional Questions
    { 
        question: "How is your sense of smell?", 
        options: ["Sensitive, easily overwhelmed", "Moderate", "Less sensitive, difficult to overwhelm"]
    },
    { 
        question: "What is your preferred reading genre?", 
        options: ["Fiction", "Non-fiction", "Poetry"]
    },
    { 
        question: "How is your social behavior?", 
        options: ["Outgoing, talkative", "Moderate, balanced", "Reserved, introverted"]
    },
    { 
        question: "How do you approach decision-making?", 
        options: ["Quick, impulsive", "Thoughtful, methodical", "Cautious, deliberative"]
    },
    { 
        question: "How do you spend your weekends?", 
        options: ["Engaging in social activities", "Pursuing hobbies", "Relaxing, unwinding"]
    },
    { 
        question: "How is your reaction to pain?", 
        options: ["High sensitivity, intense reaction", "Moderate sensitivity, manageable reaction", "Low sensitivity, minimal reaction"]
    },
    { 
        question: "What is your preferred communication style?", 
        options: ["Expressive, animated", "Clear, concise", "Thoughtful, reflective"]
    },
    { 
        question: "How is your sense of humor?", 
        options: ["Playful, spontaneous", "Witty, clever", "Dry, subtle"]
    },
    { 
        question: "What type of music do you enjoy?", 
        options: ["Upbeat, energetic", "Melodic, calming", "Complex, intricate"]
    },
    { 
        question: "How do you handle criticism?", 
        options: ["Sensitive, take it personally", "Reflective, open to feedback", "Reserved, unaffected"]
    },
    { 
        question: "What is your preferred mode of transportation?", 
        options: ["Fast and efficient", "Steady and comfortable", "Scenic and leisurely"]
    },
    { 
        question: "How is your response to surprises?", 
        options: ["Excited, enjoy surprises", "Adaptable, take them in stride", "Prefer predictability, dislike surprises"]
    },
    { 
        question: "How do you express affection?", 
        options: ["Verbally, expressively", "Through actions, gestures", "Reserved, subtle"]
    },
    { 
        question: "What type of movies do you enjoy?", 
        options: ["Action, adventure", "Drama, romance", "Documentaries, educational"]
    },
    { 
        question: "How is your financial behavior?", 
        options: ["Spontaneous spender", "Moderate, balanced", "Cautious saver"]
    },
    { 
        question: "How do you handle time management?", 
        options: ["Flexible, go with the flow", "Organized, planned", "Structured, adhere to a routine"]
    },
    { 
        question: "What is your approach to learning?", 
        options: ["Quick learner, grasp concepts easily", "Steady learner, methodical", "Thorough learner, require repetition"]
    },
    { 
        question: "How do you handle public speaking?", 
        options: ["Confident, enjoy it", "Comfortable, but prefer not to", "Nervous, anxious"]
    },
    { 
        question: "What is your approach to technology?", 
        options: ["Early adopter, tech enthusiast", "Adaptable, use what's necessary", "Prefer traditional methods, skeptical of technology"]
    },
    // Add more questions as needed
];

const welcomeScreen = document.getElementById("welcomeScreen");
const questionnaireScreen = document.getElementById("questionnaireScreen");
const resultsScreen = document.getElementById("resultsScreen");

function startAnalysis() {
    welcomeScreen.classList.add("hidden");
    questionnaireScreen.classList.remove("hidden");
    showQuestion();
}

function showQuestion() {
    const questionContainer = document.getElementById("questionContainer");
    const currentQuestionData = questions[currentQuestion];

    let optionsHtml = '';
    currentQuestionData.options.forEach((option, index) => {
        optionsHtml += `<label class="option">
                            <input type="radio" name="answer" value="${index}" required>
                            ${option}
                        </label>`;
    });

    questionContainer.innerHTML = `<p class="question">${currentQuestionData.question}</p>${optionsHtml}`;
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

function nextQuestion() {
    const answer = document.querySelector('input[name="answer"]:checked');
    if (answer) {
        answers.push(answer.value);

        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            showQuestion();
        } else {
            finishAnalysis();
        }
    } else {
        alert("Please select an answer");
    }
}

function finishAnalysis() {
    questionnaireScreen.classList.add("hidden");
    resultsScreen.classList.remove("hidden");

    // Perform dosha analysis and display results
    const doshaSummary = document.getElementById("doshaSummary");
    const recommendations = document.getElementById("recommendations");

    // Simulate dosha analysis based on answers
    const vataCount = answers.filter(ans => ans === "0").length;
    const pittaCount = answers.filter(ans => ans === "1").length;
    const kaphaCount = answers.filter(ans => ans === "2").length;

    // Determine the dominant dosha
    let dominantDosha = "Vata";
    if (pittaCount > vataCount && pittaCount > kaphaCount) {
        dominantDosha = "Pitta";
    } else if (kaphaCount > vataCount && kaphaCount > pittaCount) {
        dominantDosha = "Kapha";
    }

    doshaSummary.innerText = `Your dominant dosha is ${dominantDosha}.`;
    recommendations.innerText = "Here are personalized recommendations for you...";
}

function restartAnalysis() {
    currentQuestion = 0;
    answers = [];

    resultsScreen.classList.add("hidden");
    questionnaireScreen.classList.remove("hidden");
    showQuestion();
}

// Initial question display
showQuestion();
