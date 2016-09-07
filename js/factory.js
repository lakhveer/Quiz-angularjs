app.factory('quizFactory', function() {
	var questions = [
		{
			question: "What is the default value of String variable?",
			options: ['""', "''", "null", "not defined"],
			answer: 2
		},
		{
			question: "Is it necessary that each try block must be followed by a catch block?",
			options: ["True.", "False."],
			answer: 1
		},
		{
			question: "What is the size of char variable?",
			options: ["8 bit", "16 bit", "32 bit", "64 bit"],
			answer: 1
		},
		{
			question: "What is an Interface?",
			options: ["An interface is a collection of abstract methods.", "Interface is an abstract class.", 
			          "Interface is an concrete class.", "None of the above."],
			answer: 2
		},
		{	
			question: "Is an empty .java file a valid source file?",
			options: ["True", "False"],
			answer: 0
		}
	];

	return {
		getQuestion: function(id) {
			if(id < questions.length) {
				return questions[id];
			} else {
				return false;
			}
		}
	};
});