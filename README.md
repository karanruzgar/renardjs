# Renard.js 2.0 Demo, A basic game framework for JavaScript 
![renard.js logo](https://raw.githubusercontent.com/Yefee8/renardjs/9cb3f8ed4b3acff7c2c99937c81e2fe0cb68a856/logos/logo.svg)

## Update log
- Completely made easy to use (moved to function structure)

### Documention

#### What is Renard?
Renard.js is easy to use game library. You can add move system with 1 line of code!

#### Why Renard?
Because it's lightweight, easy to use and completely free!

#### Get started

You can add Renard.js with to different ways

1. Using cdn
```
<script src="https://yefee8.github.io/renardjs/minified.js"></script>
<script>
// some code
</script>
```

2. Cloning the project
```
git clone ...
```

Now we can use Renard.js.

#### Adding Moving System
for adding moving system, firstly we need a characther(it must have an id)

```
<div id="ch"></div>
```
after that, we need to use ```useMoveSys(id, width, speed, leftLimit, rightLimit)``` function. 

```
<div id="ch"
style="
width:100px;
height:100px;
background:crimson;
"
></div>

<script src="https://yefee8.github.io/renardjs/minified.js"></script>

<script>
useMoveSys('ch', '100', 100, 0, window.innerWidth);
</script>
```
let's expalin ```id``` and other things.

1. id
id is the id of our character.

2. width
width is the width of our character.

3. speed
speed is the speed of our character

4. leftLimit
leftLimit is the limit that our character can move to the left maximum.

5. rightLimit
rightLimit is the limit that our character can move to the right maximum.
