const separateHeroes = require('./separateHeroes');
const data = {
    	"038–Superman": [
      	{
       	 "hora": "23:49:08.277",
        	"superHero": "038–Superman",
	        "numberOfRace": "1",
  	      "timeOfRace": "1:02.852",
    	    "velocity": "44,275"
      	},
	      {
  	      "hora": "23:50:11.447",
    	    "superHero": "038–Superman",
      	  "numberOfRace": "2",
        	"timeOfRace": "1:03.170",
	        "velocity": "44,053"
  	    },
    	  {
      	  "hora": "23:51:14.216",
        	"superHero": "038–Superman",
	        "numberOfRace": "3",
  	      "timeOfRace": "1:02.769",
    	    "velocity": "44,334"
      	},
	      {
  	      "hora": "23:52:17.003",
    	    "superHero": "038–Superman",
      	  "numberOfRace": "4",
        	"timeOfRace": "1:02.787",
	        "velocity": "44,321"
  	    }
    	],
	    "033–Flash": [
  	    {
    	    "hora": "23:49:10.858",
      	  "superHero": "033–Flash",
        	"numberOfRace": "1",
	        "timeOfRace": "1:04.352",
  	      "velocity": "43,243"
    	  },
      	{
	        "hora": "23:50:14.860",
  	      "superHero": "033–Flash",
    	    "numberOfRace": "2",
      	  "timeOfRace": "1:04.002",
        	"velocity": "43,48"
	      },
  	    {
    	    "hora": "23:51:18.576",
	        "superHero": "033–Flash",
  	      "numberOfRace": "3",
    	    "timeOfRace": "1:03.716",
      	  "velocity": "43,675"
	      },
  	    {
    	    "hora": "23:52:22.586",
      	  "superHero": "033–Flash",
	        "numberOfRace": "4",
  	      "timeOfRace": "1:04.010",
    	    "velocity": "43,474"
	      }
  	  ],
    	"002–Mercúrio": [
      	{
	        "hora": "23:49:11.075",
  	      "superHero": "002–Mercúrio",
    	    "numberOfRace": "1",
      	  "timeOfRace": "1:04.108",
        	"velocity": "43,408"
	      },
  	    {
	        "hora": "23:50:15.057",
  	      "superHero": "002–Mercúrio",
    	    "numberOfRace": "2",
      	  "timeOfRace": "1:03.982",
        	"velocity": "43,493"
	      },
  	    {
    	    "hora": "23:51:19.044",
      	  "superHero": "002–Mercúrio",
        	"numberOfRace": "3",
	        "timeOfRace": "1:03.987",
  	      "velocity": "43,49"
    	  },
      	{
        	"hora": "23:52:22.120",
	        "superHero": "002–Mercúrio",
  	      "numberOfRace": "4",
    	    "timeOfRace": "1:03.076",
      	  "velocity": "44,118"
	      }
  	  ],
    	"023–Sonic": [
	      {
  	      "hora": "23:49:12.667",
    	    "superHero": "023–Sonic",
      	  "numberOfRace": "1",
        	"timeOfRace": "1:04.414",
	        "velocity": "43,202"
  	    },
    	  {
	        "hora": "23:50:17.472",
  	      "superHero": "023–Sonic",
    	    "numberOfRace": "2",
      	  "timeOfRace": "1:04.805",
	        "velocity": "42,941"
  	    },
    	  {
      	  "hora": "23:51:21.759",
	        "superHero": "023–Sonic",
  	      "numberOfRace": "3",
    	    "timeOfRace": "1:04.287",
      	  "velocity": "43,287"
	      },	
  	    {
    	    "hora": "23:52:25.975",
      	  "superHero": "023–Sonic",
        	"numberOfRace": "4",
	        "timeOfRace": "1:04.216",
  	      "velocity": "43,335"
    	  }
	    ],	
  	  "015–PAPALÉGUA": [
    	  {
      	  "hora": "23:49:30.976",
        	"superHero": "015–PAPALÉGUA",
	        "numberOfRace": "1",
  	      "timeOfRace": "1:18.456",
    	    "velocity": "35,47"
      	},
	      {
  	      "hora": "23:50:37.987",
    	    "superHero": "015–PAPALÉGUA",
      	  "numberOfRace": "2",
        	"timeOfRace": "1:07.011",
	        "velocity": "41,528"
  	    },
    	  {
      	  "hora": "23:53:06.741",
        	"superHero": "015–PAPALÉGUA",
	        "numberOfRace": "4",
  	      "timeOfRace": "1:20.050",
    	    "velocity": "34,763"
      	}
	    ],
  	  "015–PAPALÉGU": [
    	  {
	        "hora": "23:51:46.691",
  	      "superHero": "015–PAPALÉGU",
    	    "numberOfRace": "3",
      	  "timeOfRace": "1:08.704",
        	"velocity": "40,504"
	      }
  	  ],
    	"011–GATOAJATO": [
      	{
        	"hora": "23:52:01.796",
	        "superHero": "011–GATOAJATO",
  	      "numberOfRace": "1",
    	    "timeOfRace": "3:31.315",
      	  "velocity": "13,169"
	      },
  	    {
    	    "hora": "23:53:39.660",
      	  "superHero": "011–GATOAJATO",
        	"numberOfRace": "2",
	        "timeOfRace": "1:37.864",
  	      "velocity": "28,435"
    	  },
      	{
	        "hora": "23:54:57.757",
  	      "superHero": "011–GATOAJATO",
    	    "numberOfRace": "3",
      	  "timeOfRace": "1:18.097",
        	"velocity": "35,633"
	      }
  	  ]
};

describe('test separateHeroes function', () => {
	it('should not return undefined', () => {
		expect(separateHeroes).not.toBeUndefined()
	});
	it('should process list of 011–GATOAJATO', () => {
			const item = "011–GATOAJATO"
			const expectedResponse = {
	      "superHero": "011–GATOAJATO",
  	    "time": "6:27.27600000000001",
    	  "finishRun": false
    	}
			expect(separateHeroes(data, item))
				.toEqual(expectedResponse)
	})
	it('should proccess list of 038–Superman', () => {
		const hero = "038–Superman"
		const expectedResponse = {
			superHero: hero,
			time: "4:11.578",
			finishRun: true,
			hora: "23:52:17.003"
		}
		expect(separateHeroes(data, hero))
			.toEqual(expectedResponse)
	})
});

