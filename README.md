# Founders and Coders Application Site

# Initial Build and Index

I initially built this as a single page site, navigable from the links at the top. But the site felt too busy and overwhelming, so I split it down into multiple pages. I initially put the sun in the middle of the page, straddling two sections, but decided it looked too much like a loading wheel so offset it. It makes me smile. 

# My Projects Page

I am drawn to video demonstrations of sites, as I feel they give a closer representation of the usability of a site and offer the viewer an insight into the site without having to commit to a click-through. I have also chosen to include tools used along with a selection of challenges I faced, to give insight into the build and my approach to problem-solving. 

# About Me + Why

In the About Me section I have included a video introduction giving some insight into my coding journey so far, why I would love Founders and Coders to be the place where I continue my training and what I hope to bring to the community. I have then created three hoverable cards discussing three key aspects of my life so far and featuring some projects and achievements of which I am particularly proud and which helped lead me here. I played with the opacity to help prevent information overload, add an interactive element and help guide user attention. 

# Colour scheme 

I love bright orange. Whenever it is used it’s such a happy surprise. I am drawn to an aesthetic which is tasteful but with a shock of colour or something slightly tacky or playful. 

# Challenges

- Targeting the small-version elements intended for the mobile-friendly version. 
I used small-version as a utility class to put display: none on those elements which were there to make the site responsive. This didn’t work so I made the target more specific, using .small-version.button and .small-version.main-image nstead. 

- Making the videos responsive. I initially also had difficulty making the about images responsive but after about half an hour realised I had a stray div closing tag :) . For the videos, I managed to use flex to keep the videos within the columns with an aesthetically-pleasing margin.

- Formatting the Twitter section. It was resolutely left aligned. I tried to justify content, then used px but that wasn’t responsive enough. I then used 
    display: flex;
    align-items: center;
    justify-content: center;    
And that fixed the problem. 
