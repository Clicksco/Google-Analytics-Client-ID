Google Analytics Client ID
==========================

##About
Get Google Analytics Client ID


##install
**npm install @mae/ga_cid**   
**npm ubpublish @mae/ga_cid**

##Usage
use google analytics or universal analytics to get client id.
include this package and it will check of google analytics or universal analytics are inluced 
then get client id, if didn't on first try retry couple of times and save as cookie, on form submit 
for a lander we will get that google clientId


Updates: exeptions added, if google analytics is not loaded then show warning message.