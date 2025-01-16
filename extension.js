define(['pipAPI','pipScorer','underscore'], function(APIConstructor, Scorer, _) {

	function stiatExtension(options) {
		var API = new APIConstructor();
		var scorer = new Scorer();
		var piCurrent = API.getCurrent();

		var stiatObj = {
			// Set the canvas of the task
			canvas: {
				maxWidth: 725,
				proportions: 0.7,
				background: '#ffffff',
				borderWidth: 5,
				canvasBackground: '#ffffff',
				borderColor: 'lightblue'
			},
			// Define the category
			category: {
				name: 'Autistics', // Category name to be used for feedback and logging
				title: {
					media: {word: 'Autistics'}, // Name of the category presented in the task
					css: {color: '#31b404', 'font-size': '2em'},
					height: 4
				},
				media: [
					{ word: 'Repeats body movements' },
                    { word: 'Avoids eye contact' },
                    { word: 'Dislikes unexpected changes' },
                    { word: 'Struggles making friends' },
                    { word: 'Repeats certain words' }
				],
				css: {color: '#31b404', 'font-size': '2em'}
			},
			attribute1: {
				name: 'Unpleasant',
				title: {
					media: {word: 'Unpleasant'},
					css: {color: '#31b404', 'font-size': '2em'},
					height: 4
				},
				media: [
					{word: 'Bomb'},
					{word: 'Abuse'},
					{word: 'Sadness'},
					{word: 'Pain'},
					{word: 'Poison'},
					{word: 'Grief'}
				],
				css: {color: '#31b404', 'font-size': '2em'}
			},
			attribute2: {
				name: 'Pleasant',
				title: {
					media: {word: 'Pleasant'},
					css: {color: '#31b404', 'font-size': '2em'},
					height: 4
				},
				media: [
					{word: 'Paradise'},
					{word: 'Pleasure'},
					{word: 'Cheer'},
					{word: 'Wonderful'},
					{word: 'Splendid'},
					{word: 'Love'}
				],
				css: {color: '#31b404', 'font-size': '2em'}
			},
			// Trial blocks configuration
			trialsByBlock: [
				{
					instHTML: '', // Empty means we will create instructions dynamically
					block: 1,
					miniBlocks: 1,
					singleAttTrials: 10,
					sharedAttTrials: 10,
					categoryTrials: 0
				},
				{
					instHTML: '',
					block: 2,
					miniBlocks: 2,
					singleAttTrials: 10,
					sharedAttTrials: 7,
					categoryTrials: 7
				}
				// Add more blocks as needed
			]
		};

		return stiatObj;
	}

	return stiatExtension;
});
