# Fruitymaps
Source code for [fruitymaps.com](http://fruitymaps.com) - Apple Maps in your browser

# Why?
Apple hinted at the existence of an Apple Maps API on their [WWDC-minisite](https://developer.apple.com/wwdc/attending/). I took a closer look and discovered that by stubbing the bootstrap file, you can get this to work on any website

# How?
When calling `mapkit.init()`a bootstrap configuration file is loaded from an Apple-server. This does not work when calling this from your own domain. 

However, you can supply your own `bootstrapUrl`in the configuration object passed to `mapkit.init()`, making it easy to stub this file. Like I did in this [gist](https://gist.githubusercontent.com/TimBroddin/503b4d0e8884ca73de2090daede9c0b1/raw/4941546cff0f669d3dd92c7284b744ae6d240bd1/bootstrap.json).

# Why Meteor?

Because their tooling (ES6-support, React-support, transpiling, ...) simply beats everything else.

# Running locally

* Clone this repo
* Install Meteor
		
		curl https://install.meteor.com | /bin/sh
		
* Run
	
		meteor --settings settings.json


# Mapkit API

## Initializing

	var map = new mapkit.Map('map');
  
Creates a map in the `div` with id "map".

## Methods

TODO

