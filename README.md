# Renard.js 1.0, A basic game framework for JavaScript 
![renard.js logo](https://raw.githubusercontent.com/Yefee8/renardjs/9cb3f8ed4b3acff7c2c99937c81e2fe0cb68a856/logos/logo.svg)

## How to use?
### Use cdn
```
<body>
<!-- some code -->
<script src="https://yefee8.github.io/renardjs/script.js"></script>
<script>
// renardjs codes
</script>
</body>
```
### clone the project
> git clone https://github.com/Yefee8/renardjs.git

## Get Started

### Set character
To set our character, our character needs a certain position and we need a certain width and height.
After doing these, we give our character an id so that renard.js can check it.
After these style operations, we write the following code in our script tags:
```
character = 'yourCharacterId'
```
and so we introduced our character to renard, now we need to specify the speed of our character.
This is how we do it:
```
speed = 100
// this speed is taken in px
```
Now our character can move with the d and a keys.
### Follow character
If you follow the character, The body tag must be larger than the screen. 

### Set the limit that the character can go
we divide it into 2 as right and left limit 
but
only these are not enough to define the borders, we also need to introduce the width of our character to renard.js
for example:
```
chWidth=100
// This is the width of our character
rightLimit=150;
leftLimit=3000;
// renard.js takes this as px
```
Currently, our character can go up to 3000px to the left and 150px to the right.

### Make our character can jump
In order to make our character jumpable, we first need to show that we allow it.
for example:
```
jump = true;
// If the jump value is not changed, it remains false.
```
Now let's code how much px our character can jump up!
```
jumpPower:100
// its value is px
```
we also have to choose when and where to fall after jumping.
( the place where we will fall is position absoloute
It must be equal to bottom ! )
```
bottom = 100;
fallSpeed = 250
// fallspeed is taken in ms and more than 500 is not recommended.
```

### Example
HTML:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>renardjs</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div id="ch"></div>
<div id="hi"><pre>
    <center><img src="logos/logo.svg" alt="" width="300px"></center>
    Welcome to the renard.js demo.
    if you want read the documentation go <a href="https://github.com/yefee8/renardjs">github</a>
<center>go  3000px ►</center>
</pre>
</div>
<div style="
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
font-size: 35px;
font-family: -apple-system;
position: absolute;left:1500px;top: 0;
color:white;
">
end!
</div>
<script src="https://yefee8.github.io/renardjs/script.js">
</script>
<script>
    character = 'ch'; //
    speed = 100 //
    jump = true
    jumpPower = 100
    bottom = 100;
    fallSpeed = 250
    chWidth = 100 //
    rightLimit = 0 //
    leftLimit = 3000 //
</script>
</body>
</html>
```
CSS:
```
#ch{
background:crimson;
width: 100px;
height: 100px;
position:absolute;left:20px;bottom:100px;
transition: 500ms;
}
div#hi{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content:center;
    align-items: center;
    color:white;
    margin: auto;
    font-size: 25px;
}
body{
    background:#333333;
}

a{
    color:cyan;
}
```
